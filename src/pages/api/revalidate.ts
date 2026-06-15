import { kv } from '@vercel/kv'
import type { NextApiRequest, NextApiResponse } from 'next'
import { BLOG_CACHE_KEYS } from '../../database/cacheKeys'

export default async function handler(
	_req: NextApiRequest,
	res: NextApiResponse<{ revalidated: boolean; keys?: string[]; error?: string }>,
) {
	try {
		await kv.del(...BLOG_CACHE_KEYS)
		return res.status(200).json({ revalidated: true, keys: BLOG_CACHE_KEYS })
	} catch (_error) {
		return res.status(500).json({ revalidated: false, error: 'Falha ao limpar o cache' })
	}
}
