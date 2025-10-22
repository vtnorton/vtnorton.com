import type { NextApiRequest, NextApiResponse } from 'next'
import { Post } from '../../models/Post'
import { handleCache } from '../../middleware/cache'
import { postServices } from '../../services/postsServices'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Post[] | { error: string }>,
) {
	if (req.method !== 'GET')
		return res.status(405).json({ error: 'Method not allowed' })

	const postQuantity = req.query.quantity ? parseInt(req.query.quantity.toString()) : 20

	const cacheKey = 'personal-blog-posts'

	const itens = await handleCache<Post>(cacheKey, () => postServices.getPersonalBlogPosts(), 60 * 60 * 8)

	return res.status(200).json(itens.slice(0, postQuantity))
}