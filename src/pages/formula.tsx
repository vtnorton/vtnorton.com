import { useRouter } from 'next/router'
import { BlogGridItemProps, ChangelogComponent, FooterComponent, NextProjectComponent, PageHeroComponent, ProductShelfComponent, SliderComponent, SliderImage, VtnButtonComponent } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindows } from '@fortawesome/free-brands-svg-icons'
import { ThreeColumnItemsComponent } from '../components/others/ThreeColumnItemsComponent/ThreeColumnItemsComponent'
import { ThreeColumnItem } from '../components/others/ThreeColumnItemsComponent/ThreeColumnItemsComponentProps'
import { BlogGrid } from '../components/BlogComponent/BlogGrid/BlogGrid'
import { getBlogSectionItems, getChangelogSectionItems } from '../services/notionServices'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { SeoProps } from '../database/SEOProps'

const projectSlug = 'formula'

export const getStaticProps = async () => {
	try {
		const posts = await getBlogSectionItems(6, projectSlug, false)
		const changelogs = await getChangelogSectionItems(projectSlug)

		let props = { posts: posts, changelogs: changelogs }
		props = JSON.parse(JSON.stringify(props))
		return { props, revalidate: 60 * 60 * 1 }
	} catch (err) {
		throw err
	}
}

export default function Formula({ posts, changelogs }: { posts: BlogGridItemProps[]; changelogs: BlogGridItemProps[] }) {
	const router = useRouter()
	const benefits: ThreeColumnItem[] = [
		{
			title: '🌃 Fluent Design + Dark Mode',
			content: (
				<p>
					Desde a última atualização o Formula ganhou uma linda cara nova, com belíssimos elementos do Fluent Design e com o sensual modo escuro tanto requisitado pelos usuários! Aproveite! Personalize o seu aplicativo definindo o estilo e o tamanho da fonte assim como se deseja
					utilizar o aplicativo no modo claro ou escuro.
				</p>
			),
		},
		{
			title: '💫 Incríveis funções',
			content: (
				<p>
					Organize seus arquivos em abas e trabalhe com mais de um arquivo ao mesmo tempo, da mesma forma como você já está acostumado a fazer. E tem mais uma coisinha: você também pode usar os atalhos do teclado, da forma que você já conhece, para criar um novo arquivo, abrir um
					novo arquivo e salvar o arquivo.
				</p>
			),
		},
		{
			title: '📃 Um trabalho em progresso',
			content: (
				<>
					<p>O Formula é um trabalho em constante progresso, desde o seu lançamento ele vem evoluindo e ganhando mercado. Na última atualização, o design e o modo escuro são grandes diferenciais, mas não para por aí. Quer saber o que vem a seguir? Entre no grupo de betas!</p>
					<p>
						<strong>Atualmente o programa de beta está em reforma, novidades em breve.</strong>
					</p>
				</>
			),
		},
	]

	const itemsForSlider: SliderImage[] = [
		{
			imageUrl: '/img/projects/formula/001.webp',
			imageAlt: 'Captura de tela do aplicativo',
		},
		{
			imageUrl: '/img/projects/formula/002.webp',
			imageAlt: 'Captura de tela do aplicativo',
		},
		{
			imageUrl: '/img/projects/formula/003.webp',
			imageAlt: 'Captura de tela do aplicativo',
		},
		{
			imageUrl: '/img/projects/formula/004.webp',
			imageAlt: 'Captura de tela do aplicativo',
		},
		{
			imageUrl: '/img/projects/formula/005.webp',
			imageAlt: 'Captura de tela do aplicativo',
		},
	]

	const buttons = () => {
		return (
			<>
				<a href='https://www.microsoft.com/pt-br/p/conjugar/9nblggh63n89' target='_blank' className='btn btn-primary'>
					<FontAwesomeIcon icon={faWindows} />
					download;
				</a>
				<img className='project-icon' src='/img/projects/formula.webp' alt='logo do aplicativo conjugar' />
			</>
		)
	}

	return (
		<>
			<SeoProps
				title='Formula - Code Editor'
				description='Quantas vezes você não saiu do escritório e se lembrou daquela linha de código que pode consertar o maior bug que você tem? Adivinha! Você vai se esquecer daquela linha de codigo, você simplesmente tem que escrever ela agora. Não da para esperar você chegar no escritório. É por isso que o Formula está aqui! Você pode usar o Formula no seu celular, tablet e desktop.'
				featureImage='/img/projects/formula/surface.webp'
			/>
			<PageHeroComponent
				innerComponent={buttons()}
				backgroundColor='#16499a'
				title='Formula - Code Editor'
				description='Quantas vezes você não saiu do escritório e se lembrou daquela linha de código que pode consertar o maior bug que você tem? Adivinha! Você vai se esquecer daquela linha de codigo, você simplesmente tem que escrever ela agora. Não da para esperar você chegar no escritório. É por isso que o Formula está aqui! Você pode usar o Formula no seu celular, tablet e desktop.'>
				<section>
					<div className='showcase'>
						<ThreeColumnItemsComponent items={benefits} />
					</div>
				</section>
			</PageHeroComponent>

			<SliderComponent items={itemsForSlider} />

			<ChangelogComponent posts={changelogs} productSlug={projectSlug} />

			<div className='container'>
				<section>
					<div className='blog'>
						<div className='row'>
							<div className='col-md-10'>
								<h2>📰 Últimas notícias do Formula</h2>
							</div>
						</div>
						<div className='space-low'></div>
						<BlogGrid posts={posts} />
						<div className='right'>
							<div className='space-long'></div>
							<a href='/hashtag/formula' className='btn btn-primary'>
								<FontAwesomeIcon icon={faChevronRight} />
								get_posts('formula');
							</a>
						</div>
						<div className='clean'></div>
					</div>
					<div className='row showcase'>
						<div className='col-md-6'>
							<h2>suporte para muitas linguagens</h2>
							<p>
								O Formula suporta mais de 30 tipos de formato e linguagens de programação como: C#, C, C++, Crystal, CSS, Diff, HTML, Java, JavaScript, JSON, LUA, Pascal, PHP, Phyton, Ruby, SQL, Swift e Objective-C XML! Achou pouco? Tem até suporte para Fortran e Cobol! Você
								também pode criar novos arquivos com o simples editor de código, isso não é incrível?!
							</p>
							<div className='space-low'></div>
							<h2>links</h2>
							{/* <VtnButtonComponent isLink text='Formula para MVPs' url='/' /> */}
							{/* <VtnButtonComponent isLink text='Programa de beta tester' url='/' /> */}
							<VtnButtonComponent isLink text='Política de Privacidade' url='/termos/formula' />
							<br />
							<VtnButtonComponent isLink text='@Formula4Windows no Twitter' url='https://twitter.com/formula4windows' />
						</div>
						<div className='col-md-5 col-md-offset-1'>
							<img src='/img/projects/formula/surface.webp' alt='Aplicativo Formula rodando em um Surface Pro' />
						</div>
					</div>
					<NextProjectComponent path={router.pathname} />
				</section>
			</div>

			<ProductShelfComponent />
			<FooterComponent />
		</>
	)
}
