import { Client } from '@notionhq/client'
import { NotionAPI } from 'notion-client'
import { NotionFilter, NotionResult } from '../types/notionTypes'

export class NotionAdapter {
	private notion: Client
	private datasourceId: string

	constructor(datasource: string) {
		const NOTION_SECRET = process.env.NOTION_SECRET
		this.datasourceId = datasource

		this.notion = new Client({
			auth: NOTION_SECRET,
		})
	}

	async query(filter: NotionFilter): Promise<Array<NotionResult>> {
		// TODO: if reponse contains start_cursor, implement pagination to fetch all results from all pages
		const response = await this.notion.dataSources.query({
			data_source_id: this.datasourceId,
			filter: {
				and: filter,
			},
			sorts: [
				{
					property: 'Date',
					direction: 'descending',
				},
			],
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

	async updatePageCover(pageId: string, coverUrl: string): Promise<void> {
		await this.notion.pages.update({
			page_id: pageId,
			cover: {
				type: 'external',
				external: {
					url: coverUrl,
				},
			},
		})
	}
}
