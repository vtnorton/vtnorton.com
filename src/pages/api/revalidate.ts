import { kv } from '@vercel/kv'
import type { NextApiRequest, NextApiResponse } from 'next'
import { BLOG_CACHE_KEYS } from '../../database/cacheKeys'

// Invalida o cache da lista de posts. Pode ser chamado manualmente ou por uma
// automação do Notion (ao mudar o Status-post de uma postagem), garantindo que
// o feed reflita a mudança na hora, sem precisar resetar o cache na mão.
//
// Uso:
//   POST/GET /api/revalidate?secret=SEU_SEGREDO
//   ou header: x-revalidate-secret: SEU_SEGREDO
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<{ revalidated: boolean; keys?: string[]; error?: string }>,
) {
	const secret = process.env.REVALIDATE_SECRET

	if (!secret) {
		return res.status(500).json({ revalidated: false, error: 'REVALIDATE_SECRET não configurado' })
	}

	const provided = (req.query.secret as string) || (req.headers['x-revalidate-secret'] as string)

	if (provided !== secret) {
		return res.status(401).json({ revalidated: false, error: 'Segredo inválido' })
	}

	try {
		await kv.del(...BLOG_CACHE_KEYS)
		return res.status(200).json({ revalidated: true, keys: BLOG_CACHE_KEYS })
	} catch (_error) {
		return res.status(500).json({ revalidated: false, error: 'Falha ao limpar o cache' })
	}
}
