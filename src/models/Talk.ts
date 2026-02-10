import { NotionPage } from './Notion/NotionPage'

export enum TalkStatus {
	Presented = 'Apresentada',
	SoonTM = 'Planos de fazer',
	Call4Pappers = 'Call 4 Pappers',
}

export class Talk extends NotionPage {

	public description: string
	public lenght: string
	public presentations: number
	public slides: string

	public video: string
	public status: TalkStatus

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
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