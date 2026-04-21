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
		const allResults: Array<NotionResult> = []
		let startCursor: string | undefined = undefined

		do {
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
				...(startCursor ? { start_cursor: startCursor } : {}),
			})

			allResults.push(...response.results)
			startCursor = response.has_more && response.next_cursor ? response.next_cursor : undefined
		} while (startCursor !== undefined)

		return allResults
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
