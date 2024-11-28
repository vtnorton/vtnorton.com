import { kv } from '@vercel/kv'
import type { NextApiRequest, NextApiResponse } from 'next'

import { CalendarItem } from '../../interfaces'
import { getBoraLerEvents } from '../../services/calendarServices'

export default async function handler(req: NextApiRequest, res: NextApiResponse<CalendarItem[]>) {
	const cacheKey = 'boraler'
	const cachedEvents = (await kv.get(cacheKey)) as CalendarItem[]

	if (cachedEvents)
		return res.status(200).json(cachedEvents)

	const events: CalendarItem[] = await getBoraLerEvents()
	await kv.setex(cacheKey, 60 * 60 * 12, events)

	return res.status(200).json(events)
}
