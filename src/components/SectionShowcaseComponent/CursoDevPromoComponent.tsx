import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { SectionShowcase } from './SectionShowcaseBaseComponent/SectionShowcaseBaseComponent'
import { SectionShowcaseComponentProps } from './SectionShowcaseComponentProps'

export const CursoDevPromoComponent = (props: SectionShowcaseComponentProps) => {
	return (
		<SectionShowcase half={props.half} imageAlt='Logo do app Formula, um </> dentro de um octogono.' imageUrl='/img/showcases/formula.jpg' blurImageUrl='/img/showcases/formula-blur.jpg'>
			<>
				<h2>🧑‍💻 cursão + mentoria = pessoa dev;</h2>
				<p>A ideia não é ensinar uma linguagem de programação ou como programar, e sim te dar ferramentas para conseguir avançar na sua carreira. Te ensinarei a forma prática e iremos desmistificar a ideia de ser uma pessoa desenvolvedora plena.</p>
				<a href='/curso/cursao ' className='btn btn-primary'>
					<FontAwesomeIcon icon={faChevronRight} />
					matricule_agora();
				</a>
			</>
		</SectionShowcase>
	)
}
