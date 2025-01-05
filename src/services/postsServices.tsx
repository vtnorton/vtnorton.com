import { Post } from '../models/Post'
import { NotionDatabaseAdapter } from './adapter/notionDatabaseAdapter'

const sharedFilter = (): any => {
	const CLIENT_ID = process.env.CLIENT_ID

	return [
		{
			property: 'Date',
			date: {
				on_or_before: new Date().toISOString(),
			},
		},
		{
			or: [
				{
					property: 'Status-post',
					status: {
						equals: 'Query',
					},
				},
				{
					property: 'Status-post',
					status: {
						equals: 'Follow-up',
					},
				},
				{
					property: 'Status-post',
					status: {
						equals: 'Published',
					},
				},
			],
		},
		{
			or: [
				{
					property: 'Cliente',
					relation: {
						is_empty: true,
					},
				},
				{
					property: 'Cliente',
					relation: {
						contains: CLIENT_ID,
					},
				},
			],
		},
	]
}

const itemTypeFilter = (type: string): any => {
	return {
		property: 'Type',
		multi_select: {
			contains: type,
		},
	}
}

export const getPosts = async (tag?: string): Promise<Post[]> => {
	const NOTION_DB_DEVREL = process.env.DEVREL_DB as string

	const notion = new NotionDatabaseAdapter(NOTION_DB_DEVREL)

	const filter = [
		...sharedFilter(),
		itemTypeFilter('Post'),
	]

	if (tag) {
		filter.push({
			property: 'Hashtags',
			multi_select: {
				contains: tag,
			},
		})
	}

	const results = await notion.query(filter)

	const posts = results.map((result: any) => new Post(result))
	return posts.filter((post): post is Post => typeof post !== 'undefined')
}