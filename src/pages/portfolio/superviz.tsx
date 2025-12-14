import { Card, CardHeader, CardPreview, Link, Tag } from '@fluentui/react-components'
import { PageHero } from '../../components/PageHero'
import { Section, SectionContentWithImage } from '../../components/Section'
import { ImageBlur } from '../../components/Section/SectionProps'
import { Step, VerticalSteper } from '../../components/VerticalStepper'
import { Footer } from '../../sections/Footer/Footer'
import { ContactCardRegular, PeopleCommunityRegular } from '@fluentui/react-icons'
import { PhotoGallery } from '../../components/PhotoGallery'
import { Button } from '../../components/Button'
import { SuperVizEventsTalks } from '../../components/SuperVizEventsTalks/SuperVizEventsTalks'

export default function SuperViz() {
	const imageBlurForHackathon: ImageBlur = {
		imageURL: '/img/portfolio/superviz/hackathon_logo.png',
		imageBlurURL: '/img/portfolio/superviz/hackatohn-2.0.jpg',
		imageAlt: 'Logo do Hackathon da SuperViz 2.0',
	}

	return (
		<article className='superviz'>
			<PageHero
				title='Brand Awareness da SuperViz, através de eventos'
				description='Durante o segundo semestre de 2024, encabecei na SuperViz a estratégia de participação em eventos de tecnologia, com o objetivo de aumentar o reconhecimento da marca e gerar leads qualificados.'
				backgroundUrl='/img/portfolio/superviz.jpg'>
				<Section paragraph>
					<h2>A Jornada de Eventos</h2>
					<p>
						Durante o segundo semestre de 2024, fui responsável por embarcar a SuperViz em uma jornada estratégica de participação em eventos tecnológicos, focando especialmente em desenvolvedores front-end de níveis pleno e sênior. Esta estratégia foi cuidadosamente planejada para construir uma presença consistente e memorável no cenário tech brasileiro.
					</p>

					<p>
						O que incluiu patrocínio em grandes eventos como CodeCon Summit, passando pelo The Developer Conference e FRONTIN Sampa, até chegar ao CodeCon Select, cada evento foi escolhido para maximizar a visibilidade e conexão com a comunidade de desenvolvedores.
					</p>

					<p>
						Além da presença nos eventos, mantivemos um calendário consistente de palestras técnicas e workshops ao longo do semestre. Estas apresentações focaram em temas relevantes para desenvolvedores, desde websockets e colaboração em tempo real até design patterns em JavaScript.
					</p>
				</Section>
			</PageHero>

			<div className='container'>
				<Section>
					<h2>Patrocínios em Eventos</h2>
					<p>
						Participar de eventos é uma maneira super eficaz de marcar presença no mercado. É nestes encontros que você tem a chance de interagir diretamente com seu público, criar experiências memoráveis e mostrar a personalidade da sua empresa.
					</p>
					<p>
						Entrando no mercado pela primeira vez como ferramenta para desenvolvedores, foi importante a participação da empresa em uma sequência de eventos no segundo semestre de 2024 para criar uma presença consistente e memorável no cenário tech brasileiro.
					</p>
					<p>
						Cada evento claro, com uma diversidade de público diferentes e que permitiram alcançar diferentes bolhas do mercado de desenvolvedores.
					</p>
					<br />

					<div className='patrocinios'>
						<SectionContentWithImage side='right' image={'/img/portfolio/superviz/patrocinio.jpg'} imageAlt={'Imãs de geladeria como brinde da SuperViz'} sticky >
							<VerticalSteper>
								<Step title='CodeCon Summit'>
									<>
										<div>
											<Tag
												icon={<PeopleCommunityRegular />}
												appearance='outline'
												size='small'
												style={{
													marginRight: '.5rem',
												}}
												shape='circular'>+1.700 pessoas</Tag>
											<Tag
												icon={<ContactCardRegular />}
												appearance='outline'
												size='small'
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
												size='small'
												style={{
													marginRight: '.5rem',
												}}
												shape='circular'>+15.900 pessoas</Tag>
											<Tag
												icon={<ContactCardRegular />}
												appearance='outline'
												size='small'
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
												size='small'
												style={{
													marginRight: '.5rem',
												}}
												shape='circular'>+700 pessoas</Tag>
											<Tag
												icon={<ContactCardRegular />}
												appearance='outline'
												size='small'
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
												size='small'
												style={{
													marginRight: '.5rem',
												}}
												shape='circular'>+230 pessoas</Tag>
											<Tag
												icon={<ContactCardRegular />}
												appearance='outline'
												size='small'
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
					</div>
				</Section>
			</div>

			<div className='container wrapper'>
				<PhotoGallery options={{ Carousel: { infinite: false } }}>
					<a data-fancybox='gallery' href='/img/portfolio/superviz/gallery/p1.jpg' data-caption='Estande da SuperViz na CodeCon Summit, com o prêmio que seria sorteado, o Lego da Guitarra Fender'>
						<img src='/img/portfolio/superviz/gallery/1.jpg' alt='Estande da SuperViz na CodeCon Summit, com o prêmio que seria sorteado, o Lego da Guitarra Fender' />
					</a>
					<a data-fancybox='gallery' href='/img/portfolio/superviz/gallery/p2.jpg' data-caption='Monica e Danillo no estande da SuperViz no FRONTIN Sampa'>
						<img src='/img/portfolio/superviz/gallery/2.jpg' alt='Monica e Danillo no estande da SuperViz no FRONTIN Sampa' />
					</a>
					<a data-fancybox='gallery' href='/img/portfolio/superviz/gallery/p3.jpg' data-caption='Apresentando a SuperViz para as pessoas na CodeCon Summit'>
						<img src='/img/portfolio/superviz/gallery/3.jpg' alt='Apresentando a SuperViz para as pessoas na CodeCon Summit' />
					</a>
					<a data-fancybox='gallery' href='/img/portfolio/superviz/gallery/p4.jpg' data-caption='Equipe preparada para o estande da SuperViz no The Developer Conference'>
						<img src='/img/portfolio/superviz/gallery/4.jpg' alt='Equipe preparada para o estande da SuperViz no The Developer Conference' />
					</a>
					<a data-fancybox='gallery' href='/img/portfolio/superviz/gallery/p5.jpg' data-caption='Pessoas engajando na ativação feita pela SuperViz'>
						<img src='/img/portfolio/superviz/gallery/5.jpg' alt='Pessoas engajando na ativação feita pela SuperViz' />
					</a>
					<a data-fancybox='gallery' href='/img/portfolio/superviz/gallery/p6.jpg' data-caption='Logo da SuperViz nos telões do palco principal do FRONTIN Sampa'>
						<img src='/img/portfolio/superviz/gallery/6.jpg' alt='Logo da SuperViz nos telões do palco principal do FRONTIN Sampa' />
					</a>
					<a data-fancybox='gallery' href='/img/portfolio/superviz/gallery/p7.jpg' data-caption='Logo da SuperViz no telão do palco principal do The Developer Conference'>
						<img src='/img/portfolio/superviz/gallery/7.jpg' alt='Logo da SuperViz no telão do palco principal do The Developer Conference' />
					</a>
					<a data-fancybox='gallery' href='/img/portfolio/superviz/gallery/p8.jpg' data-caption='Equipe preparada para receber as pessoas no estande da SuperViz no FRONTIN Sampa'>
						<img src='/img/portfolio/superviz/gallery/8.jpg' alt='Equipe preparada para receber as pessoas no estande da SuperViz no FRONTIN Sampa' />
					</a>
					<a data-fancybox='gallery' href='/img/portfolio/superviz/gallery/p9.jpg' data-caption='Equipe preparada para receber as pessoas no estande da SuperViz na CodeCon Summit'>
						<img src='/img/portfolio/superviz/gallery/9.jpg' alt='Equipe preparada para receber as pessoas no estande da SuperViz na CodeCon Summit' />
					</a>
					<a data-fancybox='gallery' href='/img/portfolio/superviz/gallery/p10.jpg' data-caption='Apresentando detalhes técnicos da SuperViz no estande do The Developer Conference'>
						<img src='/img/portfolio/superviz/gallery/10.jpg' alt='Apresentando detalhes técnicos da SuperViz no estande do The Developer Conference' />
					</a>
				</PhotoGallery>
			</div>

			<div className='container'>
				<Section>
					<h2>Palestras e Compartilhamento de Conhecimento</h2>

					<SectionContentWithImage image={'/img/portfolio/superviz/speaking.jpg'} imageAlt={'Sala de palestra da CodeCon Summit lotada'}>
						<p>Tão importante, se não mais, que patrocinar eventos é poder levar conteúdo para eles. Desta forma, por mais que o número de pessoas que atendam a palestra não seja tão expressivo quanto os que participam da experiência nos stands patrocinados, a qualidade do conteúdo e a profundidade das discussões técnicas geram um impacto muito mais significativo e duradouro.</p>
						<p>Como Developer Advocate, é importante que as palestras foquem no conteúdo técnico e educativo, em vez de serem comerciais, o que afastaria o público-alvo. Afinal, o papel principal não é vender o produto, mas sim compartilhar conhecimento. </p>
						<p>Segue abaixo as palestras feitas durante o segundo semestre de 2024 para a SuperViz:</p>
					</SectionContentWithImage>

					<br />

					<div className='palestras'>
						<VerticalSteper>
							<Step title='JS Builders Community'>
								<>
									<SuperVizEventsTalks date={'3 de Julho'} talkTitle={'Aprenda alguns Design Pattern em JavaScript'}
										id='e9527a91-9b18-4d39-8836-a40abf55e6c7' />
									<Card
										orientation='horizontal'
										onClick={() => window.location.href = 'https://www.youtube.com/watch?v=U54Aj1c9WDo&t=810s'}>
										<CardPreview>
											<img src='/img/portfolio/superviz/webcrumbs.jpg' alt='JS Builders by Webcrumbs' style={{ width: '150px' }} width={150} height={84} />
										</CardPreview>
										<CardHeader
											header={(<h5>JS Builder meetup #02 with Vitor Norton</h5>)}
											description={<small>Watch the talk on the webcrumbs Youtube Channel</small>} />

									</Card>
								</>
							</Step>
							<Step title='Campus Party'>
								<SuperVizEventsTalks date={'11 de Julho'} talkTitle={'O código por trás da colaboração em tempo real e o que são websockets'} onsite id='1154147c-8b0d-40a8-b881-2509dc806b3b' />
							</Step>
							<Step title='Tech in Rio'>
								<SuperVizEventsTalks date={'8 de Agosto'} talkTitle={'Workshop trabalhando com Realtime da SuperViz'} id='b2eff69d-6c72-476e-8c17-e08c52d97e78' />
							</Step>
							<Step title='GambiConf'>
								<SuperVizEventsTalks date={'2 de Novembro'} talkTitle={'Adicionando multiplayer em um jogo sem autorização do desenvolvedor'} id='126a7783-eaad-4156-a0a1-7e8da3171003' onsite />
							</Step>
							<Step title='CodeCon Summit'>
								<SuperVizEventsTalks date={'7 de Setembro'} talkTitle={'O código por trás da colaboração em tempo real e o que são websockets'} id='1154147c-8b0d-40a8-b881-2509dc806b3b' onsite />
							</Step>
						</VerticalSteper>
						<VerticalSteper>
							<Step title='FRONTIN Sampa'>
								<SuperVizEventsTalks date={'19 de Outubro'} talkTitle={'Motivos para distribuir via CDN ao invés npm modules'} id='c4fd2740-af96-4000-8b2d-e001b6cdc760' onsite />
							</Step>
							<Step title='FATEC'>
								<SuperVizEventsTalks date={'21 de Outubro'} talkTitle={'O código por trás da colaboração em tempo real e o que são websockets'} onsite id='1154147c-8b0d-40a8-b881-2509dc806b3b' />
							</Step>
							<Step title='Conf42.com'>
								<>
									<SuperVizEventsTalks date={'5 de Setembro'} talkTitle={'The Code Behind Every Real-Time Collaboration Tool'} id='14e4009b-7ca6-8073-a103-d5c329192c13' />
									<Card
										orientation='horizontal'
										onClick={() => window.location.href = 'https://www.youtube.com/watch?v=RUreD6HcOYk'}>
										<CardPreview>
											<img src='/img/portfolio/superviz/conf42.jpg' alt='Conf42.com' style={{ width: '150px' }} width={150} height={84} />
										</CardPreview>
										<CardHeader
											header={(<h5>The Code Behind Every Real-Time Collaboration Tool</h5>)}
											description={<small>Watch the talk on the Conf42 Platform Engineering 2024 Youtube Channel</small>} />
									</Card>
								</>
							</Step>
							<Step title='JS Nation US'>
								<>
									<SuperVizEventsTalks date={'21 de Novembro'} talkTitle={'Breaking the code behind realtime collaboration with websockets'} id='14e4009b-7ca6-8073-a103-d5c329192c13' />
									<Card
										orientation='horizontal'
										onClick={() => window.location.href = 'https://gitnation.com/contents/breaking-the-code-behind-realtime-collaboration-with-websockets'}>
										<CardPreview>
											<img src='/img/portfolio/superviz/jsconf.png' alt='JS Conf' style={{ width: '150px' }} width={150} height={84} />
										</CardPreview>
										<CardHeader
											header={(<h5>Breaking the code behind realtime collaboration with websockets</h5>)}
											description={<small>Watch the talk on the JS Nation platform</small>} />

									</Card>
								</>
							</Step>
						</VerticalSteper>
					</div>
				</Section>

				<Section className='superviz-activation'>
					<h2>Ativações e Interações Criativas</h2>
					<SectionContentWithImage
						imageSize='small' imageCaption
						image={'/img/portfolio/superviz/dashboard.jpg'}
						imageAlt={'Leaderboard com informações de quem estava online e como estava o status e pontuação de cada participante no nosso stand.'}>
						<p>
							Tudo o que preciso em um evento é <s>uma permissão para fazer bagunça</s> um espaço para poder estar lá oficialmente, tendo isso a criatividade é o limite!
						</p>
						<p>
							Com ativações criativas geramos mais conexões genuínas com potenciais clientes e maior lembrança da marca. Em eventos recentes, alcançamos alta taxa de lembrança espontânea ótima, um resultado notável para nossa primeira participação no mercado de trabalho em contraste com outras marcas já estabelecidas que estavam presentes.
						</p>
						<p>
							Para esta sequência de eventos, queríamos promover a <a href='https://docs.superviz.com/realtime' target='_blank' rel='noreferrer'>engine de sincronização de dados em tempo real</a>, fizemos no stand um dashboard que exibia um leaderboard com todas as pessoas que estavam na nossa ativação, no qual elas poderiam ficar interagindo durante todo o período do evento, podendo aproveitar as palestras enquanto juntava pontos na nossa ativação. O que também foi uma maneira de promover a cultura de não precisar estar em um local para fazer um trabalho (aka.: remote work ❤️).
						</p>
					</SectionContentWithImage>

					<div className='flex'>
						<video src='https://vtnphotoswebsite.blob.core.windows.net/others/superviz-game-codecon-video.mp4' controls></video>
						<div className='activation-paragraph'>
							<h3>O jogo mais viciante que eu fiz</h3>
							<SectionContentWithImage
								imageSize='small'
								image={'/img/portfolio/superviz/game-you.png'}
								imageAlt={'Leaderboard com informações de quem estava online e como estava o status e pontuação de cada participante no nosso stand.'}>
								<p>
									Dentro da ativação tinha vários itens como se inscrever para participar do nosso Hackathon, dar uma estrela no GitHub e se juntar ao nosso Discord. Mas o que mais viciou foi um jogo inspirado no Infinite Craft - <Link href='/2024/03/multiplayer-infinite-craft'>e na minha tentativa de deixa-lo multiplayer</Link> -, onde os participantes podiam combinar diferentes elementos para criar novos. O jogo começava com elementos básicos ("Fire", "Water", "Earth", "Wind", "Coffee", "JavaScript", "Developer") e uma IA gerava novos elementos baseados nas combinações dos jogadores, como "Fire" + "JavaScript" = "Firebase".
								</p>

							</SectionContentWithImage>
							<br />
							<p>
								Com um grande volume de participantes nos eventos, criamos uma competição onde descobrir novas combinações gerava pontos e notificações para todos. Os pontos acumulados aumentavam as chances de ganhar prêmios.
							</p>
							<p>
								Era possível acompanhar a criação de elementos interessantes como "Real-time communication", "Web sockets", "Collaboration environment", "Remote work" e alguns divertidos como "Intergalactic coffee" e o clássico “Saúde mental”!
							</p>

							<h3>O tecnequês por trás</h3>
							<p>A implementação utilizou a biblioteca <code>@superviz/realtime</code> com WebSockets e padrão Publisher/Subscriber, permitindo uma comunicação eficiente entre todas as instâncias do jogo e o dashboard. Para mais informações sobre como foi desenhado o projeto (tanto a ideia quanto tecnicamente), fiz um artigo e o código está aberto!</p>
							<Button as='a' size='medium' appearance='secondary' shape='square'
								href='https://dev.to/superviz/realtime-meets-ai-how-we-used-gaming-to-showcase-our-new-library-now-open-souce-3fgm' >
								Veja mais detalhes da implementação
							</Button>
							<Button as='a' size='medium' appearance='secondary' shape='square'
								href='https://github.com/vtnorton/sv-activation-app' >
								Ver código-fonte
							</Button>
						</div>
					</div>
				</Section>


				<Section image={imageBlurForHackathon} className='superviz-hackathon'>
					<h2>Hackathon</h2>
					<p>
						Pra fechar com chave de ouro, e trazer as pessoas que somente tinham visto a framework para uma experiência com ele, realizamos um hackathon com excelente premiação que incentivou as pessoas a ficarem atentas as nossas novidades e comunicações pelas redes sociais.
					</p>
					<p>
						O tema do Hackathon também foi beeemmmm direcionado com o que tínhamos acabado de fazer na nossa ativação: Realtime meets AI. Uma aplicação que utilizasse a plataforma de sincronização de dados da SuperViz junto com alguma integração com AI, seja Gemini, OpenAI, Claude ou LLama.
					</p>
					<p>
						O {'Super<Hackathon> 2.0'} foi 100% online pelo Discord, teve uma aderência de 353% em relação ao primeiro hackathon que fizemos anteriormente, justamente por toda a ativação feita durante o eventos mencionados.
					</p>
					<div>
						<Button as='a' size='medium' appearance='secondary' shape='square' href='https://dev.to/superviz/announcing-our-supervizs-hackathon-1gkg'>
							Anúncio do {'Super<Hackathon>'}
						</Button> <br /><br />
						<Button as='a' size='medium' appearance='secondary' shape='square' href='https://superviz.com/super-hackathon-celebrating-innovation-and-announcing-our-winner'>
							Resultado do {'Super<Hackathon>'}
						</Button><br /><br />
						<Button as='a' size='medium' appearance='secondary' shape='square' href='https://dev.to/superviz/superviz-hackathon-ai-meets-realtime-bci'>
							Anúncio do {'Super<Hackathon> 2.0'}
						</Button><br /><br />
						<Button as='a' size='medium' appearance='secondary' shape='square' href='https://superviz.com/announcing-the-winners-of-super-hackathon-2-0-celebrating-innovation-and-creativity'>
							Resultado do {'Super<Hackathon> 2.0'}
						</Button>
					</div>

				</Section>
			</div>

			<Footer />
		</article>
	)
}
