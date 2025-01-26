// TODO: tirar da pasta de models e colocar na pasta de models (ou alguma outra arquitetura)
export class NotionPage {
	public id: string
	public title: string
	public featureImage: string
	public date: string

	// TODO: renomear para pageContent
	public recordMap?: any
	public type: 'post' | 'changelog' | 'talk'

	constructor(result: any, type: 'post' | 'changelog' | 'talk') {
		this.id = result.id
		this.title = result.properties.Name.title[0].text.content
		this.date = this.getDate(result.properties['Date'])

		this.featureImage = this.getFeaturedImage(result.cover)
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