import { useRouter } from 'next/router'

import { FooterComponent, NextProjectComponent, PageHeroComponent, ProductShelfComponent } from '../components'
import { SeoProps } from '../database/SEOProps'
import { Section, SectionContentWithImage } from '../components/SectionComponent'

export default function Heartthrob() {
	const router = useRouter()

	return (
		<>
			<SeoProps title='heartthrob' description='Já pensou em entregar um MVP em poucos dias, com qualidade impecável e as melhores práticas da atualidade, e lucrar bastante com isso?' featureImage='/img/pages/desenvolvimento.jpg' />
			<PageHeroComponent title='heartthrob' description='Já pensou em entregar um MVP em poucos dias, com qualidade impecável e as melhores práticas da atualidade, e lucrar bastante com isso?' backgroundUrl='/img/pages/desenvolvimento.jpg' backgroundPosition='-250px'>
				<Section removePaddingButton>
					<div className='text-60-percent-wrap'>
						<h2>O que iremos resolver</h2>
						<p>
							Uma das maiores vantagens que a área de programação nos dá é a possibilidade de usar nosso conhecimento em projetos que não demandam uma contratação. Os freelances estão em toda a parte, e cada um de nós já se viu cogitando pegar para complementar nossa renda de
							alguma forma.
						</p>
						<p>
							E agora ficou mais fácil! Heartthrob é um framework open-source que quer facilitar a criação de suas aplicações. Com bibliotecas para front e back-end, ele visa acelerar o desenvolvimento dos sites, tirando do caminho as tarefas mais demoradas como controle de
							acesso, login de usuário, design de componentes, etc., para permitir que você possa focar apenas no negócio do seu cliente!
						</p>
					</div>

					<div className='space-long'></div>

					<div className='flex'>
						<div>
							<h3>🧩 Desacoplado!</h3>
							<p>Você pode usar o Hearthrob apenas no backend ou apenas no frontend, garantindo que ele vai complementar as suas necessidades!</p>
						</div>
						<div>
							<h3>🔬 Testes + Testes + Testes</h3>
							<p>
								Atualmente, não dá para esperar sentado que o cliente envie um feedback via carta ou que liguem para o SAC. Não! Em cinco segundos eles podem fazer um tweet que destruirá o seu negócio. É vital que companhias, negócios e organizações como a nossa, estejam antenadas aos
								sinais que estão lá fora, na comunidade.
							</p>
						</div>
						<div>
							<h3>📚 Swagger + Documentação</h3>
							<p>Tenha preparadas as configurações de swagger e de outras ferramentas para as suas API em um piscar de olhos! Sem falar de APIs já prontas com autenticação de usuário por JWT.</p>
						</div>

					</div>

					<div className='space-long'></div>

					<SectionContentWithImage image={'/img/projects/heartthrob/heartthrob-front.jpeg'} imageAlt={''} >
						<h2>Frontend</h2>
						<p>
							Temos componentes prontos que podem ser apenas inseridos nas suas aplicações, poupando tempo e esforço ao longo do desenvolvimento, além de componentes visuais já configurados e adaptáveis às suas necessidades!
						</p>
						<p>
							Entregamos também páginas já prontas, caso queira utilizar, como páginas de login, registro de usuário, edição de perfil, entre outros...
						</p>
					</SectionContentWithImage>

					<div className='space-long'></div>

					<NextProjectComponent path={router.pathname} />
				</Section>
			</PageHeroComponent>
			<ProductShelfComponent />
			<FooterComponent />
		</>
	)
}
