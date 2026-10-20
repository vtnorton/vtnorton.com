import type { PageObjectResponse } from '@notionhq/client'

export type BacklogProject = {
	id: string
	clientIds: string[]
}

export const BACKLOG_PROJECT_PROPERTIES = ['Cliente']

const readClientIds = (page: PageObjectResponse): string[] => {
	const client = page.properties.Cliente
	if (client?.type !== 'relation') throw new Error(`Backlog project ${page.id}: property "Cliente" is not a relation`)
	return client.relation.map((relation) => relation.id)
}

export const toBacklogProject = (page: PageObjectResponse): BacklogProject => {
	return { id: page.id, clientIds: readClientIds(page) }
}
