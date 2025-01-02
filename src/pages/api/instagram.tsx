import type { NextApiRequest, NextApiResponse } from 'next'

import { InstagramItem } from '../../interfaces'
import { getInstagramPosts } from '../../services/instagramServices'
import { handleCache } from '../../services/cacheServices'

export default async function handler(req: NextApiRequest, res: NextApiResponse<InstagramItem[] | { error: string }>) {
	if (req.method !== 'GET')
		return res.status(405).json({ error: 'Method not allowed' })

	const itens = await handleCache<InstagramItem>('instagram', getInstagramPosts)
	return res.status(200).json(itens)
}
