import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { SectionShowcase } from './SectionShowcaseBaseComponent/SectionShowcaseBaseComponent'
import { SectionShowcaseComponentProps } from './SectionShowcaseComponentProps'

export const HeartthrobPromoComponent = (props: SectionShowcaseComponentProps) => {
	return (
		<SectionShowcase half={props.half} imageAlt='Imagem com diversas cores aleatoriamente' imageUrl='/img/showcases/heartthrob.jpg' blurImageUrl='/img/showcases/heartthrob-blur.jpg'>
			<>
				<h2>heartthrob</h2>
				<p>O heartthrob é um design system baseado no Fluent UI da Microsoft focado em acessibilidade, produtividade para o negócio e para os profissionais que desenvolvem o sistema e que garante uma entrega ágil de valor e qualidade necessários para um negócio escalonável.</p>
				<p>Confira esta lista de projetos que vão facilitar o desenvolvimento do seu negócio na direção certa!</p>

				<a href='/heartthrob ' className='btn btn-primary'>
					<FontAwesomeIcon icon={faChevronRight} />
					conheça;
				</a>
			</>
		</SectionShowcase>
	)
}
