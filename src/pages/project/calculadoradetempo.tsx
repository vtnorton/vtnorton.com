import { faWindows } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'

import { FooterComponent, NextProjectComponent, PageHeroComponent, ProductShelfComponent, SliderComponent, SliderImage } from '../../components'
import { SeoProps } from '../../database/SEOProps'

export default function CalculdadoraDeTempo() {
	const router = useRouter()
	const itemsForSlider: SliderImage[] = [
		{
			imageUrl: '/img/projects/calculadoradetempo/001.webp',
			imageAlt: 'Captura de tela do aplicativo',
		},
		{
			imageUrl: '/img/projects/calculadoradetempo/002.webp',
			imageAlt: 'Captura de tela do aplicativo',
		},
		{
			imageUrl: '/img/projects/calculadoradetempo/003.webp',
			imageAlt: 'Captura de tela do aplicativo',
		},
	]

	const buttons = () => {
		return (
			<>
				<a href='https://www.microsoft.com/store/apps/9wzdncrdfvzn' target='_blank' className='btn btn-primary'>
					<FontAwesomeIcon icon={faWindows} />
					download;
				</a>
				<img className='project-icon' src='/img/projects/calculadoradetempo.webp' alt='logo do aplicativo' />
			</>
		)
	}

	return (
		<>
			<SeoProps
				title='Calculadora de Tempo'
				description='Não é raro ocasiões onde precisamos sortear alguém, com esse aplicativo fica fácil. Basta adicionar a faixa de números a serem sorteados e ele fará o trabalho para você. Experimente.'
				featureImage='/img/projects/calculadoradetempo.webp'
			/>
			<PageHeroComponent
				innerComponent={buttons()}
				backgroundColor='#5f37be'
				title='Calculadora de Tempo'
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
