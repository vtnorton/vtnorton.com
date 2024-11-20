import { FooterComponent, PageHeroComponent, ProfileComponent, Step, VerticalSteper } from '../../components'
import { PhotoGallery } from '../../components/PhotoGalleryComponent/PhotoGalleryComponent'
import { Section } from '../../components/SectionComponent'

export default function Consultoria() {
	return (
		<>
			{/* <SeoProps
				title='consultoria de produto'
				description='Com a consultoria ofereço a você um trabalho pontual para otimizar um produto que você já tem, seja site, aplicativo, sistema, time de desenvolvimento. Faço uma análise das potencialidades e pontos fracos, escolho as melhores estratégias e ferramentas aplicadas para consertar o que não está funcionando e aprimorar o que já está bom. Venha conhecer as soluções rápidas e eficientes que oferecemos a você e à sua empresa.'
				featureImage='/img/pages/consultoria.jpg' /> */}
			<PageHeroComponent
				title='Brand Awareness da SuperViz, através de eventos'
				description=''
				backgroundUrl='/img/pages/events-superviz.jpg'>
				<Section>
					<h2>Jornada de eventos</h2>
				</Section>
			</PageHeroComponent>

			<div className='container'>
				<Section>
					<h2>Patrocínos</h2>

					<VerticalSteper>
						<Step title='CodeCon Summit'>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
							</p>
						</Step>
						<Step title='The Developer Conference'>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
							</p>
						</Step>

						<Step title='FRONTIN Sampa'>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
							</p>
						</Step>

						<Step title='CodeCon Select'>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
							</p>
						</Step>
					</VerticalSteper>
				</Section>

			</div>

			<div className='container wrapper'>
				<PhotoGallery options={{ Carousel: { infinite: false } }}>
					<a data-fancybox='gallery' href='/img/projects/events-superviz/gallery/p1.jpg' data-caption="Estande da SuperViz na CodeCon Summit, com o prêmio que seria sorteado, o Lego da Guitarra Fender">
						<img src='/img/projects/events-superviz/gallery/1.jpg' alt='Estande da SuperViz na CodeCon Summit, com o prêmio que seria sorteado, o Lego da Guitarra Fender' />
					</a>
					<a data-fancybox='gallery' href='/img/projects/events-superviz/gallery/p2.jpg' data-caption="Monica e Danillo no estande da SuperViz no FRONTIN Sampa">
						<img src='/img/projects/events-superviz/gallery/2.jpg' alt='Monica e Danillo no estande da SuperViz no FRONTIN Sampa' />
					</a>
					<a data-fancybox='gallery' href='/img/projects/events-superviz/gallery/p3.jpg' data-caption="Apresentando a SuperViz para as pessoas na CodeCon Summit">
						<img src='/img/projects/events-superviz/gallery/3.jpg' alt='Apresentando a SuperViz para as pessoas na CodeCon Summit' />
					</a>
					<a data-fancybox='gallery' href='/img/projects/events-superviz/gallery/p4.jpg' data-caption="Equipe preparada para o estande da SuperViz no The Developer Conference">
						<img src='/img/projects/events-superviz/gallery/4.jpg' alt='Equipe preparada para o estande da SuperViz no The Developer Conference' />
					</a>
					<a data-fancybox='gallery' href='/img/projects/events-superviz/gallery/p5.jpg' data-caption="Pessoas engajando na ativação feita pela SuperViz">
						<img src='/img/projects/events-superviz/gallery/5.jpg' alt='Pessoas engajando na ativação feita pela SuperViz' />
					</a>
					<a data-fancybox='gallery' href='/img/projects/events-superviz/gallery/p6.jpg' data-caption="Logo da SuperViz nos telões do palco principal do FRONTIN Sampa">
						<img src='/img/projects/events-superviz/gallery/6.jpg' alt='Logo da SuperViz nos telões do palco principal do FRONTIN Sampa' />
					</a>
					<a data-fancybox='gallery' href='/img/projects/events-superviz/gallery/p7.jpg' data-caption="Logo da SuperViz no telão do palco principal do The Developer Conference">
						<img src='/img/projects/events-superviz/gallery/7.jpg' alt='Logo da SuperViz no telão do palco principal do The Developer Conference' />
					</a>
					<a data-fancybox='gallery' href='/img/projects/events-superviz/gallery/p8.jpg' data-caption="Equipe preparada para receber as pessoas no estande da SuperViz no FRONTIN Sampa">
						<img src='/img/projects/events-superviz/gallery/8.jpg' alt='Equipe preparada para receber as pessoas no estande da SuperViz no FRONTIN Sampa' />
					</a>
					<a data-fancybox='gallery' href='/img/projects/events-superviz/gallery/p9.jpg' data-caption="Equipe preparada para receber as pessoas no estande da SuperViz na CodeCon Summit">
						<img src='/img/projects/events-superviz/gallery/9.jpg' alt='Equipe preparada para receber as pessoas no estande da SuperViz na CodeCon Summit' />
					</a>
					<a data-fancybox='gallery' href='/img/projects/events-superviz/gallery/p10.jpg' data-caption="Apresendando detalhes técnicos da SuperViz no estande do The Developer Conference">
						<img src='/img/projects/events-superviz/gallery/10.jpg' alt='Apresendando detalhes técnicos da SuperViz no estande do The Developer Conference' />
					</a>
				</PhotoGallery>
			</div>

			<div className='container'>
				<Section>
					<h2>Conteúdo</h2>
				</Section>

				<Section>
					<h2>Ativações</h2>
				</Section>

				<Section>
					<h2>Hackathon</h2>
				</Section>
			</div>



			<ProfileComponent />

			<FooterComponent />
		</>
	)
}