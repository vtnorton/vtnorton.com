import { FooterComponent, PageHeroComponent, ProductShelfComponent, ProfileComponent } from '../../components'
import { ThreeColumnItemsComponent } from '../../components/others/ThreeColumnItemsComponent/ThreeColumnItemsComponent'
import { ThreeColumnItem } from '../../components/others/ThreeColumnItemsComponent/ThreeColumnItemsComponentProps'
import { SeoProps } from '../../database/SEOProps'

const benefits: ThreeColumnItem[] = [
	{
		title: '🔮 sua bola de cristal',
		content: (
			<>
				<p>
					Daqui seis meses, quando sair uma nova versão do Windows e todos os seus sistemas falharem, você vai ter desejado ter uma bola de cristal que sabia exatamente o que iria acontecer, podendo testar, validar e alterar o necessário antes de problemas acontecerem. Eu posso
					te ajudar com isso!
				</p>
			</>
		),
	},
	{
		title: '🆙 sem downtime',
		content: <p>Com a consultoria é possível mudar gradativamente a forma como o seu time trabalha, implementando uma cultura ágil e produtiva, com ferramentas modernas de desenvolvimento oferecidas pela Microsoft, não havendo downtime.</p>,
	},
	{
		title: '🧑‍💻 open source strategy',
		content: (
			<>
				<p>Faremos uma análise de quais partes do seu sistema que podem adotar uma estratégia de código-livre, permitindo que a comunidade de desenvolvedores ao redor do mundo usem, modifiquem, melhorem e deem feedback sobre o seu produto.</p>
			</>
		),
	},
]

export default function Consultoria() {
	return (
		<>
			<SeoProps
				title='consultoria de produto'
				description='Com a consultoria ofereço a você um trabalho pontual para otimizar um produto que você já tem, seja site, aplicativo, sistema, time de desenvolvimento. Faço uma análise das potencialidades e pontos fracos, escolho as melhores estratégias e ferramentas aplicadas para consertar o que não está funcionando e aprimorar o que já está bom. Venha conhecer as soluções rápidas e eficientes que oferecemos a você e à sua empresa.'
				featureImage='/img/pages/consultoria.jpg'
			/>
			<PageHeroComponent
				title='consultoria de produto'
				description='Com a consultoria ofereço a você um trabalho pontual para otimizar um produto que você já tem, seja site, aplicativo, sistema, time de desenvolvimento. Faço uma análise das potencialidades e pontos fracos, escolho as melhores estratégias e ferramentas aplicadas para consertar o que não está funcionando e aprimorar o que já está bom. Venha conhecer as soluções rápidas e eficientes que oferecemos a você e à sua empresa.'
				backgroundUrl='/img/pages/consultoria.jpg'>
				<section className='section'>
					<ThreeColumnItemsComponent items={benefits} />
				</section>
			</PageHeroComponent>

			<div className='container'>
				<section className='section'>
					<div className='row showcase'>
						<div className='col-md-6 col-sm-8'>
							<h2>análises técnicas</h2>
							<p>
								Para cada problema identificado, estimaremos o impacto e a dificuldade de implementar a correção. Depois, selecionamos o que é mais importante e elaboramos um documento solicitando a correção do problema. Em seguida, essa documentação técnica é compartilhada e
								discutida com o time para validação e implementação.
							</p>
							<p>Após a análise técnica, já possuo uma noção clara dos problemas existentes em seu produto. Diante disso, a equipe vtnorton cria documentações específicas de correções, acompanhadas de protocolos de solução.</p>
						</div>
						<div className='col-md-5 col-md-offset-1'>
							<img src='/img/pages/para-empresas/pexels-photo-900108.jpg' />
						</div>
					</div>
				</section>
			</div>

			<ProductShelfComponent showBusinessCases />

			<ProfileComponent />

			<FooterComponent />
		</>
	)
}
