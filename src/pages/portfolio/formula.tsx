import type { GetStaticProps } from 'next'

import { Button } from '../../components/Button'
import { ChangelogList } from '../../components/ChangelogList'
import { NextProject } from '../../components/NextProject/NextProject'
import { PageHero } from '../../components/PageHero'
import { Section, SectionContentWithImage } from '../../components/Section'
import { Slider } from '../../components/Slider/Slider'
import { Step, VerticalSteper } from '../../components/VerticalStepper'
import { ContentSEO } from '../../database/seo'
import type { Changelog } from '../../models/Changelog'
import type { Post } from '../../models/Post'
import { BlogGrid } from '../../modules/Blog/Grid/BlogGrid'
import { Footer } from '../../sections/Footer/Footer'
import { changelogServices } from '../../services/changelogServices'
import { postServices } from '../../services/postsServices'
import type { Image } from '../../types/Image'

type FormulaMilestone = {
	title: string
	description: string
}

type FormulaHighlight = {
	label: string
	value: string
	description: string
}

type FormulaFeature = {
	title: string
	description: string
}

const pageTitle = 'Formula - Universal Code Editor'
const pageDescription =
	'O Formula foi um editor de código para Windows 10 e Windows Phone. Foi um dos apps mais baixados da Microsoft Store na categoria Dev Tools, com mais de 100 mil downloads, e um case importante para minha trajetória como designer de produto.'

const formulaGallery: Image[] = [
	{
		imageUrl: '/img/portfolio/formula/001.webp',
		imageAlt: 'Tela do Formula com o painel de arquivos aberto.',
	},
	{
		imageUrl: '/img/portfolio/formula/002.webp',
		imageAlt: 'Tela do Formula com um arquivo de código aberto em destaque.',
	},
	{
		imageUrl: '/img/portfolio/formula/003.webp',
		imageAlt: 'Interface escura do Formula com destaque para o editor.',
	},
	{
		imageUrl: '/img/portfolio/formula/004.webp',
		imageAlt: 'Visão do Formula com foco em leitura e edição de código.',
	},
	{
		imageUrl: '/img/portfolio/formula/005.webp',
		imageAlt: 'Composição visual do Formula mostrando a evolução do produto.',
	},
]

const formulaHighlights: FormulaHighlight[] = [
	{
		label: 'distribuição',
		value: '+100k',
		description: 'Downloads acumulados na Microsoft Store, com um ciclo longo de uso real e feedback constante.',
	},
	{
		label: 'satisfação',
		value: '4.5★',
		description:
			'Avaliação média usuários que validou todo o processo, a importância do projeto e a qualidade do produto final.',
	},
	{
		label: 'escopo',
		value: '30+',
		description: 'Linguagens e formatos suportados para transformar o app em ferramenta útil.',
	},
]

const formulaMilestones: FormulaMilestone[] = [
	{
		title: 'Capturar código antes que a ideia sumisse',
		description:
			'O Formula nasceu da fricção mais simples possível: lembrar daquela linha que resolveria um bug e não ter onde registrar com contexto. O app foi pensado para funcionar no celular, no tablet e no desktop, reduzindo a distância entre insight e execução.',
	},
	{
		title: 'Redesign com Fluent Design e dark mode',
		description:
			'Com o tempo, o produto ganhou uma camada visual muito mais madura. Fluent Design, modo escuro, personalização de tema e tipografia ajudaram a transformar o editor em algo que parecia realmente cuidado — não apenas funcional.',
	},
	{
		title: 'Revisão do core, abas mais estáveis e Monaco',
		description:
			'Na fase mais técnica, o projeto passou por uma revisão importante de arquitetura. O núcleo foi refeito para acomodar melhor múltiplas abas, evoluir o editor e abrir espaço para tecnologias mais robustas como o Monaco, aproximando a experiência do padrão que as pessoas já esperavam.',
	},
]

const formulaFeatures: FormulaFeature[] = [
	{
		title: 'Fluent Design + dark mode',
		description:
			'Uma interface bem polidda, com elementos nativos do Windows que sempre eram bem recebidos pela comunidade.',
	},
	{
		title: 'Abas, atalhos e fluxo familiar',
		description: 'O editor respeitava hábitos de quem já vive no teclado e não queria reaprender o básico.',
	},
	{
		title: 'Beta testers',
		description:
			'O projeto teve uma comunidade de testers que testou o aplicativo antes do lançamento e tinha acesso direto para feedback. Muitas features e bug fixes vieram desta interação.',
	},
]

export const getStaticProps: GetStaticProps<{ posts: Post[]; changelogs: Changelog[] }> = async () => {
	const allPosts = await postServices.getPosts()
	const formulaPosts = allPosts
		.filter((post) => post.hashtags.some((tag) => tag.toLowerCase() === 'formula'))
		.map(({ id, title, cover, date, type, slug, categories, hashtags, abstract }) => ({
			id,
			title,
			cover,
			date,
			type,
			slug,
			categories,
			hashtags,
			abstract,
		}))
		.slice(0, 6) as Post[]

	const rawChangelogs = await changelogServices.getChangelogsByProjectSlug('formula')
	const changelogs = rawChangelogs.map(
		({ id, title, cover, date, type, version, isPreview, project, fullSlug, description }) => ({
			id,
			title,
			cover,
			date,
			type,
			version,
			isPreview,
			project,
			fullSlug,
			description,
		}),
	) as Changelog[]

	return {
		props: {
			posts: formulaPosts,
			changelogs,
		},
		revalidate: 60 * 60 * 24,
	}
}

