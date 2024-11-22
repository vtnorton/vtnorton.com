import { useRouter } from 'next/router'

import { FooterComponent, NextProjectComponent, PageHeroComponent, ProductShelfComponent } from '../../components'
import { SeoProps } from '../../database/SEOProps'
import { Button } from '@fluentui/react-components'
import { StoreMicrosoft24Regular } from '@fluentui/react-icons'
import { Section, SectionContentWithImage } from '../../components/SectionComponent'

export default function TrueDarkMode() {
	const router = useRouter()

	const buttons = () => {
		return (
			<>
				<Button as='a' href='https://github.com/vtnorton/TrueDarkMode' icon={<StoreMicrosoft24Regular />} size='large' appearance='primary' shape='square'>download();</Button>
				<img className='project-icon' src='/img/projects/truedarkmode.webp' alt='logo da extensão true dark mode' />
			</>
		)
	}

	return (
		<>
			<SeoProps title='True Dark Mode' description='Não importa se o seu Windows está no modo escuro ou no modo claro. Os sites que você visita não estão, esta extensão do Microsoft Edge irá mudar isso.' featureImage='/img/projects/truedarkmode.webp' />
			<PageHeroComponent innerComponent={buttons()} backgroundColor='#3b3b3b' title='True Dark Mode' description='Não importa se o seu Windows está no modo escuro ou no modo claro. Os sites que você visita não estão, esta extensão do Microsoft Edge irá mudar isso.'>
				<Section removePaddingButton>
					<h2>Sua extenção do Edge para colocar tudo no modo escuro</h2>
					<SectionContentWithImage
						image={'/img/projects/truedarkmode/capture.webp'}
						imageAlt={'tela do aplicativo mostrando a conjugação de verbos'}
						imageCaption
						gap={10} >
						<p>
							Não importa se o seu Windows está no modo escuro ou no modo de luz. Os websites que você visita não são, portanto, essa extensão do Microsoft Edge está prestes a ser alterada. Quando ativada, esta extensão colocará seu site favorito no modo escuro! Por isso, não
							se esqueça de colocar o Windows e o Edge no modo escuro.
						</p>
					</SectionContentWithImage>
					<div className='space-long' />
					<NextProjectComponent path={router.pathname} />
				</Section>
			</PageHeroComponent>

			<ProductShelfComponent />
			<FooterComponent />
		</>
	)
}
