import { useRouter } from 'next/router'

import { FooterComponent, NextProjectComponent, PageHeroComponent, ProductShelfComponent, SliderComponent, SliderImage } from '../../components'
import { SeoProps } from '../../database/SEOProps'
import { getNextProductBasedOnCurrentPath } from '../../database/ProductShelfItems'

export default function NeverEver() {
	const router = useRouter()
	const itemsForSlider: SliderImage[] = [
		{
			imageUrl: '/img/projects/neverever/001.webp',
			imageAlt: 'Captura de tela do aplicativo',
		},
		{
			imageUrl: '/img/projects/neverever/002.webp',
			imageAlt: 'Captura de tela do aplicativo',
		},
		{
			imageUrl: '/img/projects/neverever/003.webp',
			imageAlt: 'Captura de tela do aplicativo',
		},
	]

	const buttons = () => {
		return (
			<>
				<img className='project-icon' src='/img/projects/neverever.webp' alt='logo do aplicativo' />
			</>
		)
	}

	const nextProject = getNextProductBasedOnCurrentPath(router.pathname)

	return (
		<>
			<SeoProps title='#NeverEver' description='Pegue a bebida mais forte, ou a que esteja mais perto de você, e venha jogar o famoso ‘Eu Nunca’, onde toda vez que você já fez algo mostrado na tela você deve beber um gole.' featureImage='/img/projects/neverever.webp' />
			<PageHeroComponent
				innerComponent={buttons()}
				backgroundColor='#FE7C22'
				title='#NeverEver'
				description='Pegue a bebida mais forte, ou a que esteja mais perto de você, e venha jogar o famoso ‘Eu Nunca’, onde toda vez que você já fez algo mostrado na tela você deve beber um gole.'>
				<SliderComponent items={itemsForSlider} />
			</PageHeroComponent>

			<div className='container'>
				<section className='section'>
					<NextProjectComponent name={nextProject.name} imageUrl={nextProject.imageUrl} link={nextProject.link} />
				</section>
			</div>
			<ProductShelfComponent />
			<FooterComponent />
		</>
	)
}
