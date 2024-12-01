import { Talk, TalkStatus } from '../interfaces/Talk'
import { getFeaturedImage, queryNotion } from './adapter/notionDatabaseAdapter'

export const getTalks = async (): Promise<Talk[]> => {
	const NOTION_DB_TALKS = process.env.talksDb as string
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

	const results = await queryNotion(NOTION_DB_TALKS, filter)

	const talks = results.map((result: any) => {

		const item: Talk = {
			id: result.id,
			title: result.properties.Name.title[0].text.content,
			description: result.properties['Descrição'].rich_text[0]?.text.content,
			featureImage: getFeaturedImage(result.cover),
			lenght: result.properties['Duração'].select?.name,
			presentations: result.properties['Apresentações'].formula.number,
			slides: result.properties['Slides']?.url,
			video: result.properties['Video']?.url,
			status: result.properties['Status'].status?.name as TalkStatus,
		}

		return item
	})

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