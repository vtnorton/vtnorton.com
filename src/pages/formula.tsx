import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { BlogGridItemProps, ChangelogComponent, FooterComponent, NextProjectComponent, PageHeroComponent, ProductShelfComponent, SliderComponent, SliderImage } from '../components'
import { BlogGrid } from '../components/BlogComponent/BlogGrid/BlogGrid'
import { SeoProps } from '../database/SEOProps'
import { Button } from '@fluentui/react-components'
import { ChevronRight20Filled, ChevronRight20Regular, StoreMicrosoft24Regular } from '@fluentui/react-icons'
import { Section, SectionContentWithImage } from '../components/SectionComponent'
import { getNextProductBasedOnCurrentPath } from '../database/ProductShelfItems'

export default function Formula() {
	const router = useRouter()
	const nextProject = getNextProductBasedOnCurrentPath(router.pathname)
	const projectSlug = 'formula'
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

	const [posts, setPosts] = useState<BlogGridItemProps[]>([])

	useEffect(() => {
		if (posts.length === 0) {
			axios
				.get('/api/post', {
					params: {
						quantity: 6,
						tag: projectSlug,
						hideChangelogs: true,
					},
				})
				.then((response) => {
					setPosts(response.data)
				})
				.catch((error) => {
					console.error('Erro ao obter os dados da API:', error)
				})
		}
	}, [])

	const buttons = () => {
		return (
			<>
				<Button as='a' href='https://www.microsoft.com/pt-br/p/conjugar/9nblggh63n89' icon={<StoreMicrosoft24Regular />} size='large' appearance='primary' shape='square'>download();</Button>
				<img className='project-icon' src='/img/projects/formula.webp' alt='logo do aplicativo conjugar' />
			</>
		)
	}
	return (
		<>
			<SeoProps
				title='Formula - Code Editor'
				description='Quantas vezes você não saiu do escritório e se lembrou daquela linha de código que pode consertar o maior bug que você tem? Adivinha! Você vai se esquecer daquela linha de codigo, você simplesmente tem que escrever ela agora. Não da para esperar você chegar no escritório. É por isso que o Formula está aqui! Você pode usar o Formula no seu celular, tablet e desktop.'
				featureImage='/img/projects/formula/surface.webp' />
			<PageHeroComponent
				innerComponent={buttons()}
				backgroundColor='#16499a'
				title='Formula - Code Editor'
				description='Quantas vezes você não saiu do escritório e se lembrou daquela linha de código que pode consertar o maior bug que você tem? Adivinha! Você vai se esquecer daquela linha de codigo, você simplesmente tem que escrever ela agora. Não da para esperar você chegar no escritório. É por isso que o Formula está aqui! Você pode usar o Formula no seu celular, tablet e desktop.'>
				<Section>
					<div className='flex'>
						<div>
							<h3>🌃 Fluent Design + Dark Mode</h3>
							<p>
								Desde a última atualização o Formula ganhou uma linda cara nova, com belíssimos elementos do Fluent Design e com o sensual modo escuro tanto requisitado pelos usuários! Aproveite! Personalize o seu aplicativo definindo o estilo e o tamanho da fonte assim como se deseja
								utilizar o aplicativo no modo claro ou escuro.
							</p>
						</div>
						<div>
							<h3>💫 Incríveis funções</h3>
							<p>
								Organize seus arquivos em abas e trabalhe com mais de um arquivo ao mesmo tempo, da mesma forma como você já está acostumado a fazer. E tem mais uma coisinha: você também pode usar os atalhos do teclado, da forma que você já conhece, para criar um novo arquivo, abrir um
								novo arquivo e salvar o arquivo.
							</p>
						</div>
						<div>
							<h3>📃 Um trabalho em progresso</h3>
							<p>O Formula é um trabalho em constante progresso, desde o seu lançamento ele vem evoluindo e ganhando mercado. Na última atualização, o design e o modo escuro são grandes diferenciais, mas não para por aí. Quer saber o que vem a seguir? Entre no grupo de betas!</p>
							<p>
								<strong>Atualmente o programa de beta está em reforma, novidades em breve.</strong>
							</p>
						</div>
					</div>
				</Section>
			</PageHeroComponent>

			<SliderComponent items={itemsForSlider} />

			<ChangelogComponent productSlug={projectSlug} />

			<div className='container'>
				<Section removePaddingButton>

					<h2>📰 Últimas notícias do Formula</h2>

					<div className='space-low'></div>
					<BlogGrid posts={posts} />

					<div className='right'>
						<div className='space-long'></div>
						<Button as='a' href='/hashtag/formula' icon={<ChevronRight20Regular />} size='large' appearance='primary' shape='square'>get_posts('formula');</Button>
					</div>

					<div className='clean'></div>

					<div className='space-long'></div>

					<h2>suporte para muitas linguagens</h2>
					<SectionContentWithImage image={'/img/projects/formula/surface.webp'} imageAlt={'Aplicativo Formula rodando em um Surface Pro'} gap={10} imageCaption>
						<p>
							O Formula suporta mais de 30 tipos de formato e linguagens de programação como: C#, C, C++, Crystal, CSS, Diff, HTML, Java, JavaScript, JSON, LUA, Pascal, PHP, Phyton, Ruby, SQL, Swift e Objective-C XML! Achou pouco? Tem até suporte para Fortran e Cobol! Você
							também pode criar novos arquivos com o simples editor de código, isso não é incrível?!
						</p>
						<div className='space-low'></div>
						<h2>links</h2>
						<Button as='a'
							href='/termos/formula'
							icon={<ChevronRight20Filled />}
							size='large'
							appearance='transparent'
							shape='square'
							style={{
								marginLeft: '-23px',
							}}>
							Política de Privacidade
						</Button>
					</SectionContentWithImage>

					<div className='space-long'></div>
					<NextProjectComponent name={nextProject.name} imageUrl={nextProject.imageUrl} link={nextProject.link} />
				</Section>
			</div>

			<ProductShelfComponent />
			<FooterComponent />
		</>
	)
}
