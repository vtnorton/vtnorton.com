
import { Button } from '@fluentui/react-components'
import { ChevronRight20Regular } from '@fluentui/react-icons'
import { ImageBlur, Section } from '../../components/SectionComponent'

export const CursoDevPromoSection = ({ half }: { half?: boolean }) => {
	const image: ImageBlur = {
		imageURL: '/img/showcases/formula.jpg',
		imageBlurURL: '/img/showcases/formula-blur.jpg',
		imageAlt: 'Logo do app Formula, um </> dentro de um octogono.',
	}
	return (
		<Section half={half} image={image}>
			<>
				<h2>🧑‍💻 cursão + mentoria = pessoa dev;</h2>
				<p>A ideia não é ensinar uma linguagem de programação ou como programar, e sim te dar ferramentas para conseguir avançar na sua carreira. Te ensinarei a forma prática e iremos desmistificar a ideia de ser uma pessoa desenvolvedora plena.</p>
				<Button as='a' href='/curso/cursao' icon={<ChevronRight20Regular />} size='large' appearance='primary' shape='square'>matricule_agora();</Button>
			</>
		</Section>
	)
}
