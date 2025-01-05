import { PostComponent } from '../../../components'
import { SeoProps } from '../../../database/SEOProps'
import { Changelog } from '../../../models/Changelog'
import { getChangelog, getPosts } from '../../../services/postsServices'

const mountPath = (changelog: Changelog) => {
	return {
		params: {
			project: changelog.project.slug,
			version: changelog.version,
		},
	}
}

export const getStaticPaths = async () => {
	const feed = await getPosts()
	const changelogs = feed.filter((changelog): changelog is Changelog => changelog instanceof Changelog)

	return {
		paths: changelogs.map((changelog: Changelog) => mountPath(changelog)),
		fallback: false,
	}
}

export const getStaticProps = async (context: any) => {
	const { project, version } = context.params
	const changelog = await getChangelog(project, version)

	if (!changelog)
		return { notFound: true }

	let props = {
		changelog: changelog,
	}

	props = JSON.parse(JSON.stringify(props))
	return {
		props,
		revalidate: 60 * 60 * 1,
	}
}

export default function ChangelogDetail({ changelog }: { changelog: Changelog }) {
	if (!changelog)
		return <div />

	return (
		<>
			<SeoProps title={changelog.title} description='' featureImage={changelog.featureImage} ogType='article' publishedTime={changelog.date} tags={[changelog.project.slug]} />
			<PostComponent post={changelog} />
		</>
	)
}
