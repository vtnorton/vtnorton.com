import { productsItems } from '../database/ProductShelfItems'
import { NotionPage } from './Notion/NotionPage'

// TODO: usar a mesma interface do productsItems from '../database/ProductShelfItems'
interface Project {
	id: string
	name: string
	slug: string
}

export class Changelog extends NotionPage {
	public version: string
	public isPreview: boolean
	public project: Project
	public fullSlug: string

	// TODO: se eu imprimo só um no navegaodr, ele constroi o array de todos os changelogs, verificar se isso é necessário
	constructor(result: any) {
		super(result, 'changelog')

		if (result.properties['Projeto'].relation.length === 0)
			throw new Error(`Changelog ${this.title}, with id ${this.id} without project`)

		const projectId = result.properties['Projeto'].relation[0].id
		const projectName = productsItems.find((item) => item.id === projectId)?.name

		if (projectName === undefined)
			throw new Error(`Project name with id ${projectId} not found on local database`)

		const projectSlug = productsItems.find((item) => item.id === projectId)?.slug
		if (projectSlug === undefined)
			throw new Error(`Project slug with id ${projectId} not found on local database`)

		this.project = {
			id: projectId,
			name: projectName,
			slug: projectSlug,
		}

		this.version = this.title
		this.fullSlug = `/${this.project}/${this.version}`
		this.title = `New update to ${this.project.name} - ${this.version}`
		this.isPreview = result.properties['Preview'].checkbox
	}
}