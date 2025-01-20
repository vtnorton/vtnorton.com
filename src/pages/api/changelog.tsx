import type { NextApiRequest, NextApiResponse } from 'next'

import { handleCache } from '../../services/cacheServices'
import { Changelog } from '../../models/Changelog'
import { getChangelogs } from '../../services/postsServices'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Changelog[] | { error: string }>) {
	if (req.method !== 'GET')
		return res.status(405).json({ error: 'Method not allowed' })

	const projectId = req.query.projectid
	if (!projectId)
		return res.status(400).json({ error: 'Invalid project ID' })

	const postQuantity = req.query.quantity ? parseInt(req.query.quantity.toString()) : 3
	const itens = await handleCache<Changelog>('changelogs', () => getChangelogs(projectId?.toString()), 60 * 60 * 12)

	return res.status(200).json(itens.slice(0, postQuantity))
}
