import type { GetStaticPaths, GetStaticProps } from 'next'
import { ContentSEO } from '../../../database/seo'
import type { Changelog } from '../../../models/Changelog'
import { changelogServices } from '../../../services/changelogServices'
import { IndividualChangelog } from '../../../modules/Blog/IndividualPost/IndividualChangelog'

type ChangelogPageProps = {
	changelog: Changelog
}

type ChangelogPageParams = {
	project: string
	version: string
}

export const getStaticPaths: GetStaticPaths = async () => {
	const slugs = await changelogServices.getAllStaticPaths()
	const paths = slugs.map((s) => ({ params: s }))

	return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<ChangelogPageProps, ChangelogPageParams> = async ({ params }) => {
	if (!params?.project || !params.version) {
		return { notFound: true }
	}

	const changelog = await changelogServices.getChangelog(
		params.project,
		decodeURIComponent(params.version),
	)

	if (!changelog) {
		return { notFound: true }
	}

	let props = {
		changelog: changelog,
	}

	props = JSON.parse(JSON.stringify(props))

	return {
		props,
		revalidate: 60 * 60 * 24,
	}
}

export default function ChangelogDetailPage({ changelog }: ChangelogPageProps) {
	return (
		<>
			<ContentSEO
				featureImage={changelog.cover}
				title={changelog.title}
				description={changelog.description}
				date={changelog.date}
				ogType='article' />
			<IndividualChangelog changelog={changelog} />
			{/* <Section>
				<p>
					Esta release faz parte do histórico do {changelog.project.name}. A listagem completa de versões está disponível na página
					do projeto.
				</p>
				<Button as='a' href={`/portfolio/${changelog.project.slug}`} appearance='primary' shape='square'>
					Voltar para o projeto
				</Button>
			</Section> */}
		</>
	)
}
