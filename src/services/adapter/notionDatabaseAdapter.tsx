import { Client } from '@notionhq/client'

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


	/** @deprecated This method is deprecated, use the class NotionPage instead. */
	getFeaturedImage(notionResult: any) {
		if (!notionResult)
			return ''

		return notionResult.external
			? notionResult.external.url
			: notionResult.file.url
	}
}
