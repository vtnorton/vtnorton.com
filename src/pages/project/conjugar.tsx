import { useRouter } from 'next/router'

import { FooterComponent, NextProjectComponent, PageHeroComponent, ProductShelfComponent } from '../../components'
import { SeoProps } from '../../database/SEOProps'
import { Button } from '@fluentui/react-components'
import { StoreMicrosoft24Regular } from '@fluentui/react-icons'
import { Section, SectionContentWithImage } from '../../components/SectionComponent'
import { getNextProductBasedOnCurrentPath } from '../../database/ProductShelfItems'

export default function OneNote() {
	const router = useRouter()

	const buttons = () => {
		return (
			<>
				<Button as='a' href='https://www.microsoft.com/pt-br/p/conjugar/9nblggh63n89' icon={<StoreMicrosoft24Regular />} size='large' appearance='primary' shape='square'>download();</Button>
				<img className='project-icon' src='/img/projects/conjugar.webp' alt='logo do aplicativo conjugar' />
			</>
		)
	}

	const nextProject = getNextProductBasedOnCurrentPath(router.pathname)

	return (
		<>
			<SeoProps title='Conjugar' description='Conjugue verbos regulares e irregulares da nossa língua portuguesa em todos os tempos verbais.' featureImage='/img/projects/conjugar.webp' />
			<PageHeroComponent innerComponent={buttons()} backgroundColor='#199900' title='Conjugar' description='Conjugue verbos regulares e irregulares da nossa língua portuguesa em todos os tempos verbais.'>
				<Section removePaddingButton>
					<SectionContentWithImage
						image={'/img/projects/conjugar/captura.webp'}
						imageAlt={'tela do aplicativo mostrando a conjugação de verbos'}
						imageCaption
						gap={10} >
						<h2>Conjugações</h2>
						<p>Você pode usar isto: Presente, Imperfeito, Perfeito Presente, mais que perfeito passado, futuro, o presente condicional, imperfeito subjuntivo, futuro subjuntivo, imperativo, infinitivo e gerúndio</p>

					</SectionContentWithImage>
					<div className='space-long' />
					<NextProjectComponent name={nextProject.name} imageUrl={nextProject.imageUrl} link={nextProject.link} />
				</Section>
			</PageHeroComponent>

			<ProductShelfComponent />
			<FooterComponent />
		</>
	)
}
