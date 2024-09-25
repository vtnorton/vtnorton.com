import { kv } from '@vercel/kv'
import type { NextApiRequest, NextApiResponse } from 'next'

import { getEvents } from '../../services/notionServices'
import { Event } from '../../interfaces/Event'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Event[]>,
) {
	const cacheKey = 'events'
	const cachedEvents = (await kv.get(cacheKey)) as Event[]

	if (cachedEvents)
		return res.status(200).json(cachedEvents)

	const events: Event[] = await getEvents()
	await kv.setex(cacheKey, 60 * 60 * 24, events)

	return res.status(200).json(events)
}
