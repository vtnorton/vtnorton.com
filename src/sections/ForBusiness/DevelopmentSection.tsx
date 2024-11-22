import { ChevronRight20Regular } from '@fluentui/react-icons'
import { Button } from '@fluentui/react-components'
import { ImageBlur, Section } from '../../components/SectionComponent'

export const DevelopmentSection = ({ half }: { half?: boolean }) => {
	const image: ImageBlur = {
		imageURL: '/img/showcases/development.jpg',
		imageBlurURL: '/img/showcases/development-blur.jpg',
		imageAlt: 'Logo do app Formula, um </> dentro de um octogono.',
	}

	return (
		<Section half={half} image={image}>
			<>
				<h2>desenvolvimento</h2>
				<p>50% das empresas listadas na Fortune500 desapareceram. São gigantes como a Kodak e Blockbuster. 50% é muito! A boa notícia é que o fato de estar aqui significa que você quer evitar que isso aconteça na sua organização.</p>
				<p>
					Tecnologia é o que vai fazer sua organização permanecer viva, permanecer inovando. Todas empresas que substituíram as 50% da Fortune500 são empresas de tecnologia. E todas elas, como a Ford e a Walmart, estão se transformando e dizendo: “somos uma empresa de
					tecnologia”.
				</p>
				<Button as='a' href='/para-empresas/desenvolvimento' icon={<ChevronRight20Regular />} size='large' appearance='primary' shape='square'>conheça();</Button>
			</>
		</Section>
	)
}
