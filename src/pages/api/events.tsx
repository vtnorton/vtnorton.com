import type { NextApiRequest, NextApiResponse } from 'next'

import { getEvents } from '../../services/notionServices'
import { Event } from '../../interfaces/Event'
import { handleCache } from '../../services/cacheServices'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Event[] | { error: string }>,
) {
	if (req.method !== 'GET')
		return res.status(405).json({ error: 'Method not allowed' })

	const itens = await handleCache<Event>('instagram', getEvents)
	return res.status(200).json(itens)
}
