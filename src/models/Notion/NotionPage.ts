import { NotionDatabaseAdapter } from '../../services/adapter/notionDatabaseAdapter'

// TODO: tirar da pasta de models e colocar na pasta de models (ou alguma outra arquitetura)
export class NotionPage {
	public id: string
	public title: string
	public featureImage: string
	public date: string

	// TODO: renomear para pageContent
	public recordMap?: any

	constructor(result: any) {
		this.id = result.id
		this.title = result.properties.Name.title[0].text.content
		this.date = result.properties['Date'].date.start

		this.featureImage = this.getFeaturedImage(result.cover)
	}

	getFeaturedImage = (notionResult: any) => {
		if (!notionResult)
			return ''

		return notionResult.external
			? notionResult.external.url
			: notionResult.file.url
	}

	public loadPageContent = async () => {
		const notion = new NotionDatabaseAdapter(process.env.DEVREL_DB as string)
		const result = await notion.getPageContent(this.id)
		this.recordMap = result
	}
}