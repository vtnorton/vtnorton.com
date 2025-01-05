import { Client } from '@notionhq/client'
import { NotionAPI } from 'notion-client'

export class NotionDatabaseAdapter {
	private notion: Client
	private database: string

	constructor(database: string) {
		const NOTION_SECRET = process.env.NOTION_SECRET
		this.database = database

		this.notion = new Client({
			auth: NOTION_SECRET,
		})
	}

	async query(filter: any) {
		const response = await this.notion.databases.query({
			database_id: this.database,
			filter: {
				and: filter,
			},
		})

		return response.results
	}

	async getPageContent(pageId: string) {
		const NOTION_TOKEN = process.env.NOTION_TOKEN as string
		const notionApi = new NotionAPI({
			authToken: NOTION_TOKEN,
		})
		return await notionApi.getPage(pageId)
	}
}
