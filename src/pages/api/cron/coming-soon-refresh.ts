import type { NextApiRequest, NextApiResponse } from 'next'
import { comingSoonKvAdapter } from '../../../adapters/comingSoonKvAdapter'

export const config = {
	maxDuration: 60,
}

const WORKFLOW_REPOSITORY = 'vtnorton/vtnorton.com'
const MIN_INTERVAL_MS = 5 * 60 * 1000
const MAX_INTERVAL_MS = 12 * 60 * 60 * 1000

const drawNextRefreshAt = (now: number): number => {
	const interval = MIN_INTERVAL_MS + Math.random() * (MAX_INTERVAL_MS - MIN_INTERVAL_MS)
	return Math.round(now + interval)
}

const readRepositoryNames = (body: unknown): string[] => {
	if (typeof body !== 'object' || body === null || !('repositories' in body)) return []
	if (!Array.isArray(body.repositories)) return []

	return body.repositories.flatMap((repository: unknown) => {
		if (typeof repository !== 'object' || repository === null || !('full_name' in repository)) return []
		return typeof repository.full_name === 'string' ? [repository.full_name] : []
	})
}

const isCalledByRepositoryWorkflow = async (authorization: string | undefined): Promise<boolean> => {
	if (!authorization?.startsWith('Bearer ')) return false

	const response = await fetch('https://api.github.com/installation/repositories', {
		headers: {
			Accept: 'application/vnd.github+json',
			Authorization: authorization,
			'X-GitHub-Api-Version': '2022-11-28',
		},
	})
	if (!response.ok) return false

	const repositoryNames = readRepositoryNames(await response.json())
	return repositoryNames.length === 1 && repositoryNames[0] === WORKFLOW_REPOSITORY
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })
	if (!(await isCalledByRepositoryWorkflow(req.headers.authorization))) {
		return res.status(401).json({ error: 'Unauthorized' })
	}

	try {
		const now = Date.now()
		const nextRefreshAt = await comingSoonKvAdapter.readNextRefreshAt()
		if (nextRefreshAt !== null && now < nextRefreshAt) {
			return res.status(200).json({ refreshed: false, nextRefreshAt: new Date(nextRefreshAt).toISOString() })
		}

		await res.revalidate('/')
		const upcomingRefreshAt = drawNextRefreshAt(now)
		await comingSoonKvAdapter.saveNextRefreshAt(upcomingRefreshAt)

		return res.status(200).json({ refreshed: true, nextRefreshAt: new Date(upcomingRefreshAt).toISOString() })
	} catch (error) {
		console.error('coming-soon.refresh-failed', error)
		const message = error instanceof Error ? error.message : 'Unknown error'
		return res.status(500).json({ error: message })
	}
}

export default handler
