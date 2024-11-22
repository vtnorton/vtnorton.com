import { Button } from '@fluentui/react-components'
import { ChevronRight20Regular } from '@fluentui/react-icons'
import { ImageBlur, Section } from '../../components/SectionComponent'

export const HeartthrobSection = ({ half }: { half?: boolean }) => {
	const imageBlur: ImageBlur = {
		imageURL: '/img/showcases/heartthrob.jpg',
		imageBlurURL: '/img/showcases/heartthrob-blur.jpg',
		imageAlt: 'Imagem com diversas cores aleatoriamente',
	}

	return (
		<Section half={half} image={imageBlur}>
			<h2>heartthrob</h2>
			<p>O heartthrob é um design system baseado no Fluent UI da Microsoft focado em acessibilidade, produtividade para o negócio e para os profissionais que desenvolvem o sistema e que garante uma entrega ágil de valor e qualidade necessários para um negócio escalonável.</p>
			<p>Confira esta lista de projetos que vão facilitar o desenvolvimento do seu negócio na direção certa!</p>

			<Button as='a' href='/heartthrob' icon={<ChevronRight20Regular />} size='large' appearance='primary' shape='square'>
				conheça o framework();
			</Button>
		</Section>
	)
}
