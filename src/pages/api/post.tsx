import type { NextApiRequest, NextApiResponse } from 'next'
import { getBlogSectionItems } from '../../services/notionServices'
import { BlogGridItemProps } from '../../components'
import { kv } from '@vercel/kv'

export default async function handler(req: NextApiRequest, res: NextApiResponse<BlogGridItemProps[]>) {
	const cacheKey = 'blogPosts'

	const cachedPosts = (await kv.get(cacheKey)) as BlogGridItemProps[]
	if (cachedPosts) {
		console.log('returned cached data')
		return res.status(200).json(cachedPosts)
	}

	const posts: BlogGridItemProps[] = await getBlogSectionItems(42)
	await kv.setex(cacheKey, 300, posts)

	console.log('returned actual data')
	res.status(200).json(posts)
}
