import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { ImageBlur } from '../../components/Section/SectionProps'

export const ProfileSection = () => {
	const imageBlur: ImageBlur = {
		imageURL: '/img/sections/profile.jpg',
		imageBlurURL: '/img/sections/profile-blur.jpg',
		imageAlt: 'Foto do Vitor Norton, homem branco alto, cabelo comprido e azul',
	}

	return (
		<Section image={imageBlur}>
			<>
				<h2>/Vítor Norton</h2>
				<div>
					<p>
						Passei por startups, fintechs, e empresas que eu mesmo criei. Experimentei tudo: desde acordar às 4 da manhã pra garantir que pipelines de dados funcionassem, até ensinar programação pra pessoas com deficiência e idosos.
					</p>
					<p>
						Fui tech lead, teacher, developer advocate — mas no fundo, sempre fui alguém que gosta de ligar pessoas, melhorar a experiência de quem programa, e deixar as coisas mais simples (mesmo quando são difíceis).
					</p>
					<p>
						Há mais de 10 anos escrevo código, organizo eventos, crio conteúdo, conecto comunidades e continuo recusando a ignorar novas ideias e projetos.
					</p>
				</div>

				<Button as='a' href='https://www.linkedin.com/in/vtnorton/' size='medium' appearance='primary' shape='square'>LinkedIn</Button>
			</>
		</Section>
	)
}
