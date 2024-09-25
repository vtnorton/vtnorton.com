import { ConsultingShowcaseComponent, DevelopmentShowcaseComponent, FooterComponent, PageHeroComponent, ProductShelfComponent, ProfileComponent } from '../components'
import { ThreeColumnItemsComponent } from '../components/others/ThreeColumnItemsComponent/ThreeColumnItemsComponent'
import { ThreeColumnItem } from '../components/others/ThreeColumnItemsComponent/ThreeColumnItemsComponentProps'
import { SeoProps } from '../database/SEOProps'

const benefits: ThreeColumnItem[] = [
	{
		title: '💯 mais que programação',
		content: (
			<>
				<p>Programação não é mais programação, é desenvolvimento. E o desenvolvimento não anda sozinho: está imerso em uma cultura agile, com integrações contínuas e uma equipe de desenvolvedores qualificados por dentro do seu negócio.</p>
				<p>Entenda que nenhuma empresa avança sem que a tecnologia faça parte do seu núcleo de decisões. Está preparado para dar um passo à frente?</p>
			</>
		),
	},
	{
		title: '🔎 atenção aos detalhes',
		content: (
			<p>
				Muitas vezes não é a qualidade do desenvolvimento, ou a tecnologia mais recente que vai fazer o seu negócio explodir no mercado. É preciso ir mais fundo, conta bem mais uma boa usabilidade, a imagem que é passada pelo marketing, design e pelas políticas da sua empresa
				que, às vezes o proprio produto.
			</p>
		),
	},
	{
		title: '🏆 windows insider mvp',
		content: (
			<>
				<p>
					Fui premiado 8x como profissional de maior valor pela Microsoft, e isso é uma honra; porém me traz algumas responsabilidades. Se eu tiver que ir ao seu escritório e colocar a ultima versão do Windows no computador da sua secretária, eu vou fazer isso. Falo isso porque
					Microsoft é o futuro.
				</p>
				<p>Ser Insider significa que eu tenho uma bola de cristal ao meu dispor para te ajudar na tomada de decisões.</p>
			</>
		),
	},
]

export default function ParaEmpresas() {
	return (
		<>
			<SeoProps
				title='para-empresas'
				description='Queremos o seu sucesso: A principal métrica de caso é o sucesso digital do seu negócio. Não é a única métrica, mas é a mais importante, e o raciocínio é lógico: se o cliente tiver uma experiência negativa usando o seu produto ou serviço, ele não vai utilizar novamente. Simples. Vamos te ajudar a oferecer a melhor experiência possível para o seu cliente.'
				featureImage='/img/pages/for-business.jpg'
			/>
			<PageHeroComponent
				title='vtnorton: para empresas'
				description='Queremos o seu sucesso: A principal métrica de caso é o sucesso digital do seu negócio. Não é a única métrica, mas é a mais importante, e o raciocínio é lógico: se o cliente tiver uma experiência negativa usando o seu produto ou serviço, ele não vai utilizar novamente. Simples. Vamos te ajudar a oferecer a melhor experiência possível para o seu cliente.'
				backgroundUrl='/img/pages/for-business.jpg'>
				<div className='row sameheight'>
					<div className='col-md-6 col-sm-12'>
						<DevelopmentShowcaseComponent half></DevelopmentShowcaseComponent>
					</div>
					<div className='col-md-6 col-sm-12'>
						<ConsultingShowcaseComponent half></ConsultingShowcaseComponent>
					</div>
				</div>
			</PageHeroComponent>

			<div className='container'>
				<section className='section'>
					<ThreeColumnItemsComponent items={benefits} />
				</section>
			</div>

			<ProductShelfComponent showBusinessCases />

			<ProfileComponent />

			<FooterComponent />
		</>
	)
}
