import { TalkStatus } from '../interfaces/Talk'
import { Talk } from '../models/Talk'
import { NotionDatabaseAdapter } from './adapter/notionDatabaseAdapter'

export const getTalks = async (): Promise<Talk[]> => {
	const NOTION_DB_TALKS = process.env.talksDb as string
	const notion = new NotionDatabaseAdapter(NOTION_DB_TALKS)

	const filter = [
		{
			or: [
				{
					property: 'Status',
					status: {
						equals: 'Apresentada',
					},
				},
				{
					property: 'Status',
					status: {
						equals: 'Call 4 Pappers',
					},
				},
				{
					property: 'Status',
					status: {
						equals: 'Planos de fazer',
					},
				},
			],
		},
	]

	const results = await notion.query(filter)
	const talks = results.map((result: any) => new Talk(result))

	return talks
		.filter((item): item is Talk => typeof item !== 'undefined')
		.sort((a, b) => b.presentations - a.presentations)
		.sort((a, b) => {
			if (a.status === TalkStatus.Call4Pappers)
				return -1
			if (b.status === TalkStatus.Call4Pappers)
				return 1
			return 0
		})

}