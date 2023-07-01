import { kv } from '@vercel/kv'
import type { NextApiRequest, NextApiResponse } from 'next'

import { BlogGridItemProps } from '../../components'
import { PostType } from '../../interfaces'
import { getBlogSectionItems } from '../../services/notionServices'

export default async function handler(req: NextApiRequest, res: NextApiResponse<BlogGridItemProps[]>) {
	const postQuantity = req.query.quantity ? parseInt(req.query.quantity.toString()) : 12
	const tag = req.query.tag ? req.query.tag.toString() : undefined
	const hideChangelogs = req.query.hidechangelogs ? true : false

	const cacheKey = tag ? `blogPosts-${tag}` : `blogPosts`
	const cachedPosts = (await kv.get(cacheKey)) as BlogGridItemProps[]

	if (cachedPosts) return res.status(200).json(selectPosts(cachedPosts, hideChangelogs, postQuantity))

	const posts: BlogGridItemProps[] = await getBlogSectionItems(tag)
	await kv.setex(cacheKey, 60 * 60 * 8, posts)

	return res.status(200).json(selectPosts(posts, hideChangelogs, postQuantity))
}

const selectPosts = (posts: BlogGridItemProps[], hideChangelogs: boolean, postQuantity: number) => {
	let filteredPosts = posts
	if (hideChangelogs) {
		filteredPosts = filteredPosts.filter((post) => post.type === PostType.Changelog)
	}
	return filteredPosts.slice(0, postQuantity)
}
