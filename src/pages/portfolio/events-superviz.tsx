import Image from 'next/image'
import { FooterComponent, PageHeroComponent, ProfileComponent, Step, VerticalSteper } from '../../components'
import { PhotoGallery } from '../../components/PhotoGalleryComponent/PhotoGalleryComponent'
import { Section, SectionContentWithImage } from '../../components/SectionComponent'
import { Card, CardHeader, CardPreview, Tag } from '@fluentui/react-components'
import { SuperVizEventsTalks } from '../../components/page-specific'
import { ContactCardRegular, PeopleCommunityRegular } from '@fluentui/react-icons'

export default function Consultoria() {
	return (
		<>
			{/* <SeoProps
				title='consultoria de produto'
				description='Com a consultoria ofereço a você um trabalho pontual para otimizar um produto que você já tem, seja site, aplicativo, sistema, time de desenvolvimento. Faço uma análise das potencialidades e pontos fracos, escolho as melhores estratégias e ferramentas aplicadas para consertar o que não está funcionando e aprimorar o que já está bom. Venha conhecer as soluções rápidas e eficientes que oferecemos a você e à sua empresa.'
				featureImage='/img/pages/consultoria.jpg' /> */}
			<PageHeroComponent
				title='Brand Awareness da SuperViz, através de eventos'
				description='Durante o segundo semestre de 2024, encabecei na SuperViz a estratégia de participação em eventos de tecnologia, com o objetivo de aumentar o reconhecimento da marca e gerar leads qualificados.'
				backgroundUrl='/img/pages/events-superviz.jpg'>
				<Section>
					<h2>Jornada de eventos</h2>
				</Section>
			</PageHeroComponent>

			<div className='container'>
				<Section>
					<h2>Patrocínios em Eventos</h2>

					<div className='text-60-percent-wrap'>
						<p>
							Participar de eventos é uma maneira super eficaz de marcar presença no mercado. É nestes encontros que você tem a chance de interagir diretamente com seu público, criar experiências memoráveis e mostrar a personalidade da sua empresa.
						</p>
						<p>
							Entrando no mercado pela primeira vez como ferramenta para desenvolvedores, foi importante a participação da empresa em uma sequência de eventos no segundo semestre de 2024 para criar uma presença consistente e memorável no cenário tech brasileiro.
						</p>
						<p>
							Cada evento claro, com uma diversidade de público diferentes e que permitiram alcançar diferentes bolhas do mercado de desenvolvedores.
						</p>
					</div>

					<div className='space-long'></div>

					<SectionContentWithImage side='right' image={'/img/projects/events-superviz/patrocinio.jpg'} imageAlt={'Imãs de geladeria como brinde da SuperViz'} sticky >
						<VerticalSteper>
							<Step title='CodeCon Summit'>
								<>
									<div>
										<Tag
											icon={<PeopleCommunityRegular />}
											appearance='outline'
											style={{
												marginRight: '.5rem',
											}}
											shape='circular'>+1.700 pessoas</Tag>
										<Tag
											icon={<ContactCardRegular />}
											appearance='outline'
											style={{
												marginRight: '.5rem',
											}}
											shape='circular'>Junior, Pleno e Sênior</Tag>
									</div>
									<p>
										O CodeCon Summit foi o primeiro evento patrocinado pela SuperViz, onde tivemos um estande e apresentamos a palestra "O código por trás da colaboração em tempo real e o que são websockets".
									</p>
									<p>
										Nossa presença criativa e marcante no evento gerou alto reconhecimento entre os participantes, superando marcas já estabelecidas no mercado graças ao apoio da organização e nossas ativações inovadoras.</p>
									<p>
										No fim do evento, fizemos uma incrível bagunça de chamar todas as pessoas envolta do estande para o sorteio final. Momento que foi importante para conseguir mais ativações e garantir que as pessoas lembrassem da marca após o evento.
									</p>
								</>
							</Step>
							<Step title='The Developer Conference'>
								<>
									<div>
										<Tag
											icon={<PeopleCommunityRegular />}
											appearance='outline'
											style={{
												marginRight: '.5rem',
											}}
											shape='circular'>+15.900 pessoas</Tag>
										<Tag
											icon={<ContactCardRegular />}
											appearance='outline'
											style={{
												marginRight: '.5rem',
											}}
											shape='circular'>Pleno, Sênior, Product Managers, Diretores</Tag>
									</div>
									<p>Com um público impressionante de 15.900 pessoas, sendo 45% com mais de 10 anos de experiência, o The Developer Conference foi um grande sucesso para a SuperViz, aonde o foco foi maior em construir uma relação com o público do que o brand awareness, possibilitando maior quantidade de leads qualificados.</p>
								</>
							</Step>

							<Step title='FRONTIN Sampa'>
								<>
									<div>
										<Tag
											icon={<PeopleCommunityRegular />}
											appearance='outline'
											style={{
												marginRight: '.5rem',
											}}
											shape='circular'>+700 pessoas</Tag>
										<Tag
											icon={<ContactCardRegular />}
											appearance='outline'
											style={{
												marginRight: '.5rem',
											}}
											shape='circular'>Pleno, Sênior</Tag>
									</div>
									<p>
										O FRONTIN Sampa, um dos principais eventos de front-end do Brasil, atraiu 700 participantes com foco em desenvolvedores front-end de nível médio à avançado. Nossa participação incluiu um estande com ativações interativas e uma palestra técnica.
									</p>
									<p>
										O maior foco do evento foi de fato a exposição massiva que tivemos nas redes sociais como um dos principais patrocinadores, especialmente no LinkedIn, ao invés de geração de leads.</p>
								</>
							</Step>

							<Step title='CodeCon Select'>
								<>
									<div>
										<Tag
											icon={<PeopleCommunityRegular />}
											appearance='outline'
											style={{
												marginRight: '.5rem',
											}}
											shape='circular'>+230 pessoas</Tag>
										<Tag
											icon={<ContactCardRegular />}
											appearance='outline'
											style={{
												marginRight: '.5rem',
											}}
											shape='circular'>Sênior, Staff, Diretores, C-Level</Tag>
									</div>
									<p>O CodeCon Select, realizado no fim de 2024 - encerrando um ciclo de diversos eventos na capital paulista, foi um evento exclusivo focado em profissionais Seniors, Staff e C-level. Com um público selecionado de +230 pessoas, foi uma maneira de garantir visibilidade da marca entre os tomadores de decisão e líderes técnicos que já estavam vendo a marca da SuperViz aparecendo nas redes e nos eventos por conta das ações anteriores.</p>
								</>
							</Step>
						</VerticalSteper>
					</SectionContentWithImage>
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
					<h2>Palestras e Compartilhamento de Conhecimento</h2>

					<SectionContentWithImage image={'/img/projects/events-superviz/speaking.jpg'} imageAlt={'Sala de palestra da CodeCon Summit lotada'} gap={4}>
						<p>Tão importante, se não mais, que patrocinar eventos é poder levar conteúdo para eles. Desta forma, por mais que o número de pessoas que atendam a palestra não seja tão expressivo quanto os que participam da experiência nos stands patrocinados, a qualidade do conteúdo e a profundidade das discussões técnicas geram um impacto muito mais significativo e duradouro.</p>
						<p>Como Developer Advocate, é importante que as palestras foquem no conteúdo técnico e educativo, em vez de serem comerciais, o que afastaria o público-alvo. Afinal, o papel principal não é vender o produto, mas sim compartilhar conhecimento. </p>
						<p>Segue abaixo as palestras feitas durante o segundo semestre de 2024 para a SuperViz:</p>
					</SectionContentWithImage>

					<div className='space-long'></div>

					<div className='flex'>
						<VerticalSteper>
							<Step title='JS Builders Community'>
								<>
									<SuperVizEventsTalks date={'3 de Julho'} talkTitle={'Aprenda alguns Design Pattern em JavaScript'} />
									<Card
										orientation='horizontal'
										onClick={() => window.location.href = 'https://www.youtube.com/watch?v=U54Aj1c9WDo&t=810s'}>
										<CardPreview>
											<Image src='/img/projects/events-superviz/webcrumbs.jpg' alt='JS Builders by Webcrumbs' style={{ width: '150px' }} width={150} height={84} />
										</CardPreview>
										<CardHeader
											header={(<h4>JS Builder meetup #02 with Vitor Norton</h4>)}
											description={<small>Watch the talk on the webcrumbs Youtube Channel</small>} />

									</Card>
								</>
							</Step>
							<Step title='Campus Party'>
								<SuperVizEventsTalks date={'11 de Julho'} talkTitle={'O código por trás da colaboração em tempo real e o que são websockets'} onsite />
							</Step>
							<Step title='Tech in Rio'>
								<SuperVizEventsTalks date={'8 de Agosto'} talkTitle={'Workshop trabalhando com Realtime da SuperViz'} />
							</Step>
							<Step title='GambiConf'>
								<SuperVizEventsTalks date={'2 de Novembro'} talkTitle={'Adicionando multiplayer em um jogo sem autorização do desenvolvedor'} onsite />
							</Step>
							<Step title='CodeCon Summit'>
								<SuperVizEventsTalks date={'7 de Setembro'} talkTitle={'O código por trás da colaboração em tempo real e o que são websockets'} onsite />
							</Step>
						</VerticalSteper>
						<VerticalSteper>
							<Step title='FRONTIN Sampa'>
								<SuperVizEventsTalks date={'19 de Outubro'} talkTitle={'Motivos para distribuir via CDN ao invés npm modules'} onsite />
							</Step>
							<Step title='FATEC'>
								<SuperVizEventsTalks date={'21 de Outubro'} talkTitle={'O código por trás da colaboração em tempo real e o que são websockets'} onsite />
							</Step>
							<Step title='Conf42.com'>
								<>
									<SuperVizEventsTalks date={'5 de Setembro'} talkTitle={'The Code Behind Every Real-Time Collaboration Tool'} />
									<Card
										orientation='horizontal'
										onClick={() => window.location.href = 'https://www.youtube.com/watch?v=RUreD6HcOYk'}>
										<CardPreview>
											<Image src='/img/projects/events-superviz/conf42.jpg' alt='Conf42.com' style={{ width: '150px' }} width={150} height={84} />
										</CardPreview>
										<CardHeader
											header={(<h4>The Code Behind Every Real-Time Collaboration Tool | Vitor Norton | Conf42 Platform Eng. 2024</h4>)}
											description={<small>Watch the talk on the Conf42 Platform Engineering 2024 Youtube Channel</small>} />
									</Card>
								</>
							</Step>
							<Step title='JS Nation US'>
								<>
									<SuperVizEventsTalks date={'21 de Novembro'} talkTitle={'Breaking the code behind realtime collaboration with websockets'} />
									<Card
										orientation='horizontal'
										onClick={() => window.location.href = 'https://gitnation.com/contents/breaking-the-code-behind-realtime-collaboration-with-websockets'}>
										<CardPreview>
											<Image src='/img/projects/events-superviz/jsconf.png' alt='JS Conf' style={{ width: '150px' }} width={150} height={84} />
										</CardPreview>
										<CardHeader
											header={(<h4>Breaking the code behind realtime collaboration with websockets</h4>)}
											description={<small>Watch the talk on the JS Nation platform</small>} />

									</Card>
								</>
							</Step>
						</VerticalSteper>
					</div>
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