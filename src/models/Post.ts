import { NotionDatabaseAdapter } from '../services/adapter/notionDatabaseAdapter'
import { NotionPage } from './Notion/NotionPage'

// TODO: tirar da pasta de models e colocar na pasta de models (ou alguma outra arquitetura)
export class Post extends NotionPage {
	public url: string
	public fullSlug: string
	public slug: string
	public date: string
	public hashtags: string[]

	// TODO: renomear para postContent
	public recordMap?: any

	constructor(result: any) {
		super(result)

		// TODO: verificar a necessidade da url
		this.url = result.url

		// TODO: verificar a necessidade do slug e se pode substituir pelo full slug
		this.slug = result.properties['Slug'].rich_text[0].text.content
		this.fullSlug = this.mountPostSlug(result)
		this.date = result.properties['Date'].date.start
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

	public loadPostConent = async () => {
		const notion = new NotionDatabaseAdapter(process.env.DEVREL_DB as string)
		this.recordMap = await notion.getPageContent(this.id)
	}
}