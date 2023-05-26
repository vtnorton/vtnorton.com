import { SectionShowcase } from './SectionShowcaseBaseComponent/SectionShowcaseBaseComponent'
import { SectionShowcaseComponentProps } from './SectionShowcaseComponentProps'

export const AthenaPromoComponent = (props: SectionShowcaseComponentProps) => {
	return (
		<SectionShowcase half={props.half} imageAlt='Imagem com diversas cores aleatoriamente' imageUrl='/img/showcases/heartthrob.jpg' blurImageUrl='/img/showcases/heartthrob-blur.jpg'>
			<>
				<h2>Athena</h2>
				<p>Projeto sob contrução: fique ligado, muito em breve!</p>
			</>
		</SectionShowcase>
	)
}
