import { PostComponent } from '../../../components'
import { SeoProps } from '../../../database/SEOProps'
import { Changelog } from '../../../interfaces/Changelog'
import { getChangelogByVersion, getChangelogs } from '../../../services/notionServices'

const mountPath = (log: Changelog) => {
	return {
		params: {
			project: log.projectSlug,
			version: log.title,
		},
	}
}

export const getStaticPaths = async () => {
	const changelogs: Changelog[] = await getChangelogs()
	return {
		paths: changelogs.map((log: Changelog) => mountPath(log)),
		fallback: false,
	}
}

export const getStaticProps = async (context: any) => {
	const { project, version } = context.params
	const changelog: any = await getChangelogByVersion(project, version)

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
	if (!changelog) return <div />

	return (
		<>
			<SeoProps title={changelog.title} description='' featureImage={changelog.featureImage} ogType='article' publishedTime={changelog.date} tags={[changelog.projectSlug]} />
			<PostComponent post={changelog} />
		</>
	)
}
