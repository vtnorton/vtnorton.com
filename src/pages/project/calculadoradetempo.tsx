import { useRouter } from 'next/router'

import { FooterComponent, NextProjectComponent, PageHeroComponent, ProductShelfComponent, SliderComponent, SliderImage } from '../../components'
import { SeoProps } from '../../database/SEOProps'
import { StoreMicrosoft24Regular } from '@fluentui/react-icons'
import { Button } from '@fluentui/react-components'
import { getNextProductBasedOnCurrentPath } from '../../database/ProductShelfItems'

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
				<Button as='a' href='https://www.microsoft.com/store/apps/9wzdncrdfvzn' icon={<StoreMicrosoft24Regular />} size='large' appearance='primary' shape='square'>download();</Button>
				<img className='project-icon' src='/img/projects/calculadoradetempo.webp' alt='logo do aplicativo' />
			</>
		)
	}

	const nextProject = getNextProductBasedOnCurrentPath(router.pathname)

	return (
		<>
			<SeoProps
				title='Calculadora de Tempo'
				description='Não é raro ocasiões onde precisamos sortear alguém, com esse aplicativo fica fácil. Basta adicionar a faixa de números a serem sorteados e ele fará o trabalho para você. Experimente.'
				featureImage='/img/projects/calculadoradetempo.webp' />
			<PageHeroComponent
				innerComponent={buttons()}
				backgroundColor='#5f37be'
				title='Calculadora de Tempo'
				description='Não é raro ocasiões onde precisamos sortear alguém, com esse aplicativo fica fácil. Basta adicionar a faixa de números a serem sorteados e ele fará o trabalho para você. Experimente.'>
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
