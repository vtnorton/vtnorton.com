import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { SectionShowcaseComponentProps } from '../SectionShowcaseComponentProps'
import { SectionShowcase } from '../SectionShowcaseBaseComponent/SectionShowcaseBaseComponent'

export const DevelopmentShowcaseComponent = (props: SectionShowcaseComponentProps) => {
	return (
		<SectionShowcase half={props.half} imageAlt='Logo do app Formula, um </> dentro de um octogono.' imageUrl='/img/showcases/development.jpg' blurImageUrl='/img/showcases/development-blur.jpg'>
			<>
				<h2>desenvolvimento</h2>
				<p>50% das empresas listadas na Fortune500 desapareceram. São gigantes como a Kodak e Blockbuster. 50% é muito! A boa notícia é que o fato de estar aqui significa que você quer evitar que isso aconteça na sua organização.</p>
				<p>
					Tecnologia é o que vai fazer sua organização permanecer viva, permanecer inovando. Todas empresas que substituíram as 50% da Fortune500 são empresas de tecnologia. E todas elas, como a Ford e a Walmart, estão se transformando e dizendo: “somos uma empresa de
					tecnologia”.
				</p>
				<a href='/para-empresas/desenvolvimento' className='btn btn-primary'>
					<FontAwesomeIcon icon={faChevronRight} />
					conheça();
				</a>
			</>
		</SectionShowcase>
	)
}
