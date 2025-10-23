import { NotionPage } from './Notion/NotionPage'

export class Post extends NotionPage {
	public slug: string
	public hashtags: string[]
	public abstract?: string

	constructor(result: any) {
		super(result, 'post')

		this.slug = this.mountPostSlug(result)
		this.hashtags = this.getHashtags(result.properties['Hashtags'])
		this.abstract = this.concatenateAbsctract(result.properties['Abstract'])
	}

	concatenateAbsctract = (result: any): string => {
		let abstract = ''
		result.rich_text.forEach((item: any) => {
			abstract += item.text.content
		})
		return abstract
	}

	mountPostSlug = (result: any): string => {
		const slug = result.properties['Slug'].rich_text[0].text.content
		const postDate = new Date(result.properties.Date.date.start)
		const year = postDate.getFullYear().toString()
		const monthNumber = postDate.getMonth() + 1
		const month = monthNumber.toString().padStart(2, '0')

		return `/${year}/${month}/${slug}`
	}

	getHashtags = (hashtags: any): string[] => {
		return hashtags.multi_select.map((item: any) => item.name)
	}
}