import { FooterComponent, PageHeroComponent, ProductShelfComponent } from '../../components'
import { Section, SectionContentWithImage } from '../../components/SectionComponent'
import { SeoProps } from '../../database/SEOProps'
import { ProfileSection } from '../../sections'

export default function Consultoria() {
	return (
		<>
			<SeoProps
				title='consultoria de produto'
				description='Com a consultoria ofereço a você um trabalho pontual para otimizar um produto que você já tem, seja site, aplicativo, sistema, time de desenvolvimento. Faço uma análise das potencialidades e pontos fracos, escolho as melhores estratégias e ferramentas aplicadas para consertar o que não está funcionando e aprimorar o que já está bom. Venha conhecer as soluções rápidas e eficientes que oferecemos a você e à sua empresa.'
				featureImage='/img/pages/consultoria.jpg' />
			<PageHeroComponent
				title='consultoria de produto'
				description='Com a consultoria ofereço a você um trabalho pontual para otimizar um produto que você já tem, seja site, aplicativo, sistema, time de desenvolvimento. Faço uma análise das potencialidades e pontos fracos, escolho as melhores estratégias e ferramentas aplicadas para consertar o que não está funcionando e aprimorar o que já está bom. Venha conhecer as soluções rápidas e eficientes que oferecemos a você e à sua empresa.'
				backgroundUrl='/img/pages/consultoria.jpg'>
				<Section>
					<div className='flex'>
						<div>
							<h3>🔮 sua bola de cristal</h3>
							<p>
								Daqui seis meses, quando sair uma nova versão do Windows e todos os seus sistemas falharem, você vai ter desejado ter uma bola de cristal que sabia exatamente o que iria acontecer, podendo testar, validar e alterar o necessário antes de problemas acontecerem. Eu posso
								te ajudar com isso!
							</p>
						</div>
						<div>
							<h3>🆙 sem downtime</h3>
							<p>Com a consultoria é possível mudar gradativamente a forma como o seu time trabalha, implementando uma cultura ágil e produtiva, com ferramentas modernas de desenvolvimento oferecidas pela Microsoft, não havendo downtime.</p>
						</div>
						<div>
							<h3>🧑‍💻 open source strategy</h3>
							<p>Faremos uma análise de quais partes do seu sistema que podem adotar uma estratégia de código-livre, permitindo que a comunidade de desenvolvedores ao redor do mundo usem, modifiquem, melhorem e deem feedback sobre o seu produto.</p>
						</div>

					</div>
				</Section>
			</PageHeroComponent>

			<div className='container'>
				<Section>
					<SectionContentWithImage image={'/img/pages/para-empresas/pexels-photo-900108.jpg'} imageAlt={''} side='right' >
						<h2>análises técnicas</h2>
						<p>
							Para cada problema identificado, estimaremos o impacto e a dificuldade de implementar a correção. Depois, selecionamos o que é mais importante e elaboramos um documento solicitando a correção do problema. Em seguida, essa documentação técnica é compartilhada e
							discutida com o time para validação e implementação.
						</p>
						<p>
							Após a análise técnica, já possuo uma noção clara dos problemas existentes em seu produto. Diante disso, a equipe vtnorton cria documentações específicas de correções, acompanhadas de protocolos de solução.
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
