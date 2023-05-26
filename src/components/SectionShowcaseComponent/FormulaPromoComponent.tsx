import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { SectionShowcase } from './SectionShowcaseBaseComponent/SectionShowcaseBaseComponent'
import { SectionShowcaseComponentProps } from './SectionShowcaseComponentProps'

export const FormulaPromoComponent = (props: SectionShowcaseComponentProps) => {
	return (
		<SectionShowcase half={props.half} imageAlt='Logo do app Formula, um </> dentro de um octogono.' imageUrl='/img/showcases/formula.jpg' blurImageUrl='/img/showcases/formula-blur.jpg'>
			<>
				<h2>Formula Editor</h2>
				<p>
					Quantas vezes você não saiu do escritório e se lembrou daquela linha de código que pode consertar o maior bug que você tem? Adivinha! Você vai se esquecer daquela linha de codigo, você simplesmente tem que escrever ela agora. Não da para esperar você chegar no
					escritório. É por isso que o Formula está aqui! Você pode usar o Formula no seu celular, tablet e desktop.
				</p>
				<a href='/formula ' className='btn btn-primary'>
					<FontAwesomeIcon icon={faChevronRight} />
					conheça;
				</a>
			</>
		</SectionShowcase>
	)
}
