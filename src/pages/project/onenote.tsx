import { useRouter } from 'next/router'

import { FooterComponent, NextProjectComponent, PageHeroComponent } from '../../components'
import { SeoProps } from '../../database/SEOProps'

export default function OneNote() {
	const router = useRouter()

	return (
		<>
			<SeoProps title='guia definitivo para o onenote' description='Trabalhe em equipes, em todos os lugares com essa incrível ferramenta.' featureImage='/img/projects/onenote/hero.webp' />
			<PageHeroComponent title='guia definitivo para o onenote' description='Trabalhe em equipes, em todos os lugares com essa incrível ferramenta.' backgroundUrl='/img/projects/onenote/hero.webp' backgroundPosition='-250px'>
				<section className='section'>
					<div className='showcase'>
						<div className='row'>
							<div className='col-md-7'>
								<h2>OneNote, o básico</h2>
								<p>OneNote é um caderno virtual de anotações que permite que os usuários criem anotações escritas ou desenhadas e compartilhar elas!</p>
								<a href='/pdf/Guia-definitivo-para-o-OneNote-v1.0.pdf' target='_blank' className='btn btn-primary'>
									baixar_ebook();
								</a>
							</div>
						</div>
						<div className='space-long'></div>
						<div className='row'>
							<div className='col-md-6'>
								<h2>OneNote para equipes</h2>
								<p>O OneNote é fantástico para equipes, pois várias pessoas podem editar anotações ao mesmo tempo.</p>
							</div>
							<div className='col-md-6'>
								<h2>Dicas para o OneNote</h2>
								<p>Neste espaço eu reuni algumas dicas de ferramentas do OneNote que podem ser extremamente úteis para você.</p>
							</div>
						</div>
						<div className='space-long'></div>
						<div className='row'>
							<div className='col-md-6'>
								<h2>Organize suas ideias</h2>
								<p>Quando estamos falando de estudos ou algum projeto grande, é preciso organizar bem as anotações e o OneNote irá facilitar e muito para você!</p>
							</div>
							<div className='col-md-6'>
								<h2>Desenho com o OneNote</h2>
								<p>Se é anotações, tem que ser possível desenhar né? E não é que dá para fazer muita coisa com os desenhos no OneNote?</p>
							</div>
						</div>
					</div>
					<NextProjectComponent path={router.pathname} />
				</section>
			</PageHeroComponent>

			<FooterComponent />
		</>
	)
}
