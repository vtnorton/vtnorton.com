import type { NextApiRequest, NextApiResponse } from 'next'
import { coverProcessingService } from '../../../services/coverProcessingService'

export const config = {
	maxDuration: 300,
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method !== 'GET') {
		return res.status(405).json({ error: 'Method not allowed' })
	}

	const authHeader = req.headers.authorization
	const cronSecret = process.env.CRON_SECRET

	if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
		return res.status(401).json({ error: 'Unauthorized' })
	}

	try {
		const result = await coverProcessingService.processAllCovers()
		return res.status(200).json(result)
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error'
		return res.status(500).json({ error: message })
	}
}
