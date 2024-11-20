import { SectionBase } from '../SectionBaseComponent/SectionBase'
import { Button } from '@fluentui/react-components'
import { ChevronRight20Regular } from '@fluentui/react-icons'

export const CursoDevPromoComponent = ({ half }: { half?: boolean }) => {
	return (
		<SectionBase half={half} imageAlt='Logo do app Formula, um </> dentro de um octogono.' imageUrl='/img/showcases/formula.jpg' blurImageUrl='/img/showcases/formula-blur.jpg'>
			<>
				<h2>🧑‍💻 cursão + mentoria = pessoa dev;</h2>
				<p>A ideia não é ensinar uma linguagem de programação ou como programar, e sim te dar ferramentas para conseguir avançar na sua carreira. Te ensinarei a forma prática e iremos desmistificar a ideia de ser uma pessoa desenvolvedora plena.</p>
				<Button as='a' href='/curso/cursao' icon={<ChevronRight20Regular />} size='large' appearance='primary' shape='square'>matricule_agora();</Button>
			</>
		</SectionBase>
	)
}
