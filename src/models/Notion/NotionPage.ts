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
		this.date = result.properties['Date'].date.start

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
}