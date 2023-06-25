import { kv } from '@vercel/kv'
import type { NextApiRequest, NextApiResponse } from 'next'

import { PodcastEpisode } from '../../interfaces'
import { getPodcasts } from '../../services/notionServices'

export default async function handler(req: NextApiRequest, res: NextApiResponse<PodcastEpisode[]>) {
	const cacheKey = 'podcast'
	const cachedEvents = (await kv.get(cacheKey)) as PodcastEpisode[]

	if (cachedEvents) return res.status(200).json(cachedEvents)

	const podcasts: PodcastEpisode[] = await getPodcasts()
	await kv.setex(cacheKey, 60 * 60 * 24, podcasts)

	return res.status(200).json(podcasts)
}
