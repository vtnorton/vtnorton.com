import { FooterComponent, PageHeroComponent, ProductShelfComponent } from '../../components'
import { Section, SectionContentWithImage } from '../../components/SectionComponent'
import { SeoProps } from '../../database/SEOProps'
import { ProfileSection } from '../../sections'

export default function Desenvolvimento() {
	return (
		<>
			<SeoProps
				title='desenvolvimento'
				description='50% das empresas na Fortune 500 desapareceram. São as Kodaks, Blockbusters. 50% é muito! A boa notícia é que o fato de estar aqui significa que você quer evitar que isso aconteça na sua organização. Desenvolver com qualidade impacta diretamente na forma como você e sua empresa são vistos no mercado. Uma boa interface, um sistema responsivo, imagens de alta qualidade: todos esses são fatores decisivos para o cliente escolher a sua marca. Invista em um forte desenvolvimento de sistemas e venda mais e melhor.'
				featureImage='/img/pages/desenvolvimento.jpg' />
			<PageHeroComponent
				title='desenvolvimento'
				description='50% das empresas na Fortune 500 desapareceram. São as Kodaks, Blockbusters. 50% é muito! A boa notícia é que o fato de estar aqui significa que você quer evitar que isso aconteça na sua organização. Desenvolver com qualidade impacta diretamente na forma como você e sua empresa são vistos no mercado. Uma boa interface, um sistema responsivo, imagens de alta qualidade: todos esses são fatores decisivos para o cliente escolher a sua marca. Invista em um forte desenvolvimento de sistemas e venda mais e melhor.'
				backgroundUrl='/img/pages/desenvolvimento.jpg'
				backgroundPosition='-250px'>
				<Section>
					<div className='flex'>
						<div>
							<h3>⚙️ devops</h3>
							<p>
								Nunca a cultura DevOps foi tão importante como agora. E que diabos é isso!? É a cultura de garantir que o seu produto vá ser entregue de forma rápida, constante, com menos problemas, menos custos e de forma automatizada. Parece mágica. E é! Seu time de desenvolvimento,
								operações e controle de qualidade só tem a ganhar.
							</p>
						</div>
						<div>
							<h3>🧑‍🤝‍🧑 comunidade</h3>
							<p>
								Atualmente, não dá para esperar sentado que o cliente envie um feedback via carta ou que liguem para o SAC. Não! Em cinco segundos eles podem fazer um tweet que destruirá o seu negócio. É vital que companhias, negócios e organizações como a nossa, estejam antenadas aos
								sinais que estão lá fora, na comunidade.
							</p>
						</div>
						<div>
							<h3>💹 escalabilidade</h3>
							<p>
								Você gastou muito dinheiro com o seu produto e, de repente, você precisa alcançar um novo público, mas o sistema não está preparado para isso? Vai ter que fazer tudo de novo. Do zero! Um problema comum, não?! Que tal já implementar as práticas de escalabilidade mais
								recentes a partir de agora?! Aprenda a evitar custos e frustrações futuras, já comece grande.
							</p>
						</div>
					</div>
					<div className='space-long'></div>
					<div className='flex'>
						<div>
							<h3>💻 tech</h3>
							<p>As ferramentas utilizadas são sempre o que há de mais moderno oferecido pela plataforma de serviços da Microsoft, como dotnet, aspnet e Microsoft Azure.</p>
							<p>Já o front é formado por TypeScript, React e muito cuidado com a interface do usuário.</p>
						</div>
						<div>
							<h3>📞 suporte</h3>
							<p>Mesmo após a implementação, ofereço um suporte de um ano para qualquer problema que possa aparecer no sistema sem custos adicionais. Isso mesmo, suporte de um ano!</p>
							<p>Este suporte pode, claro, ser estendido.</p>
						</div>
						<div>
							<h3>🚀 heartthrob</h3>
							<p>Após anos de experiência e de desenvolvimento, construí uma base sólida e robusta para que o seu sistema cresça, oferecendo gestão de usuários, autenticação de dois fatores, painéis administrativos, gestão de feedbacks e muito mais.</p>
						</div>
					</div>
				</Section>
			</PageHeroComponent>

			<div className='container'>
				<Section>
					<SectionContentWithImage image={'/img/pages/para-empresas/busy-developer-development-1181280.jpg'} imageAlt={''} gap={10}>
						<h2>desenvolvimento focado no seu cliente</h2>
						<p>
							O desenvolvimento é focado no usuário, com um sistema que se adequa às necessidades do cliente e que otimiza os processos da sua empresa ou startup. Conquiste o seu usuário garantindo privacidade, segurança, acessibilidade e conforto, com um sistema intuitivo com
							excelente usabilidade e interface.
						</p>
					</SectionContentWithImage>
				</Section>
			</div>

			<ProductShelfComponent />

			<div className='container'>
				<ProfileSection />
			</div>

			<FooterComponent />
		</>
	)
}
