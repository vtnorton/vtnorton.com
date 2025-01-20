import { kv } from '@vercel/kv'
import { NextApiRequest, NextApiResponse } from 'next'

import { generateRssFeed } from '../../services/rssServices'
import { getPosts } from '../../services/postsServices'
import { Changelog } from '../../models/Changelog'
import { Post } from '../../models/Post'

const handler = async (req: NextApiRequest, res: NextApiResponse<string>) => {
	let posts: Array<Post | Changelog>
	const cacheKey = 'blogPosts'
	const cachedPosts = (await kv.get(cacheKey)) as Array<Post | Changelog>

	if (cachedPosts)
		posts = cachedPosts
	else
		posts = await getPosts()

	const rss = await generateRssFeed(posts)
	res.setHeader('Content-Type', 'text/xml')
	res.write(rss)
	res.end()
}

export default handler
