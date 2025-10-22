export class NotionPage {
	public id: string
	public title: string
	public cover: string
	public date: string
	public content?: any
	public type: 'post'

	constructor(result: any, type: 'post') {
		this.id = result.id
		this.title = result.properties.Name.title[0].text.content
		this.date = this.getDate(result.properties['Date'])

		this.cover = this.getFeaturedImage(result.cover)
		this.type = type
	}

	getFeaturedImage = (notionResult: any) => {
		if (!notionResult)
			return ''

		return notionResult.external
			? notionResult.external.url
			: notionResult.file.url
	}

	getDate = (date: any) => {
		if (!date)
			return ''

		if (date.type === 'created_time')
			return date.created_time
		else
			return date.date.start
	}
}