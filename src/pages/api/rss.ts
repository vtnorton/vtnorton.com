import type { NextApiRequest, NextApiResponse } from 'next'
import { CACHE_KEYS, CACHE_TTL_SECONDS } from '../../database/cacheKeys'
import { handleCache } from '../../middleware/cache'
import type { Post } from '../../models/Post'
import { postServices } from '../../services/postsServices'
import { filterPublishedPosts } from '../../utils/postUtils'

const SITE_URL = 'https://vtnorton.com'
const FEED_TITLE = 'Blog do Vítor Norton'
const FEED_DESCRIPTION = 'Posts sobre cinema, política, dev — técnicos ou não. Um blog old-school.'
const MAX_ITEMS = 30

const escapeXml = (value: string): string =>
	value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;')

const buildItem = (post: Post): string => {
	const link = `${SITE_URL}${post.slug}`
	const pubDate = post.date ? new Date(post.date).toUTCString() : ''

	return `
		<item>
			<title>${escapeXml(post.title)}</title>
			<link>${escapeXml(link)}</link>
			<guid isPermaLink="true">${escapeXml(link)}</guid>
			${pubDate ? `<pubDate>${pubDate}</pubDate>` : ''}
			${post.abstract ? `<description>${escapeXml(post.abstract)}</description>` : ''}
			${post.categories.map((category) => `<category>${escapeXml(category)}</category>`).join('')}
		</item>`
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

	const cachedPosts = await handleCache<Post>(
		CACHE_KEYS.ALL_BLOG_POSTS,
		() => postServices.getPosts(),
		CACHE_TTL_SECONDS,
	)

	const posts = filterPublishedPosts(cachedPosts).slice(0, MAX_ITEMS)

	const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>${escapeXml(FEED_TITLE)}</title>
		<link>${SITE_URL}/blog</link>
		<description>${escapeXml(FEED_DESCRIPTION)}</description>
		<language>pt-BR</language>
		<atom:link href="${SITE_URL}/rss" rel="self" type="application/rss+xml" />
		${posts.map(buildItem).join('')}
	</channel>
</rss>`

	res.setHeader('Content-Type', 'application/xml; charset=utf-8')
	res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=59')
	return res.status(200).send(rss)
}
