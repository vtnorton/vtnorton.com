import { Changelog } from '../models/Changelog'
import { Post } from '../models/Post'
import { NotionDatabaseAdapter } from './adapter/notionDatabaseAdapter'

const NOTION_DB_DEVREL = process.env.DEVREL_DB as string

const sharedFilter = (): any => {
	const CLIENT_ID = process.env.CLIENT_ID

	return [
		{
			property: 'Date',
			date: {
				on_or_before: new Date().toISOString(),
			},
		},
		{
			or: [
				{
					property: 'Status-post',
					status: {
						equals: 'Query',
					},
				},
				{
					property: 'Status-post',
					status: {
						equals: 'Follow-up',
					},
				},
				{
					property: 'Status-post',
					status: {
						equals: 'Published',
					},
				},
			],
		},
		{
			or: [
				{
					property: 'Cliente',
					relation: {
						is_empty: true,
					},
				},
				{
					property: 'Cliente',
					relation: {
						contains: CLIENT_ID,
					},
				},
			],
		},
	]
}

const itemTypeFilter = (type: string): any => {
	return {
		property: 'Type',
		multi_select: {
			contains: type,
		},
	}
}

export const getPosts = async (tag?: string): Promise<Array<Post | Changelog>> => {
	const notion = new NotionDatabaseAdapter(NOTION_DB_DEVREL)
	const feedResult: Array<Post | Changelog> = []

	const filter = [
		...sharedFilter(),
		{
			or: [
				itemTypeFilter('Post'),
				itemTypeFilter('Changelog'),
			],
		},
	]

	if (tag) {
		filter.push({
			property: 'Hashtags',
			multi_select: {
				contains: tag,
			},
		})
	}

	const results = await notion.query(filter)

	results.forEach((result: any) => {
		if (result.properties['Type'].multi_select[0].name === 'Post')
			feedResult.push(new Post(result))
		else if (result.properties['Type'].multi_select[0].name === 'Changelog')
			feedResult.push(new Changelog(result))
	})

	return feedResult
}

export const getChangelogs = async (projectId: string): Promise<Changelog[]> => {
	const NOTION_DB_DEVREL = process.env.DEVREL_DB as string
	const notion = new NotionDatabaseAdapter(NOTION_DB_DEVREL)
	const feedResult: Array<Changelog> = []

	// TODO: ao colocar um console aqui, e acessar a página do formula, o changelog tá sendo chamado mesmo ao listar postagens 
	// console.log('projectId', projectId)
	// projectId 222c6f36-0d85-4f2b-9061-1f01dd4bcf02
	// GET / api / changelog ? quantity = 3 & projectslug=formula 200 
	// projectId
	// GET / api / post ? quantity = 6 & tag=formula & hideChangelogs=true 200
	console.log('projectId', projectId)

	const filter = [
		...sharedFilter(),
		itemTypeFilter('Changelog'),
		{
			property: 'Projeto',
			relation: {
				contains: projectId,
			},
		},
	]

	const results = await notion.query(filter)
	results.forEach((result: any) => {
		feedResult.push(new Changelog(result))
	})

	return feedResult
}

// TODO: pegar direto pelo ID
// TODO: simplificar esse metodo com o getChangelog
export const getPostBySlug = async (slug: string) => {
	const result = await getPosts()
	const posts = result.filter((post): post is Post => post instanceof Post)
	const post: Post | null = posts.find((p: Post) => p.slug === slug) ?? null

	if (!post)
		return null

	const notion = new NotionDatabaseAdapter(NOTION_DB_DEVREL)
	post.recordMap = await notion.getPageContent(post.id)

	return post
}

// TODO: pegar direto pelo ID
// TODO: Transformar para pegar o ID do projeto ao invez do slug
export const getChangelog = async (projectSlug: string, version: string) => {
	const result = await getPosts()
	const changelogs = result.filter((post): post is Changelog => post instanceof Changelog)
	const changelog = changelogs.find((c: Changelog) => c.project.slug === projectSlug && c.version === version) ?? null

	if (!changelog)
		return null

	const notion = new NotionDatabaseAdapter(NOTION_DB_DEVREL)
	changelog.recordMap = await notion.getPageContent(changelog.id)

	return changelog
}