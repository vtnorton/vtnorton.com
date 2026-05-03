import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { SectionTitle } from '../../components/SectionTitle'
import type { ImageBlur } from '../../types/Image'

export const ProfileSection = () => {
	const imageBlur: ImageBlur = {
		imageUrl: '/img/sections/profile.jpg',
		imageBlurUrl: '/img/sections/profile-blur.jpg',
		imageAlt: 'Foto do Vitor Norton, homem branco alto, cabelo comprido e azul',
	}

	return (
		<Section image={imageBlur}>
			<SectionTitle eyebrow='Sobre mim' title='Vitor Norton' />
			<p>
				Passei por startups, fintechs, e empresas que eu mesmo criei. Experimentei tudo: desde acordar às 4 da manhã pra
				garantir que pipelines de dados funcionassem, até ensinar programação pra pessoas com deficiência e idosos.
			</p>
			<p>
				Fui tech lead, teacher, developer advocate — mas no fundo, sempre fui alguém que gosta de ligar pessoas,
				melhorar a experiência de quem programa, e deixar as coisas mais simples (mesmo quando são difíceis).
			</p>
			<p>
				Há mais de 10 anos escrevo código, organizo eventos, crio conteúdo, conecto comunidades e continuo recusando a
				ignorar novas ideias e projetos.
			</p>

			<Button as='a' href='https://www.linkedin.com/in/vtnorton/' size='medium' appearance='primary' shape='square'>
				LinkedIn
			</Button>
		</Section>
	)
}
