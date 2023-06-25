import { faWindows } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'

import { FooterComponent, NextProjectComponent, PageHeroComponent, ProductShelfComponent, SliderComponent, SliderImage } from '../../components'
import { SeoProps } from '../../database/SEOProps'

export default function Random42() {
	const router = useRouter()
	const itemsForSlider: SliderImage[] = [
		{
			imageUrl: '/img/projects/random42/001.webp',
			imageAlt: 'Captura de tela do aplicativo',
		},
		{
			imageUrl: '/img/projects/random42/002.webp',
			imageAlt: 'Captura de tela do aplicativo',
		},
		{
			imageUrl: '/img/projects/random42/003.webp',
			imageAlt: 'Captura de tela do aplicativo',
		},
	]

	const buttons = () => {
		return (
			<>
				<a href='https://www.microsoft.com/pt-br/p/random-42/9nblggh5x1t9' target='_blank' className='btn btn-primary'>
					<FontAwesomeIcon icon={faWindows} />
					download;
				</a>
				<img className='project-icon' src='/img/projects/random42.webp' alt='logo do aplicativo' />
			</>
		)
	}

	return (
		<>
			<SeoProps title='Random 42' description='Não é raro ocasiões onde precisamos sortear alguém, com esse aplicativo fica fácil. Basta adicionar a faixa de números a serem sorteados e ele fará o trabalho para você. Experimente.' featureImage='/img/projects/random42.webp' />
			<PageHeroComponent
				innerComponent={buttons()}
				backgroundColor='#5f37be'
				title='Random 42'
				description='Não é raro ocasiões onde precisamos sortear alguém, com esse aplicativo fica fácil. Basta adicionar a faixa de números a serem sorteados e ele fará o trabalho para você. Experimente.'>
				<SliderComponent items={itemsForSlider} />
			</PageHeroComponent>

			<div className='container'>
				<section>
					<NextProjectComponent path={router.pathname} />
				</section>
			</div>
			<ProductShelfComponent />
			<FooterComponent />
		</>
	)
}
