import { useRouter } from 'next/router'
import { FooterComponent, NextProjectComponent, PageHeroComponent, ProductShelfComponent } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindows } from '@fortawesome/free-brands-svg-icons'
import { SeoProps } from '../../database/SEOProps'
export default function OneNote() {
	const router = useRouter()

	const buttons = () => {
		return (
			<>
				<a href='https://www.microsoft.com/pt-br/p/conjugar/9nblggh63n89' target='_blank' className='btn btn-primary'>
					<FontAwesomeIcon icon={faWindows} />
					download;
				</a>
				<img className='project-icon' src='/img/projects/conjugar.webp' alt='logo do aplicativo conjugar' />
			</>
		)
	}

	return (
		<>
			<SeoProps title='Conjugar' description='Conjugue verbos regulares e irregulares da nossa língua portuguesa em todos os tempos verbais.' featureImage='/img/projects/conjugar.webp' />
			<PageHeroComponent innerComponent={buttons()} backgroundColor='#199900' title='Conjugar' description='Conjugue verbos regulares e irregulares da nossa língua portuguesa em todos os tempos verbais.'>
				<section>
					<div className='row showcase'>
						<div className='col-md-6'>
							<h2>Conjugações</h2>
							<p>Você pode usar isto: Presente, Imperfeito, Perfeito Presente, mais que perfeito passado, futuro, o presente condicional, imperfeito subjuntivo, futuro subjuntivo, imperativo, infinitivo e gerúndio</p>

							<div className='space-low'></div>
						</div>
						<div className='col-md-5 col-md-offset-1'>
							<img src='/img/projects/conjugar/captura.webp' alt='tela do aplicativo mostrando a conjugação de verbos' />
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
