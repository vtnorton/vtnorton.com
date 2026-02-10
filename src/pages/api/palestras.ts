import type { NextApiRequest, NextApiResponse } from 'next'
import { handleCache } from '../../middleware/cache'
import { CACHE_KEYS } from '../../database/cacheKeys'
import { palestrasServices } from '../../services/palestrasServices'
import { Talk } from '../../models/Talk'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Talk[] | { error: string }>,
) {
	if (req.method !== 'GET')
		return res.status(405).json({ error: 'Method not allowed' })

	const cacheKey = CACHE_KEYS.PALESTRAS

	const palestras = await handleCache<Talk>(
		cacheKey,
		() => palestrasServices.getAllTalks(),
		60 * 60 * 8,
	)

	return res.status(200).json(palestras)
}