export default function Formula({ posts, changelogs }: { posts: Post[]; changelogs: Changelog[] }) {
	return (
		<article className='formula-portfolio'>
			<ContentSEO
				featureImage={'/img/other/og/formula.webp'}
				title={pageTitle}
				description={pageDescription}
				ogType='portfolio'
			/>

			<PageHero title={pageTitle} description={pageDescription} backgroundUrl='/img/portfolio/formula.jpg'>
				<div className='section-row section-row--highlights'>
					{formulaHighlights.map((highlight) => (
						<Section key={highlight.label} className='mini-section--metric'>
							<div className='headline'>
								<span className='eyebrow'>{highlight.label}</span>
								<strong className='value'>{highlight.value}</strong>
							</div>
							<p className='body'>{highlight.description}</p>
						</Section>
					))}
				</div>
			</PageHero>

			<div className='container'>
				<Slider items={formulaGallery} ariaLabel='Galeria visual do Formula' fancyboxGroupName='formula-gallery' />
			</div>

			{/* <div className='container' id='formula-evolution'>
				<Section>
					<h2>Uma linha do tempo curta, no lugar do histórico complexo antigo.</h2>
					<p>
						O changelog detalhado da versão legada era rico, mas custoso demais para manter na nova estrutura. Em vez de
						reencenar tudo, deixei aqui os três movimentos que melhor contam a evolução do produto.
					</p>
					<VerticalSteper showNumber>
						{formulaMilestones.map((milestone) => (
							<Step key={milestone.title} title={milestone.title}>
								<p>{milestone.description}</p>
							</Step>
						))}
					</VerticalSteper>
				</Section>
			</div> */}

			{posts.length > 0 && (
				<div className='container'>
					<Section>
						<h2>O Formula também virou escrita, release note e memória de produto.</h2>
						<p>
							Como simplificação do changelog, esta seleção puxa textos do blog que ajudam a contar a trajetória do
							projeto com mais contexto do que uma lista de versões conseguiria.
						</p>

						<BlogGrid posts={posts} />
					</Section>
				</div>
			)}

			{changelogs.length > 0 && (
				<div className='container'>
					<Section>
						<h2>Histórico de releases do Formula.</h2>
						<ChangelogList changelogs={changelogs} />
					</Section>
				</div>
			)}

			<div className='container'>
				{/* <Section className='value'>
					<SectionContentWithImage
						image={{
							imageUrl: '/img/portfolio/formula/003.webp',
							imageAlt: 'Tela do Formula em modo escuro',
							imageCaption: 'Tela do Formula em modo escuro',
						}}
					>
						<h2>O que fazia o produto valer a pena</h2>
						<p>
							No fim, o Formula funcionava porque equilibrava três coisas difíceis ao mesmo tempo: aparência boa o
							suficiente para criar confiança, recursos práticos o suficiente para uso diário e escopo controlado o
							bastante para eu conseguir evoluir o produto sem transformá-lo num monstro.
						</p>
						<p>
							Esse balanço entre ambição e manutenção é parte importante do valor do projeto hoje. Mais do que um app
							antigo, ele mostra uma forma de pensar produto, release e acabamento.
						</p>
						<Button as='a' href='/termos/formula' size='medium' appearance='transparent' shape='square'>
							Política de privacidade
						</Button>
					</SectionContentWithImage>
				</Section> */}

				{/* <Section className='story'>
					<SectionContentWithImage
						side='right'
						sticky
						image={{
							imageUrl: '/img/portfolio/formula/surface.webp',
							imageAlt: 'Formula rodando em um Surface Pro',
							imageCaption: 'Formula rodando em um Surface Pro',
						}}
					>
						<h2>De app promovido a case de portfólio</h2>
						<p>
							Durante anos, o Formula foi um produto que eu defendia publicamente: um editor de código pago para Windows
							8/10, pensado para registrar ideias rápido e seguir trabalhando em qualquer tela.
						</p>
						<p>
							Agora ele entra aqui com outro papel. Menos vitrine de loja, mais bastidor de produto. O que vale destacar
							não é só o download, mas a combinação de posicionamento, interface, manutenção e refinamento constante a
							partir do que as pessoas de fato usavam.
						</p>
						<p>
							Esse é o tipo de projeto que mostra como eu pensava software antes mesmo de chamar isso de case: craft
							visual, feedback de usuário, senso de continuidade e um cuidado grande com a sensação de usar o produto.
						</p>
					</SectionContentWithImage>
				</Section> */}

				<div className='section-row section-row--features'>
					{formulaFeatures.map((feature) => (
						<Section key={feature.title} className='mini-section--feature'>
							<h3>{feature.title}</h3>
							<p className='body'>{feature.description}</p>
						</Section>
					))}
				</div>

				<Section removePaddingButton removePaddingTop>
					<NextProject name='Olá Wolff' imageUrl='/img/portfolio/ola-wolff.jpg' link='/portfolio/ola-wolff' />
				</Section>
			</div>

			<Footer />
		</article>
	)
}
