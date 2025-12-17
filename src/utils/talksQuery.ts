import { TalkStatus } from '../models/Talk'
import { NotionFilter } from '../types/notionTypes'

export const sharedFilter = (): NotionFilter => {
	return [
		{
			or: [
				{
					property: 'Status',
					status: {
						equals: TalkStatus.Presented,
					},
				},
				{
					property: 'Status',
					status: {
						equals: TalkStatus.Call4Pappers,
					},
				},
				{
					property: 'Status',
					status: {
						equals: TalkStatus.SoonTM,
					},
				},
			],
		},
	]
}