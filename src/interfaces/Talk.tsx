export interface Talk {
	id: string
	title: string
	description: string
	featureImage: string
	presentations: number,
	lenght?: string,
	slides?: string,
	video?: string,
	status?: TalkStatus
}

export enum TalkStatus {
	Presented = 'Apresentada',
	SoonTM = 'Planos de fazer',
	Call4Pappers = 'Call 4 Pappers',
}