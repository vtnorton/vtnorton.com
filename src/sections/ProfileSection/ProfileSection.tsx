import { ChevronRight20Regular } from '@fluentui/react-icons'
import { Button } from '@fluentui/react-components'
import { ImageBlur, Section } from '../../components/SectionComponent'

export const ProfileSection = ({ half }: { half?: boolean }) => {
	const imageBlur: ImageBlur = {
		imageURL: '/img/showcases/profile.jpg',
		imageBlurURL: '/img/showcases/profile-blur.jpg',
		imageAlt: 'Foto do Vitor Norton, homem branco alto, cabelo comprido e azul',
	}

	return (
		<Section half={half} image={imageBlur}>
			<>
				<h2>🎸 vítor norton;</h2>
				<p>
					Depois de quase 10 anos como dev, tenho me aprofundado em Developer Relations, estando hoje como Dev Advocate na <a href='https://superviz.com'>SuperViz</a>.
				</p>
				<p>
					Já escrevi documentações, organizei eventos, apresentei palestras em grandes eventos como TDC, Microsoft Ignite, Campus Party, vários posts no blog, podcasts, criei apps pro Windows (e Windows Phone) e hoje sigo criando ferramentas para devs. Tudo isso pensando em
					acessibilidade, democracia, diversidade e inclusão.
				</p>
				<p>
					<strong>Hobbies: </strong> Cinema, Música, Board Games
				</p>

				<Button as='a' href='https://www.linkedin.com/in/vtnorton/' icon={<ChevronRight20Regular />} size='large' appearance='primary' shape='square'>LinkedIn;</Button>
			</>
		</Section>
	)
}
