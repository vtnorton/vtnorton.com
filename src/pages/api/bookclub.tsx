import type { NextApiRequest, NextApiResponse } from 'next'
import { kv } from '@vercel/kv'
import { getClubeDoLivroEvents } from '../../services/calendarServices'
import { CalendarItem } from '../../interfaces'

export default async function handler(req: NextApiRequest, res: NextApiResponse<CalendarItem[]>) {
	const cacheKey = 'bookclub'
	const cachedEvents = (await kv.get(cacheKey)) as CalendarItem[]

	if (cachedEvents) return res.status(200).json(cachedEvents)

	const events: CalendarItem[] = await getClubeDoLivroEvents()
	await kv.setex(cacheKey, 60 * 60 * 12, events)

	return res.status(200).json(events)
}
