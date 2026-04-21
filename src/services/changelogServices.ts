/* eslint-disable @typescript-eslint/no-explicit-any */
import { NotionAdapter } from '../adapters/notionAdapter'
import { getProjectChangelogsCacheKey } from '../database/cacheKeys'
import { products } from '../database/products'
import { handleCache } from '../middleware/cache'
import { Changelog } from '../models/Changelog'
import { itemTypeFilter, postsSharedFilter } from '../utils/query/postsQuery'

const NOTION_DB_DEVREL = process.env.DEVREL_DATASOURE as string

const getChangelogsByProject = async (projectId: string): Promise<Changelog[]> => {
	const notion = new NotionAdapter(NOTION_DB_DEVREL)

	const filter = [
		...postsSharedFilter(),
		itemTypeFilter('Changelog'),
		{
			property: 'Projeto',
			relation: {
				contains: projectId,
			},
		},
	]

	const results = await notion.query(filter)
	const changelogs: Changelog[] = []

	results.forEach((result: any) => {
		try {
			changelogs.push(new Changelog(result as any))
		} catch {
			// skip entries with missing or unrecognised project data
		}
	})

	return changelogs
}

const getChangelogsByProjectSlug = async (projectSlug: string): Promise<Changelog[]> => {
	const project = products.find((p) => p.slug === projectSlug)
	if (!project?.id) return []

	return getChangelogsByProject(project.id)
}

const getChangelog = async (
	project: string,
	version: string,
): Promise<Changelog | undefined> => {
	const allPosts = await handleCache<Changelog>(
		getProjectChangelogsCacheKey(project),
		() => getChangelogsByProjectSlug(project),
		60 * 60 * 8,
	)

	const post = allPosts.find((p) => p.version === version)

	if (!post)
		return undefined

	const notion = new NotionAdapter(NOTION_DB_DEVREL)
	post.content = await notion.getPageContent(post.id)

	return post
}

const getAllStaticPaths = async (): Promise<{ project: string; version: string }[]> => {
	const paths: { project: string; version: string }[] = []

	for (const product of products) {
		const changelogs = await getChangelogsByProjectSlug(product.slug)
		for (const changelog of changelogs) {
			paths.push({ project: product.slug, version: changelog.version })
		}
	}

	return paths
}

export const changelogServices = {
	getChangelogsByProjectSlug,
	getChangelog,
	getAllStaticPaths,
}
