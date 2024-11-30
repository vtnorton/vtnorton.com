import { kv } from '@vercel/kv'
import type { NextApiRequest, NextApiResponse } from 'next'

import { Talk } from '../../interfaces/Talk'
import { getTalks } from '../../services/eventsServices'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Talk[]>,
) {
	const cacheKey = 'talks'
	const cachedTalks = (await kv.get(cacheKey)) as Talk[]

	if (cachedTalks)
		return res.status(200).json(cachedTalks)

	const talks: Talk[] = await getTalks()
	await kv.setex(cacheKey, 60 * 60 * 24, talks)

	return res.status(200).json(talks)
}
