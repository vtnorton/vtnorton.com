import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { SectionShowcase } from './SectionShowcaseBaseComponent/SectionShowcaseBaseComponent'
import { SectionShowcaseComponentProps } from './SectionShowcaseComponentProps'

export const ProfileComponent = (props: SectionShowcaseComponentProps) => {
	return (
		<div className='container'>
			<SectionShowcase half={props.half} imageAlt='Foto do Vitor Norton, homem branco alto, cabelo comprido e azul' imageUrl='/img/showcases/profile.jpg' blurImageUrl='/img/showcases/profile-blur.jpg'>
				<>
					<h2>🎸 vítor norton;</h2>
					<p>
						
						Eu gosto de confeitaria, música e mitologia grega. Depois de +10 anos como dev e Microsoft MVP, tenho me aprofundado em 
						Developer Relations, hoje estou como Dev Advocate na <a href="https://superviz.com">SuperViz</a>.</p>
					<p>
						Já escrevi documentações, organizei eventos, apresentei palestras em grandes eventos como TDC, Microsoft Ignite, Campus Party,
						vários posts no blog, podcasts, criei apps pro Windows (e Windows Phone) e hoje sigo criando ferramentas para devs. 
						Tudo isso pensando em acessibilidade, democracia, diversidade e inclusão.
					</p>
					<a href='https://www.linkedin.com/in/vtnorton/' target='_blank' className='btn btn-link'>
						<FontAwesomeIcon icon={faChevronRight} />
						LinkedIn
					</a>
				</>
			</SectionShowcase>
		</div>
	)
}
