import React from 'react'

import { Code20Regular } from '@fluentui/react-icons'
import { Section, SectionContentWithImage } from '../../components/Section'
import { Footer } from '../../sections/Footer/Footer'
import { PageHero } from '../../components/PageHero'
import { PhotoGallery } from '../../components/PhotoGallery'
import { Button } from '../../components/Button'

export default function OlaWolff() {
	// const router = useRouter()
	// const nextProject = getNextProductBasedOnCurrentPath(router.pathname)
	return (
		<article className='olawolff'>
			{/* <SeoProps
				title='olá wolff: contador online'
				description='Dentro da startup estive em posição privilegiada aonde consegui colocar a ideia de desburocratização da abertura de uma empresa em menos de 24 horas na prática. Veja como foi o processo de realizar isso e ainda sim garantir uma excelente experiência de usuário.'
				featureImage='/img/portfolio/olawolff/guia/p1.jpg' /> */}
			<PageHero
				title='olá wolff: contador online'
				description='De dentro da startup, fiquei no lugar certo para testar uma ideia simples e ambiciosa: desburocratizar a abertura de empresas em menos de 24 horas. Aqui está como transformei isso em prática — sem perder a experiência de usuário pelo caminho.'
				backgroundUrl='/img/portfolio/ola-wolff.jpg'>
				<>
					<Section>
						<SectionContentWithImage image={'/img/portfolio/olawolff/iphone.png'} imageAlt={''} side='right' sticky>
							<h2>Olá Wolff, diminuindo a burocracia com um chatbot</h2>
							<p>O mundo muda todo dia. Ideias nascem, tecnologias amadurecem e, quando as duas se encontram, coisas andam. Com o Olá Wolff, a proposta era direta: facilitar o que sempre foi difícil: a abertura de empresas.</p>
							<p>É um serviço baseado em inteligência artificial para acelerar o processo de constituição empresarial, tirar dúvidas de empreendedores, reduzir fricções burocráticas e conduzir a formalização.</p>
							<p>A função do Olá Wolff era recolher os dados necessários de forma rápida e precisa, processá-los e viabilizar a abertura quase instantânea para MEIs e, depois, para outros tipos de empresa.</p>
						</SectionContentWithImage>
					</Section>

					<Section>
						<h2 style={{ marginBottom: '1.5rem' }}>A marca e o seu guia</h2>
						<SectionContentWithImage image={'/img/portfolio/olawolff/logos.svg'} imageAlt={''} >
							<p>Começou como um símbolo de conversa. Evoluiu com uma tipografia mais suave e um degradê nas cores da bandeira nacional.</p>
							<p>A vírgula virou o ponto-chave. Queríamos a sensação de que uma conversa estava começando e a vírgula se tornou o próprio ícone do projeto.</p>
							<p>A marca foi registrada no INPI. Criamos um guia completo, com aplicações e regras de uso. Clique na imagem para expandir.</p>
						</SectionContentWithImage>
					</Section>
				</>
			</PageHero>

			<div className='container wrapper'>
				<PhotoGallery options={{ Carousel: { infinite: false } }}>
					<a data-fancybox='gallery' href='/img/portfolio/olawolff/guia/p1.jpg'>
						<img src='/img/portfolio/olawolff/guia/1.jpg' width='200' height='150' />
					</a>
					<a data-fancybox='gallery' href='/img/portfolio/olawolff/guia/p2.jpg'>
						<img src='/img/portfolio/olawolff/guia/2.jpg' width='200' height='150' />
					</a>
					<a data-fancybox='gallery' href='/img/portfolio/olawolff/guia/p3.jpg'>
						<img src='/img/portfolio/olawolff/guia/3.jpg' width='200' height='150' />
					</a>
					<a data-fancybox='gallery' href='/img/portfolio/olawolff/guia/p4.jpg'>
						<img src='/img/portfolio/olawolff/guia/4.jpg' width='200' height='150' />
					</a>
					<a data-fancybox='gallery' href='/img/portfolio/olawolff/guia/p5.jpg'>
						<img src='/img/portfolio/olawolff/guia/5.jpg' width='200' height='150' />
					</a>
					<a data-fancybox='gallery' href='/img/portfolio/olawolff/guia/p6.jpg'>
						<img src='/img/portfolio/olawolff/guia/6.jpg' width='200' height='150' />
					</a>
					<a data-fancybox='gallery' href='/img/portfolio/olawolff/guia/p7.jpg'>
						<img src='/img/portfolio/olawolff/guia/7.jpg' width='200' height='150' />
					</a>
					<a data-fancybox='gallery' href='/img/portfolio/olawolff/guia/p8.jpg'>
						<img src='/img/portfolio/olawolff/guia/8.jpg' width='200' height='150' />
					</a>
				</PhotoGallery>
			</div>

			<div className='container'>
				<Section className='sales'>
					<div className='left'>
						<img src='/img/portfolio/olawolff/cristian.png' />
						<img src='/img/portfolio/olawolff/nomes.svg' />
					</div>
					<div className='right'>
						<h2 style={{ marginBottom: '0' }}>Cristian Sales, o comunicador</h2>
						<p>
							Desde o início sabíamos: a interface homem–robô poderia não ser suficiente. Criamos o Cristian Sales para dar rosto e voz ao processo. Ele é o pseudônimo do Wolff, um personagem para conduzir a comunicação em redes sociais e e-mail marketing, tornando a troca mais humana, rápida e eficiente.{' '}
						</p>
						<p>
							O nome Olá Wolff nasceu do personagem de Ben Affleck em O Contador: Christian Wolff. Simplificamos para algo fácil de ler, simples de escrever e, de quebra, com um toque abrasileirado num sobrenome comum no Brasil que também significa “vendas” em inglês.
						</p>
						<p>Outros nomes apareceram durante a pesquisa, mas Cristian venceu. Se fosse hoje, talvez colocaria só como Cris, para manter o nome neutro em gênero.</p>
					</div>
				</Section>
			</div>

			<div className='container wrapper'>
				<PhotoGallery options={{ Carousel: { infinite: false } }}>
					<a data-fancybox='gallery' href='/img/portfolio/olawolff/v1.jpg' data-caption='Versão inicial do chat'>
						<img src='/img/portfolio/olawolff/v1.jpg' width='200' height='150' />
					</a>
					<a data-fancybox='gallery' href='/img/portfolio/olawolff/v2.jpg' data-caption='Versão final do chat'>
						<img src='/img/portfolio/olawolff/v2.jpg' width='200' height='150' />
					</a>
				</PhotoGallery>
			</div>

			<div className='container'>
				<Section>
					<h2>Usabilidade do chat</h2>
					<SectionContentWithImage image={'/img/portfolio/olawolff/mobile.jpg'} imageAlt={'Imagem real do produto em desenvolvimento em um visão mobile'} imageCaption>
						<p>
							O chat era, muito provavelmente, a parte mais importante de todo o projeto. Fizemos várias versões, refinamos com o uso e sempre com um objetivo: parecer natural. Queríamos que a pessoa sentisse que havia alguém do outro lado, sem exagero. Buscávamos uma experiência familiar para o nosso público, majoritariamente trabalhadores MEI, com diferentes níveis de intimidade com a internet.
						</p>
						<p>
							O acesso fácil para cada persona era indispensável. Também precisávamos transmitir confiança e segurança, com cuidado explícito à privacidade, já que pedíamos dados sensíveis. A validação de dados aconteceu dentro do próprio chat, pois era essencial garantir que as informações estivessem corretas antes de acionar o processo formal de abertura.
						</p>
						<p>O front-end foi feito em React e se conectava aos Serviços Cognitivos do Azure e à nossa API interna para complementar o diálogo. Lançamos o projeto como open source sob licença MIT.</p>

						<Button as='a' href='https://github.com/vtnorton/WolffChat' icon={<Code20Regular />} size='medium' shape='square'>source_code</Button>
					</SectionContentWithImage>
				</Section>

				<Section>
					<h2>Funções do chat</h2>
					<p>Conheça algumas das funções mais desafiadoras na construção de uma experiência consistente para as nossas personas.</p>

					<div className='chat-features'>
						<div className='chat-feature'>
							<img src='/img/portfolio/olawolff/usuario.jpg' />
							<h3>Proximidade com o usuário</h3>
							<p>Assim que a pessoa informava o nome, o chat exibia esse nome embaixo das mensagens enviadas. O avatar recebia as iniciais. A conversa ficava mais íntima, mais pessoal. Do jeito que mensageiros atuais fazem.</p>
							<p>Além disso, o horário aparecia junto de cada mensagem. Ajudava na auditoria e dava sensação de controle ao ver o tempo correndo ali, em cada resposta.</p>
						</div>
						<div className='chat-feature'>
							<img src='/img/portfolio/olawolff/digitando.jpg' />
							<h3>O Wolff está digitando...</h3>
							<p>Exibíamos um balão “Wolff está digitando...” para personificar o agente e criar empatia.</p>
							<p>
								O recurso inseria um atraso entre o momento em que a resposta era gerada e o momento em que aparecia na tela. Esse delay era calculado pelo tamanho da mensagem. Estudamos a velocidade de digitação de uma pessoa rápida e adotamos 6 caracteres por segundo como referência.
							</p>
						</div>
						<div className='chat-feature'>
							<img src='/img/portfolio/olawolff/status.jpg' />
							<h3>Status de mensagem</h3>
							<p>
								Queríamos transparência sobre o andamento de cada mensagem. Criamos três estágios: enviada, recebida e lida. Uma bolinha clara para enviada. Duas (uma verde e uma clara) para recebida pelo Wolff. Duas verdes para indicar leitura e processamento da resposta.
							</p>
							<p>Na prática, quando dizíamos que a mensagem havia sido lida, a resposta já estava no computador da pessoa, pronta para aparecer.</p>
						</div>
						<div className='chat-feature'>
							<img src='/img/portfolio/olawolff/termos.jpg' />
							<h3>Fazendo os termos mais acessíveis</h3>
							<p>A conversa precisava ser acessível. A desburocratização passava por termos contábeis, jurídicos e oficiais de abertura de empresa, justamente os que afastam.</p>
							<p>Contamos com uma UX Writer na formulação dos diálogos, e, quando necessário, apresentávamos informações adicionais em mensagens com um balão de apoio, sem quebrar o fluxo.</p>
						</div>
					</div>

				</Section>
			</div>

			<div className='container'>
				<img className='image-hero-wolff' src='/img/portfolio/olawolff/pages.png' />
				<Section className='backend'>
					<h2>Backend, backoffice &amp; pipelines</h2>

					<div className='backend-item'>
						<h3>Trabalho junto a Junta Comercial e orgãos públicos</h3>
						<p>
							O projeto nunca teve posição política, mas precisávamos dialogar com as cidades e apoiar a digitalização. Do mapeamento de ruas para o alvará digital até integrações com sistemas municipais para que, com o alvará emitido, a pessoa já tivesse acesso à emissão de NF-e.
						</p>
					</div>

					<div className='backend-item'>
						<h3>Backoffice</h3>
						<p>
							Ao escolher o Bot Framework, da Microsoft, perdíamos uma interface simples para edição de mensagens por quem não é desenvolvedor. Construímos um backoffice para isso e para centralizar os dados dos usuários com segurança.
						</p>
					</div>


					<div className='images'>
						<img src='/img/portfolio/olawolff/back-2.jpg' />
						<img src='/img/portfolio/olawolff/back-1.jpg' />
					</div>


					<div className='backend-item'>
						<h3>Migração de conteúdo</h3>
						<p>
							Com vários ambientes em paralelo e um fluxo específico para os diálogos, implementamos um mecanismo de migração. Assim, o conteúdo que estava em produção podia seguir para desenvolvimento, e vice-versa. No backoffice, era possível escolher o ambiente de edição.
						</p>
					</div>

					<div className='backend-item'>
						<h3>Pipelines de build e release</h3>
						<p>
							Para tudo funcionar, alguns projetos se integravam no momento da release: o chat em React, um framework CSS, um portal e uma API em .NET, um blog em WordPress e o backoffice. Cada um com desenvolvimento, homologação e produção.
						</p>
						<p>
							O que chamava mais atenção era a agilidade necessária. As solicitações mudavam no caminho para uma reunião com a prefeitura ou com um deputado, e as alterações seguiam junto, chegando a cada ambiente no tempo certo.
						</p>
					</div>
					{/* <NextProjectComponent name={nextProject.name} imageUrl={nextProject.imageUrl} link={nextProject.link} /> */}
				</Section>
			</div>

			<Footer />
		</article>
	)
}
