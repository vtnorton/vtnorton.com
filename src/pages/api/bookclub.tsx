import type { NextApiRequest, NextApiResponse } from 'next'

import { CalendarItem } from '../../interfaces'
import { getBoraLerEvents } from '../../services/calendarServices'
import { handleCache } from '../../services/cacheServices'

export default async function handler(req: NextApiRequest, res: NextApiResponse<CalendarItem[] | { error: string }>) {
	if (req.method !== 'GET')
		return res.status(405).json({ error: 'Method not allowed' })

	const itens = await handleCache<CalendarItem>('instagram', getBoraLerEvents, 60 * 60 * 12)
	return res.status(200).json(itens)
}
