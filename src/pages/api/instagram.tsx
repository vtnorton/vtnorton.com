import { kv } from '@vercel/kv'
import type { NextApiRequest, NextApiResponse } from 'next'

import { InstagramItem } from '../../interfaces'
import { getInstagramPosts } from '../../services/instagramServices'

export default async function handler(req: NextApiRequest, res: NextApiResponse<InstagramItem[]>) {
	const cacheKey = 'instagram'
	const cachedEvents = (await kv.get(cacheKey)) as InstagramItem[]

	if (cachedEvents) return res.status(200).json(cachedEvents)

	const photos: InstagramItem[] = await getInstagramPosts()
	await kv.setex(cacheKey, 60 * 60 * 24, photos)

	return res.status(200).json(photos)
}
