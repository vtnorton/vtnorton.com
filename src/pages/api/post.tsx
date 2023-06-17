import type { NextApiRequest, NextApiResponse } from 'next'
import { getBlogSectionItems } from '../../services/notionServices'
import { BlogGridItemProps } from '../../components'
import Redis from 'ioredis'

const redis = new Redis()

export default async function handler(req: NextApiRequest, res: NextApiResponse<BlogGridItemProps[]>) {
	const cacheKey = 'blogPosts'

	const cachedPosts = await redis.get(cacheKey)
	if (cachedPosts) {
		console.log('returned cached api')
		return res.status(200).json(JSON.parse(cachedPosts))
	}

	const posts: BlogGridItemProps[] = await getBlogSectionItems(42)
	await redis.set(cacheKey, JSON.stringify(posts), 'EX', 600)

	console.log('returned actual data')
	res.status(200).json(posts)
}
