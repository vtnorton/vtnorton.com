import { NotionAdapter } from '../adapters/notionAdapter'
import { Post } from '../models/Post'
import { itemCategoryFilter, itemTypeFilter, sharedFilter } from '../utils/postsQuery'

const NOTION_DB_DEVREL = process.env.DEVREL_DATASOURE as string

const getPersonalBlogPosts = async (): Promise<Array<Post>> => {
	const notion = new NotionAdapter(NOTION_DB_DEVREL)
	const response: Array<Post> = []

	const filter = [
		...sharedFilter(),
		{
			or: [
				itemTypeFilter('Post'),
			],
			and: [
				itemCategoryFilter('Pessoal'),
			],
		},
	]

	const results = await notion.query(filter)

	results.forEach(async (result: any) => {
		if (result.properties['Type'].multi_select[0].name === 'Post') {
			const post = new Post(result)
			response.push(post)
		}
	})

	return response
}


export const postServices = {
	getPersonalBlogPosts,
}