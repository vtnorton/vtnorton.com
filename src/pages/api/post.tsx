import type { NextApiRequest, NextApiResponse } from 'next'
import { getBlogSectionItems } from '../../services/notionServices'
import { BlogGridItemProps } from '../../components'
import { kv } from '@vercel/kv'
import { generateRssFeed } from '../../services/rssServices'

export default async function handler(req: NextApiRequest, res: NextApiResponse<BlogGridItemProps[]>) {
	const cacheKey = 'blogPosts'
	const postQuantity = req.headers['vtnpostquantity'] ? parseInt(req.headers['vtnpostquantity'].toString()) : 12
	const cachedPosts = (await kv.get(cacheKey)) as BlogGridItemProps[]

	if (cachedPosts) return res.status(200).json(cachedPosts.slice(0, postQuantity))

	const posts: BlogGridItemProps[] = await getBlogSectionItems(200)
	await generateRssFeed(posts)
	await kv.setex(cacheKey, 60 * 60 * 8, posts)

	return res.status(200).json(posts.slice(0, postQuantity))
}
