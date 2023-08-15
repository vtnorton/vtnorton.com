import { kv } from '@vercel/kv'
import { NextApiRequest, NextApiResponse } from 'next'

import { BlogGridItemProps } from '../../components'
import { getBlogSectionItems } from '../../services/notionServices'
import { generateRssFeed } from '../../services/rssServices'

export default async (req: NextApiRequest, res: NextApiResponse<string>) => {
	let posts: BlogGridItemProps[]
	const cacheKey = `blogPosts`
	const cachedPosts = (await kv.get(cacheKey)) as BlogGridItemProps[]

	if (cachedPosts) posts = cachedPosts
	else posts = await getBlogSectionItems()

	const rss = await generateRssFeed(posts)
	res.setHeader('Content-Type', 'text/xml')
	res.write(rss)
	res.end()
}
