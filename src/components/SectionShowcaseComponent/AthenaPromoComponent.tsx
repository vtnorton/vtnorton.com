import { SectionBase } from '../SectionBaseComponent/SectionBase'

export const AthenaPromoComponent = ({ half }: { half?: boolean }) => {
	return (
		<SectionBase half={half} imageAlt='Imagem com diversas cores aleatoriamente' imageUrl='/img/showcases/heartthrob.jpg' blurImageUrl='/img/showcases/heartthrob-blur.jpg'>
			<>
				<h2>Athena</h2>
				<p>Projeto sob contrução: fique ligado, muito em breve!</p>
			</>
		</SectionBase>
	)
}
