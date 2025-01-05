import { NotionPage } from './Notion/NotionPage'

export class Post extends NotionPage {
	public url: string
	public fullSlug: string
	public slug: string
	public hashtags: string[]

	constructor(result: any) {
		super(result)

		// TODO: verificar a necessidade da url
		this.url = result.url

		// TODO: verificar a necessidade do slug e se pode substituir pelo full slug
		this.slug = result.properties['Slug'].rich_text[0].text.content

		this.fullSlug = this.mountPostSlug(result)
		this.hashtags = this.getHashtags(result.properties['Hashtags'])
	}

	mountPostSlug = (result: any): string => {
		const postDate = new Date(result.properties.Date.date.start)
		const year = postDate.getFullYear().toString()
		const monthNumber = postDate.getMonth() + 1
		const month = monthNumber.toString().padStart(2, '0')

		return `/${year}/${month}/${this.slug}`
	}

	getHashtags = (hashtags: any): string[] => {
		return hashtags.multi_select.map((item: any) => item.name)
	}
}