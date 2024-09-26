import { useRouter } from 'next/router'

import { FooterComponent, NextProjectComponent, PageHeroComponent, ProductShelfComponent } from '../../components'
import { SeoProps } from '../../database/SEOProps'
import { Button } from '@fluentui/react-components'
import { StoreMicrosoft24Regular } from '@fluentui/react-icons'

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
				<section className='section'>
					<div className='row showcase'>
						<div className='col-md-6'>
							<h2>Sua extenção do Edge para colocar tudo no modo escuro</h2>
							<p>
								Não importa se o seu Windows está no modo escuro ou no modo de luz. Os websites que você visita não são, portanto, essa extensão do Microsoft Edge está prestes a ser alterada. Quando ativada, esta extensão colocará seu site favorito no modo escuro! Por isso, não
								se esqueça de colocar o Windows e o Edge no modo escuro.
							</p>
						</div>
						<div className='col-md-5 col-md-offset-1'>
							<img src='/img/projects/truedarkmode/capture.webp' alt='tela do aplicativo mostrando a conjugação de verbos' />
						</div>
					</div>
					<NextProjectComponent path={router.pathname} />
				</section>
			</PageHeroComponent>

			<ProductShelfComponent />
			<FooterComponent />
		</>
	)
}
