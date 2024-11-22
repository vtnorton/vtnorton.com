import { FooterComponent, PageHeroComponent, ProductShelfComponent } from '../components'
import { Section } from '../components/SectionComponent'
import { SeoProps } from '../database/SEOProps'
import { ProfileSection } from '../sections'
import { ConsultingSection, DevelopmentSection } from '../sections/ForBusiness'

export default function ParaEmpresas() {
	return (
		<>
			<SeoProps
				title='para empresas'
				description='Queremos o seu sucesso: A principal métrica de caso é o sucesso digital do seu negócio. Não é a única métrica, mas é a mais importante, e o raciocínio é lógico: se o cliente tiver uma experiência negativa usando o seu produto ou serviço, ele não vai utilizar novamente. Simples. Vamos te ajudar a oferecer a melhor experiência possível para o seu cliente.'
				featureImage='/img/pages/for-business.jpg' />
			<PageHeroComponent
				title='vtnorton: para empresas'
				description='Queremos o seu sucesso: A principal métrica de caso é o sucesso digital do seu negócio. Não é a única métrica, mas é a mais importante, e o raciocínio é lógico: se o cliente tiver uma experiência negativa usando o seu produto ou serviço, ele não vai utilizar novamente. Simples. Vamos te ajudar a oferecer a melhor experiência possível para o seu cliente.'
				backgroundUrl='/img/pages/for-business.jpg'>
				<div className='flex'>
					<DevelopmentSection half />
					<ConsultingSection half />
				</div>
			</PageHeroComponent>

			<div className='container'>
				<Section>
					<div className='flex'>
						<div>
							<h3>💯 mais que programação</h3>
							<p>Programação não é mais programação, é desenvolvimento. E o desenvolvimento não anda sozinho: está imerso em uma cultura agile, com integrações contínuas e uma equipe de desenvolvedores qualificados por dentro do seu negócio.</p>
							<p>Entenda que nenhuma empresa avança sem que a tecnologia faça parte do seu núcleo de decisões. Está preparado para dar um passo à frente?</p>
						</div>
						<div>
							<h3>🔎 atenção aos detalhes</h3>
							<p>
								Muitas vezes não é a qualidade do desenvolvimento, ou a tecnologia mais recente que vai fazer o seu negócio explodir no mercado. É preciso ir mais fundo, conta bem mais uma boa usabilidade, a imagem que é passada pelo marketing, design e pelas políticas da sua empresa que, às vezes o proprio produto.
							</p>
						</div>
						<div>
							<h3>🏆 windows insider mvp</h3>
							<p>
								Fui premiado 8x como profissional de maior valor pela Microsoft, e isso é uma honra; porém me traz algumas responsabilidades. Se eu tiver que ir ao seu escritório e colocar a ultima versão do Windows no computador da sua secretária, eu vou fazer isso. Falo isso porque
								Microsoft é o futuro.
							</p>
							<p>Ser Insider significa que eu tenho uma bola de cristal ao meu dispor para te ajudar na tomada de decisões.</p>
						</div>

					</div>
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
