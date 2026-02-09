/* eslint-disable @typescript-eslint/no-explicit-any */
import { NotionAdapter } from '../adapters/notionAdapter'
import { CACHE_KEYS } from '../database/cacheKeys'
import { handleCache } from '../middleware/cache'
import { Post } from '../models/Post'
import { NotionFilter } from '../types/notionTypes'
import { itemTypeFilter, sharedFilter } from '../utils/postsQuery'

const NOTION_DB_DEVREL = process.env.DEVREL_DATASOURE as string

const getPosts = async (filter?: NotionFilter): Promise<Array<Post>> => {
	const notion = new NotionAdapter(NOTION_DB_DEVREL)
	const response: Array<Post> = []

	const fullFilter = [
		...sharedFilter(),
		{
			or: [
				itemTypeFilter('Post'),
			],
		},
		...(filter ? filter : []),
	]

	const results = await notion.query(fullFilter)

	results.forEach(async (result: any) => {
		if (result.properties['Type'].multi_select[0].name === 'Post') {
			const post = new Post(result)
			response.push(post)
		}
	})

	return response
}

const getPostBySlug = async (slug: string): Promise<Post | undefined> => {
	const allPosts = await handleCache<Post>(
		CACHE_KEYS.ALL_BLOG_POSTS,
		() => getPosts(),
		60 * 60 * 8,
	)

	const posts = allPosts.filter((post): post is Post => post instanceof Post)
	const post: Post | null = posts.find((p: Post) => p.slug === slug) ?? null

	if (!post)
		return undefined

	const notion = new NotionAdapter(NOTION_DB_DEVREL)
	post.content = await notion.getPageContent(post.id)

	return post
}

export const postServices = {
	getPostBySlug,
	getPosts,
}