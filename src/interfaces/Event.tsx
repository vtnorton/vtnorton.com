export interface Event {
	id: string
	title: string
	date: string
	type: EventType
	place?: string
	link?: string
	talk?: string
}

export enum EventType {
	PARTICIPANT,
	SPEAKER,
	SPONSOR
}