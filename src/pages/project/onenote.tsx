import { useRouter } from 'next/router'

import { FooterComponent, NextProjectComponent, PageHeroComponent } from '../../components'
import { SeoProps } from '../../database/SEOProps'
import { Button } from '@fluentui/react-components'
import { ArrowDownload20Regular } from '@fluentui/react-icons'
import { Section } from '../../components/SectionComponent'
import { getNextProductBasedOnCurrentPath } from '../../database/ProductShelfItems'

export default function OneNote() {
	const router = useRouter()
	const nextProject = getNextProductBasedOnCurrentPath(router.pathname)

	return (
		<>
			<SeoProps title='guia definitivo para o onenote' description='Trabalhe em equipes, em todos os lugares com essa incrível ferramenta.' featureImage='/img/projects/onenote/hero.webp' />
			<PageHeroComponent title='guia definitivo para o onenote' description='Trabalhe em equipes, em todos os lugares com essa incrível ferramenta.' backgroundUrl='/img/projects/onenote/hero.webp' backgroundPosition='-250px'>
				<Section removePaddingButton>
					<div className='text-60-percent-wrap'>
						<h2>OneNote, o básico</h2>
						<p>OneNote é um caderno virtual de anotações que permite que os usuários criem anotações escritas ou desenhadas e compartilhar elas!</p>
						<Button as='a' href='/pdf/Guia-definitivo-para-o-OneNote-v1.0.pdf' icon={<ArrowDownload20Regular />} size='large' appearance='primary' shape='square'>baixar_ebook();</Button>
					</div>
					<div className='space-long'></div>
					<div className='flex'>
						<div>
							<h2>OneNote para equipes</h2>
							<p>O OneNote é fantástico para equipes, pois várias pessoas podem editar anotações ao mesmo tempo.</p>
						</div>
						<div>
							<h2>Dicas para o OneNote</h2>
							<p>Neste espaço eu reuni algumas dicas de ferramentas do OneNote que podem ser extremamente úteis para você.</p>
						</div>
					</div>
					<div className='space-long'></div>
					<div className='flex'>
						<div>
							<h2>Organize suas ideias</h2>
							<p>Quando estamos falando de estudos ou algum projeto grande, é preciso organizar bem as anotações e o OneNote irá facilitar e muito para você!</p>
						</div>
						<div>
							<h2>Desenho com o OneNote</h2>
							<p>Se é anotações, tem que ser possível desenhar né? E não é que dá para fazer muita coisa com os desenhos no OneNote?</p>
						</div>
					</div>
					<div className='space-long'></div>
					<NextProjectComponent name={nextProject.name} imageUrl={nextProject.imageUrl} link={nextProject.link} />
				</Section>
			</PageHeroComponent>

			<FooterComponent />
		</>
	)
}
