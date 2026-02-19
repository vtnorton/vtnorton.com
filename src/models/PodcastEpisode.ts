import { NotionPage } from './Notion/NotionPage'

export class PodcastEpisode extends NotionPage {

	public feedName: string
	public link: string

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	constructor(result: any) {
		super(result, 'talk')

		this.link = result.properties.Slug.rich_text[0].href
		this.feedName = 'temp' //platform.find((platform: any) => platform.id === result.properties['Plataforma'].relation[0]?.id)?.name
	}
}