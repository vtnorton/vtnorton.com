import { ImageBlur, Section } from '../../components/SectionComponent'

export const AthenaPromoSection = ({ half }: { half?: boolean }) => {
	const image: ImageBlur = {
		imageURL: '/img/showcases/heartthrob.jpg',
		imageBlurURL: '/img/showcases/heartthrob-blur.jpg',
		imageAlt: 'Imagem com diversas cores aleatoriamente',
	}
	return (
		<Section half={half} image={image}>
			<>
				<h2>Athena</h2>
				<p>Projeto sob contrução: fique ligado, muito em breve!</p>
			</>
		</Section>
	)
}
