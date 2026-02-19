import { NotionFilter } from '../../types/notionTypes'

export const podcastsSharedFilter = (): NotionFilter => {
	return [
		{
			property: 'Date',
			date: {
				on_or_before: new Date().toISOString(),
			},
		},
		{
			property: 'Status-podcast',
			status: {
				equals: 'Publicado',
			},
		},
	]
}