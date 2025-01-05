
// TODO: tirar da pasta de models e colocar na pasta de models (ou alguma outra arquitetura)
export class NotionPage {
	public id: string
	public title: string
	public featureImage: string

	constructor(result: any) {
		this.id = result.id
		this.title = result.properties.Name.title[0].text.content
		this.featureImage = this.getFeaturedImage(result.cover)
	}

	getFeaturedImage = (notionResult: any) => {
		if (!notionResult)
			return ''

		return notionResult.external
			? notionResult.external.url
			: notionResult.file.url
	}
}