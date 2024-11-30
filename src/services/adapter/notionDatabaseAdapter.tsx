import { Client } from '@notionhq/client'

const NOTION_SECRET = process.env.notionSecret as string

const notion = new Client({
	auth: NOTION_SECRET,
})

export const queryNotion = async (database: string, filter: any) => {
	const response = await notion.databases.query({
		database_id: database,
		filter: {
			and: filter,
		},
	})

	return response.results
}

export const getFeaturedImage = (notionResult: any) => {
	if (!notionResult)
		return ''

	return notionResult.external
		? notionResult.external.url
		: notionResult.file.url
}
