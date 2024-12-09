import { useRouter } from 'next/router'

import { FooterComponent, NextProjectComponent, PageHeroComponent, ProductShelfComponent, SliderComponent, SliderImage } from '../../components'
import { SeoProps } from '../../database/SEOProps'
import { Button } from '@fluentui/react-components'
import { StoreMicrosoft24Regular } from '@fluentui/react-icons'
import { getNextProductBasedOnCurrentPath } from '../../database/ProductShelfItems'

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
				<Button as='a' href='https://www.microsoft.com/pt-br/p/random-42/9nblggh5x1t9' icon={<StoreMicrosoft24Regular />} size='large' appearance='primary' shape='square'>download();</Button>
				<img className='project-icon' src='/img/projects/random42.webp' alt='logo do aplicativo' />
			</>
		)
	}

	const nextProject = getNextProductBasedOnCurrentPath(router.pathname)

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
				<section className='section'>
					<NextProjectComponent name={nextProject.name} imageUrl={nextProject.imageUrl} link={nextProject.link} />
				</section>
			</div>
			<ProductShelfComponent />
			<FooterComponent />
		</>
	)
}
