import { BlogGridItemProps, PostComponent } from '../../../components'
import { Changelog } from '../../../interfaces/Changelog'
import { getBlogSectionItems, getChangelogByVersion, getChangelogs } from '../../../services/notionServices'

const mountPath = (log: Changelog) => {
	return {
		params: {
			project: log.projectSlug,
			version: log.title,
		},
	}
}

export const getStaticPaths = async () => {
	// TODO: Pegar changelogs
	const changelogs: Changelog[] = await getChangelogs()
	return {
		paths: changelogs.map((log: Changelog) => mountPath(log)),
		fallback: true,
	}
}

export const getStaticProps = async (context: any) => {
	const { project, version } = context.params

	const posts: BlogGridItemProps[] = await getBlogSectionItems(42, project)
	const changelog: any = await getChangelogByVersion(project, version)

	let props = {
		changelog: changelog,
		posts: posts,
	}

	props = JSON.parse(JSON.stringify(props))
	return {
		props,
		revalidate: 60 * 60 * 1,
	}
}
export default function PostDetail({ changelog, posts }: { changelog: Changelog; posts: BlogGridItemProps[] }) {
	if (!changelog) {
		// TODO: adicionar página 404 aqui
		return <div />
	}
	return <PostComponent post={changelog} posts={posts} />
}
