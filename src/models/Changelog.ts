/* eslint-disable @typescript-eslint/no-explicit-any */
import { products, type Product } from '../database/products'
import { NotionPage } from './Notion/NotionPage'

const previewPattern = /preview|beta|alpha|canary|dev/i

export class Changelog extends NotionPage {
	public version: string
	public isPreview: boolean
	public project: Product
	public fullSlug: string
	public description: string

	constructor(result: any) {
		super(result, 'changelog')

		if (result.properties['Projeto'].relation.length === 0)
			throw new Error(`Changelog "${this.title}" (${this.id}) has no project`)

		const projectId = result.properties['Projeto'].relation[0].id
		const found = products.find((p) => p.id === projectId)

		if (!found)
			throw new Error(`Project with id ${projectId} not found in local products database`)

		this.project = { id: projectId, name: found.name, slug: found.slug }
		this.version = this.title
		this.fullSlug = `/changelogs/${this.project.slug}/${this.version}`
		this.title = `[${this.project.name}] ${this.version}`
		this.isPreview = previewPattern.test(this.version)
		this.description = this.concatenateDescription(result.properties['Abstract'])
	}

	concatenateDescription = (result: any): string => {
		if (!result?.rich_text) return ''
		return result.rich_text.map((item: any) => item?.text?.content || '').join('').trim()
	}
}
