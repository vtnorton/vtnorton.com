import type { NextApiRequest, NextApiResponse } from 'next'
import { Post } from '../../models/Post'
import { handleCache } from '../../middleware/cache'
import { postServices } from '../../services/postsServices'
import { PaginatedResponse } from '../../types/PaginatedResponse'
import { CACHE_KEYS } from '../../database/cacheKeys'
import { itemCategoryFilter } from '../../utils/query/postsQuery'

const getFilter = (type: string | null) => {
	if (type === 'personal') {
		return {
			cacheKey: CACHE_KEYS.PERSONAL_BLOG_POSTS,
			filter: [itemCategoryFilter('Pessoal')],
		}
	}

	if (type === 'tech') {
		return {
			cacheKey: CACHE_KEYS.TECH_BLOG_POSTS,
			filter: [
				{
					or: [
						itemCategoryFilter('Tech'),
						itemCategoryFilter('Dev Advocate'),
					],
				},
			],
		}
	}

	return {
		cacheKey: CACHE_KEYS.ALL_BLOG_POSTS,
		filter: [],
	}
}

// TODO: Ver se está buscando mais de 100 itens no Notion para conseguir fazer paginação após essa quantidade de itens
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<PaginatedResponse<Post> | { error: string }>,
) {
	if (req.method !== 'GET')
		return res.status(405).json({ error: 'Method not allowed' })

	const page = req.query.page ? parseInt(req.query.page.toString()) : 1
	const limit = req.query.limit ? parseInt(req.query.limit.toString()) : 10
	const tag = req.query.tag ? req.query.tag.toString() : null
	const type = req.query.type ? req.query.type.toString() : null

	const { cacheKey, filter } = getFilter(type)

	if (page < 1 || limit < 1 || limit > 100) {
		return res.status(400).json({ error: 'Invalid pagination parameters' })
	}

	let allPosts = await handleCache<Post>(
		cacheKey,
		() => filter ? postServices.getPosts(filter) : postServices.getPosts(),
		60 * 60 * 8,
	)

	if (tag) {
		allPosts = allPosts.filter((post) =>
			post.hashtags.map((t) => t.toLowerCase()).includes(tag.toLowerCase()),
		)
	}

	const total = allPosts.length
	const totalPages = Math.ceil(total / limit)
	const startIndex = (page - 1) * limit
	const endIndex = startIndex + limit

	const posts = allPosts.slice(startIndex, endIndex)
	const response: PaginatedResponse<Post> = {
		content: posts,
		pagination: {
			page,
			limit,
			total,
			totalPages,
			hasMore: page < totalPages,
		},
	}

	return res.status(200).json(response)
}