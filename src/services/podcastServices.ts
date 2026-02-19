import { NotionAdapter } from '../adapters/notionAdapter'
import { PodcastEpisode } from '../models/PodcastEpisode'
import { podcastsSharedFilter } from '../utils/query/podcastQuery'
import { itemTypeFilter } from '../utils/query/postsQuery'

const PODCASTS_DATASOURCE = process.env.DEVREL_DATASOURE as string

const getAllPodcasts = async (): Promise<Array<PodcastEpisode>> => {
	const notion = new NotionAdapter(PODCASTS_DATASOURCE)
	const response: Array<PodcastEpisode> = []

	const fullFilter = [
		...podcastsSharedFilter(),
		{
			or: [
				itemTypeFilter('Podcast'),
			],
		},
	]

	const results = await notion.query(fullFilter)
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	results.forEach((result: any) => {
		const item = new PodcastEpisode(result)
		response.push(item)
	})

	return response
}

export const podcastServices = {
	getAllPodcasts,
}