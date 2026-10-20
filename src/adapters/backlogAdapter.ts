import { Client, isFullPage, type PageObjectResponse } from '@notionhq/client'
import { readRequiredEnv } from '../utils/envUtils'

const TASKS_DATASOURCE_ID = '96da5214-3e9e-442c-912c-65478f8c8449'
const PROJECTS_DATASOURCE_ID = '850b63ec-ac94-4558-9509-9dfb41adfe4a'

const queryAllPages = async (dataSourceId: string, properties: string[]): Promise<PageObjectResponse[]> => {
	const notion = new Client({ auth: readRequiredEnv('NOTION_SECRET') })
	const pages: PageObjectResponse[] = []
	let startCursor: string | undefined

	do {
		const response = await notion.dataSources.query({
			data_source_id: dataSourceId,
			filter_properties: properties,
			page_size: 100,
			...(startCursor ? { start_cursor: startCursor } : {}),
		})

		pages.push(...response.results.filter(isFullPage))
		startCursor = response.has_more && response.next_cursor ? response.next_cursor : undefined
	} while (startCursor !== undefined)

	return pages
}

const queryTaskPages = (properties: string[]) => queryAllPages(TASKS_DATASOURCE_ID, properties)

const queryProjectPages = (properties: string[]) => queryAllPages(PROJECTS_DATASOURCE_ID, properties)

export const backlogAdapter = {
	queryTaskPages,
	queryProjectPages,
}
