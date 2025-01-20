import { TalkStatus } from '../interfaces/Talk'
import { NotionPage } from './Notion/NotionPage'

// TODO: tirar da pasta de models e colocar na pasta de models (ou alguma outra arquitetura)
export class Talk extends NotionPage {

	public description: string
	public lenght: string
	public presentations: number
	public slides: string

	public video: string
	public status: TalkStatus

	constructor(result: any) {
		super(result, 'talk')

		this.description = result.properties['Descrição'].rich_text[0]?.text.content
		this.lenght = result.properties['Duração'].select?.name
		this.presentations = result.properties['Apresentações'].formula.number
		this.slides = result.properties['Slides']?.url
		this.video = result.properties['Video']?.url
		this.status = result.properties['Status'].status?.name as TalkStatus
	}
}