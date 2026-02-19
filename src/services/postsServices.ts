/* eslint-disable @typescript-eslint/no-explicit-any */
import { NotionAdapter } from '../adapters/notionAdapter'
import { CACHE_KEYS } from '../database/cacheKeys'
import { handleCache } from '../middleware/cache'
import { Post } from '../models/Post'
import { NotionFilter } from '../types/notionTypes'
import { completeWithRandomPosts, hasSameCategory, selectPostsByTagOrder } from '../utils/postUtils'
import { itemTypeFilter, postsSharedFilter } from '../utils/query/postsQuery'

const NOTION_DB_DEVREL = process.env.DEVREL_DATASOURE as string
const RELATED_POSTS_COUNT = 3



const getPosts = async (filter?: NotionFilter): Promise<Array<Post>> => {
	const notion = new NotionAdapter(NOTION_DB_DEVREL)
	const response: Array<Post> = []

	const fullFilter = [
		...postsSharedFilter(),
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

	const post = allPosts.find((p) => p.slug === slug)

	if (!post)
		return undefined

	const notion = new NotionAdapter(NOTION_DB_DEVREL)
	post.content = await notion.getPageContent(post.id)

	return post
}

const getRelatedPosts = async (referencePost: Post, count = RELATED_POSTS_COUNT): Promise<Post[]> => {
	const allPosts = await handleCache<Post>(
		CACHE_KEYS.ALL_BLOG_POSTS,
		() => getPosts(),
		60 * 60 * 8,
	)

	const candidatePosts = allPosts.filter((post) => post.id !== referencePost.id)
	const categoryPosts = candidatePosts.filter((post) => hasSameCategory(referencePost, post))
	const nonCategoryPosts = candidatePosts.filter((post) => !hasSameCategory(referencePost, post))

	let relatedPosts = selectPostsByTagOrder(referencePost, categoryPosts, [], count)
	relatedPosts = completeWithRandomPosts(categoryPosts, relatedPosts, count)
	relatedPosts = selectPostsByTagOrder(referencePost, nonCategoryPosts, relatedPosts, count)
	relatedPosts = completeWithRandomPosts(candidatePosts, relatedPosts, count)

	return relatedPosts.slice(0, count)
}

export const postServices = {
	getRelatedPosts,
	getPostBySlug,
	getPosts,
}