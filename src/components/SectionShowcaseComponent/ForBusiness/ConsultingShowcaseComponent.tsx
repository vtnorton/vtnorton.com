import { SectionBase } from '../../SectionBaseComponent/SectionBase'
import { ChevronRight20Regular } from '@fluentui/react-icons'
import { Button } from '@fluentui/react-components'

export const ConsultingShowcaseComponent = ({ half }: { half?: boolean }) => {
	return (
		<SectionBase half={half} imageAlt='Logo do app Formula, um </> dentro de um octogono.' imageUrl='/img/showcases/consulting.jpg' blurImageUrl='/img/showcases/consulting-blur.jpg'>
			<>
				<h2>serviço de consultoria</h2>
				<p>
					Você tem um problema e eu tenho o conhecimento necessário para resolver esse problema. Além de vasta experiência, trabalho com as melhores ferramentas do mercado para te apresentar soluções digitais que funcionem para a sua realidade. A consultoria de produto, app ou
					sistema elimina o desperdício e aperfeiçoa os detalhes que te atrapalham a crescer.
				</p>
				<p>Venha conhecer as soluções rápidas e eficientes que oferecemos a você e à sua empresa.</p>
				<Button as='a' href='/para-empresas/consultoria' icon={<ChevronRight20Regular />} size='large' appearance='primary' shape='square'>conheça();</Button>
			</>
		</SectionBase>
	)
}
