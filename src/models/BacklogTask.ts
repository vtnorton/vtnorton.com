import type { PageObjectResponse } from '@notionhq/client'

export type BacklogTask = {
	tagOptionId: string | null
	status: string | null
	projectIds: string[]
}

export const BACKLOG_TASK_PROPERTIES = ['Tags', 'Status', 'Project']

const readTagOptionId = (page: PageObjectResponse): string | null => {
	const tags = page.properties.Tags
	if (tags?.type !== 'select') throw new Error(`Backlog task ${page.id}: property "Tags" is not a select`)
	return tags.select?.id ?? null
}

const readStatus = (page: PageObjectResponse): string | null => {
	const status = page.properties.Status
	if (status?.type !== 'status') throw new Error(`Backlog task ${page.id}: property "Status" is not a status`)
	return status.status?.name ?? null
}

const readProjectIds = (page: PageObjectResponse): string[] => {
	const project = page.properties.Project
	if (project?.type !== 'relation') throw new Error(`Backlog task ${page.id}: property "Project" is not a relation`)
	return project.relation.map((relation) => relation.id)
}

export const toBacklogTask = (page: PageObjectResponse): BacklogTask => {
	return { tagOptionId: readTagOptionId(page), status: readStatus(page), projectIds: readProjectIds(page) }
}
