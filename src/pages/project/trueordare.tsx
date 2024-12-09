import { useRouter } from 'next/router'

import { FooterComponent, NextProjectComponent, PageHeroComponent, ProductShelfComponent, SliderComponent, SliderImage } from '../../components'
import { SeoProps } from '../../database/SEOProps'
import { Button } from '@fluentui/react-components'
import { StoreMicrosoft24Regular } from '@fluentui/react-icons'
import { getNextProductBasedOnCurrentPath } from '../../database/ProductShelfItems'

export default function TrueOrDare() {
	const router = useRouter()
	const itemsForSlider: SliderImage[] = [
		{
			imageUrl: '/img/projects/trueordare/001.webp',
			imageAlt: 'Captura de tela do aplicativo',
		},
		{
			imageUrl: '/img/projects/trueordare/002.webp',
			imageAlt: 'Captura de tela do aplicativo',
		},
		{
			imageUrl: '/img/projects/trueordare/003.webp',
			imageAlt: 'Captura de tela do aplicativo',
		},
	]

	const buttons = () => {
		return (
			<>
				<Button as='a' href='https://www.microsoft.com/store/apps/9nblggh5xcm8' icon={<StoreMicrosoft24Regular />} size='large' appearance='primary' shape='square'>download();</Button>
				<img className='project-icon' src='/img/projects/trueordare.webp' alt='logo do aplicativo' />
			</>
		)
	}

	const nextProject = getNextProductBasedOnCurrentPath(router.pathname)

	return (
		<>
			<SeoProps title='#TrueOrDare' description='O melhor jogo de verdade e consequência que a Windows Store já viu, possui diversas garrafas de acordo com a ocasião.' featureImage='/img/projects/trueordare.webp' />
			<PageHeroComponent innerComponent={buttons()} backgroundColor='#FF2E12' title='#TrueOrDare' description='O melhor jogo de verdade e consequência que a Windows Store já viu, possui diversas garrafas de acordo com a ocasião.'>
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
