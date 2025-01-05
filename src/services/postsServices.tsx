import { Post } from '../models/Post'
import { queryNotion } from './adapter/notionDatabaseAdapter'

export const getPosts = async (tag?: string): Promise<Post[]> => {
	const idCliente = process.env.CLIENT_ID
	const NOTION_DB_DEVREL = process.env.DEVREL_DB as string

	const filter = [
		{
			property: 'Type',
			multi_select: {
				contains: 'Post',
			},
		},
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
			or: [ // TODO: passar para o queryNotion
				{
					property: 'Cliente',
					relation: {
						is_empty: true,
					},
				},
				{
					property: 'Cliente',
					relation: {
						contains: idCliente,
					},
				},
			],
		},
	]

	if (tag) {
		filter.push({
			property: 'Hashtags',
			multi_select: {
				contains: tag,
			},
		})
	}

	const results = await queryNotion(NOTION_DB_DEVREL, filter)

	const posts = results.map((result: any) => new Post(result))

	return posts.filter((post): post is Post => typeof post !== 'undefined')
}