import { faWindows } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'

import { FooterComponent, NextProjectComponent, PageHeroComponent, ProductShelfComponent, SliderComponent, SliderImage } from '../../components'
import { SeoProps } from '../../database/SEOProps'

export default function TochaOlimipica() {
	const router = useRouter()
	const itemsForSlider: SliderImage[] = [
		{
			imageUrl: '/img/projects/tochaolimpica/001.png',
			imageAlt: 'Tela do aplicativo mostrando a lista de cidades que a tocha olímpica passaria pelo Brasil.',
		},
	]

	const buttons = () => {
		return (
			<>
				<a href='https://www.microsoft.com/pt-br/p/tocha-olimpica/9nblggh4pmts?rtc=1' target='_blank' className='btn btn-primary'>
					<FontAwesomeIcon icon={faWindows} />
					download;
				</a>
				<img className='project-icon' src='/img/projects/tochaolimpica.webp' alt='logo do aplicativo tocha olimpica' />
			</>
		)
	}

	return (
		<>
			<SeoProps title='Tocha Olímpica' description='Agora você pode saber, mesmo no seu telefone, onde a tocha olímpica vai ser no Brasil. Confira a lista das cidades em que a tocha Olímpica irá passar e saiba a data exata!' featureImage='/img/projects/conjugar.webp' />
			<PageHeroComponent
				innerComponent={buttons()}
				backgroundColor='#b22222'
				title='Tocha Olímpica'
				description='Agora você pode saber, mesmo no seu telefone, onde a tocha olímpica vai ser no Brasil. Confira a lista das cidades em que a tocha Olímpica irá passar e saiba a data exata!'>
				<SliderComponent items={itemsForSlider} />
			</PageHeroComponent>

			<div className='container'>
				<section className='section'>
					<NextProjectComponent path={router.pathname} />
				</section>
			</div>

			<ProductShelfComponent />
			<FooterComponent />
		</>
	)
}
