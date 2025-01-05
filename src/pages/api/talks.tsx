import type { NextApiRequest, NextApiResponse } from 'next'

import { Talk } from '../../models/Talk'
import { getTalks } from '../../services/eventsServices'
import { handleCache } from '../../services/cacheServices'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Talk[] | { error: string }>,
) {
	if (req.method !== 'GET')
		return res.status(405).json({ error: 'Method not allowed' })

	const itens = await handleCache<Talk>('talks', getTalks)
	return res.status(200).json(itens)
}
