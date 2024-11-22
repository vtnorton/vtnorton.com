import { ChevronRight20Regular } from '@fluentui/react-icons'
import { Button } from '@fluentui/react-components'
import { ImageBlur, Section } from '../../components/SectionComponent'

export const ConsultingSection = ({ half }: { half?: boolean }) => {
	const image: ImageBlur = {
		imageURL: '/img/showcases/consulting.jpg',
		imageBlurURL: '/img/showcases/consulting-blur.jpg',
		imageAlt: 'Logo do app Formula, um </> dentro de um octogono.',
	}

	return (
		<Section half={half} image={image}>
			<>
				<h2>serviço de consultoria</h2>
				<p>
					Você tem um problema e eu tenho o conhecimento necessário para resolver esse problema. Além de vasta experiência, trabalho com as melhores ferramentas do mercado para te apresentar soluções digitais que funcionem para a sua realidade. A consultoria de produto, app ou
					sistema elimina o desperdício e aperfeiçoa os detalhes que te atrapalham a crescer.
				</p>
				<p>Venha conhecer as soluções rápidas e eficientes que oferecemos a você e à sua empresa.</p>
				<Button as='a' href='/para-empresas/consultoria' icon={<ChevronRight20Regular />} size='large' appearance='primary' shape='square'>conheça();</Button>
			</>
		</Section>
	)
}
