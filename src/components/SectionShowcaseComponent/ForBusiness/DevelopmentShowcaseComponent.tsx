import { SectionBase } from '../../SectionBaseComponent/SectionBase'
import { ChevronRight20Regular } from '@fluentui/react-icons'
import { Button } from '@fluentui/react-components'

export const DevelopmentShowcaseComponent = ({ half }: { half?: boolean }) => {
	return (
		<SectionBase half={half} imageAlt='Logo do app Formula, um </> dentro de um octogono.' imageUrl='/img/showcases/development.jpg' blurImageUrl='/img/showcases/development-blur.jpg'>
			<>
				<h2>desenvolvimento</h2>
				<p>50% das empresas listadas na Fortune500 desapareceram. São gigantes como a Kodak e Blockbuster. 50% é muito! A boa notícia é que o fato de estar aqui significa que você quer evitar que isso aconteça na sua organização.</p>
				<p>
					Tecnologia é o que vai fazer sua organização permanecer viva, permanecer inovando. Todas empresas que substituíram as 50% da Fortune500 são empresas de tecnologia. E todas elas, como a Ford e a Walmart, estão se transformando e dizendo: “somos uma empresa de
					tecnologia”.
				</p>
				<Button as='a' href='/para-empresas/desenvolvimento' icon={<ChevronRight20Regular />} size='large' appearance='primary' shape='square'>conheça();</Button>
			</>
		</SectionBase>
	)
}
