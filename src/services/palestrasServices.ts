import { NotionAdapter } from '../adapters/notionAdapter'
import { Talk, TalkStatus } from '../models/Talk'
import { NotionResult } from '../types/notionTypes'
import { talksSharedFilter } from '../utils/query/talksQuery'

const TALKS_DATASOURCE = process.env.TALKS_DATASOURCE as string

const getAllTalks = async (): Promise<Array<Talk>> => {
	const notion = new NotionAdapter(TALKS_DATASOURCE)
	const response: Array<Talk> = []

	const results = await notion.query(talksSharedFilter())
	results.forEach(async (result: NotionResult) => {
		const post = new Talk(result)
		response.push(post)
	})

	return response.sort((a, b) => b.presentations - a.presentations)
		.sort((a, b) => {
			if (a.status === TalkStatus.Call4Pappers)
				return -1
			if (b.status === TalkStatus.Call4Pappers)
				return 1
			return 0
		})
}

const getTalk = async (id: string): Promise<{
	talk: Talk
	nextTalk: Talk
}> => {
	const allTalks = await getAllTalks()
	const presentedTalks = allTalks.filter((talk: Talk) => talk.status === TalkStatus.Presented)
	const talk = presentedTalks.find((talk: Talk) => talk.id === id)

	if (!talk) {
		throw new Error('Talk not found')
	}

	const talkIndex = presentedTalks.findIndex((talk: Talk) => talk.id === id)
	const nextTalk = presentedTalks[talkIndex + 1] || presentedTalks[0]

	return {
		talk: talk,
		nextTalk: nextTalk,
	}
}

export const palestrasServices = {
	getAllTalks,
	getTalk,
}