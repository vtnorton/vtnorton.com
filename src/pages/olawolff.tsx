import { useRouter } from 'next/router'
import React from 'react'

import { FooterComponent, NextProjectComponent, PageHeroComponent, ProductShelfComponent } from '../components'
import { PhotoGallery } from '../components/PhotoGalleryComponent/PhotoGalleryComponent'
import { SeoProps } from '../database/SEOProps'
import { Button } from '@fluentui/react-components'
import { Code20Regular } from '@fluentui/react-icons'
import { Section, SectionContentWithImage } from '../components/SectionComponent'
import { getNextProductBasedOnCurrentPath } from '../database/ProductShelfItems'

export default function OlaWolff() {
	const router = useRouter()
	const nextProject = getNextProductBasedOnCurrentPath(router.pathname)
	return (
		<>
			<SeoProps
				title='olá wolff: contador online'
				description='Dentro da startup estive em posição privilegiada aonde consegui colocar a ideia de desburocratização da abertura de uma empresa em menos de 24 horas na prática. Veja como foi o processo de realizar isso e ainda sim garantir uma excelente experiência de usuário.'
				featureImage='/img/projects/olawolff/guia/p1.jpg' />
			<PageHeroComponent
				title='olá wolff: contador online'
				description='Dentro da startup estive em posição privilegiada aonde consegui colocar a ideia de desburocratização da abertura de uma empresa em menos de 24 horas na prática. Veja como foi o processo de realizar isso e ainda sim garantir uma excelente experiência de usuário.'
				backgroundClass='bg-wolf'>
				<Section>
					<SectionContentWithImage image={'/img/projects/olawolff/iphone.png'} imageAlt={''} side='right' >
						<h2>Olá Wolff, diminuindo a burocracia com um chatbot</h2>
						<p>O Mundo está em constante mudança, todos os dias nascem novas ideias e novas tecnologias que nos auxiliam em nosso dia-a-dia, com o Olá Wolff não era diferente, ele veio para facilitar muita coisa, principalmente o processo de abertura de empresas.</p>
						<p>É um serviço, baseado em inteligência artificial, para acelar o processo de abertura de empresas, sanar as dúvidas dos empreendedores, agilizar aspectos burocráticos e realizar a constituição empresarial. </p>
						<p>A função do Olá Wolff era recolher todos os dados necessários dos empreendedores para serem processados de forma rápida e precisa para a abertura da empresa possibilitando uma formalização quase que instantânea para MEIs e futuramente outros tipos de empresa.</p>
					</SectionContentWithImage>
				</Section>
			</PageHeroComponent>
			<div className='container'>
				<Section>
					<h2>A marca e o seu guia</h2>
					<SectionContentWithImage image={'/img/projects/olawolff/logos.png'} imageAlt={''} gap={10} >
						<p>Criada originalmente para representar um chat, a marca teve uma excelente evolução colocando uma fonte mais suave e utilizando um degradê com as cores da bandeira nasciona.</p>
						<p>O ponto chave foi a vírgula. Queriamos criar a impressão de uma conversa sendo inciada e acabamos utilizando a vírgula com o ícone de todo o projeto.</p>
						<p>A marca passou pelo processo de registro no INPI, foi feita também um guia da marca completo conforme mostrado abaixo. Clique na imagem para expandir.</p>
					</SectionContentWithImage>
				</Section>
			</div>

			<div className='container wrapper'>
				<PhotoGallery options={{ Carousel: { infinite: false } }}>
					<a data-fancybox='gallery' href='/img/projects/olawolff/guia/p1.jpg'>
						<img src='/img/projects/olawolff/guia/1.jpg' width='200' height='150' />
					</a>
					<a data-fancybox='gallery' href='/img/projects/olawolff/guia/p2.jpg'>
						<img src='/img/projects/olawolff/guia/2.jpg' width='200' height='150' />
					</a>
					<a data-fancybox='gallery' href='/img/projects/olawolff/guia/p3.jpg'>
						<img src='/img/projects/olawolff/guia/3.jpg' width='200' height='150' />
					</a>
					<a data-fancybox='gallery' href='/img/projects/olawolff/guia/p4.jpg'>
						<img src='/img/projects/olawolff/guia/4.jpg' width='200' height='150' />
					</a>
					<a data-fancybox='gallery' href='/img/projects/olawolff/guia/p5.jpg'>
						<img src='/img/projects/olawolff/guia/5.jpg' width='200' height='150' />
					</a>
					<a data-fancybox='gallery' href='/img/projects/olawolff/guia/p6.jpg'>
						<img src='/img/projects/olawolff/guia/6.jpg' width='200' height='150' />
					</a>
					<a data-fancybox='gallery' href='/img/projects/olawolff/guia/p7.jpg'>
						<img src='/img/projects/olawolff/guia/7.jpg' width='200' height='150' />
					</a>
					<a data-fancybox='gallery' href='/img/projects/olawolff/guia/p8.jpg'>
						<img src='/img/projects/olawolff/guia/8.jpg' width='200' height='150' />
					</a>
				</PhotoGallery>
			</div>

			<div className='container'>
				<Section>
					<div className='olawolff-two-image-paragraph'>
						<div className='images'>
							<img src='/img/projects/olawolff/cristian.png' />
							<img src='/img/projects/olawolff/nomes.png' />
						</div>
						<div className='paragraph'>
							<h2>Cristian Sales, o comunicador</h2>
							<p>
								Em todos os momentos durante o projeto sabíamos que a interface homem-robô poderia não ser a mais eficiênte, então resolvemos criar o Cristian Sales, que iria dar uma visão mais humana para todo o processo. Ele é o pseudônimo do Wolff, um personagem para fazer
								toda a comunicação nas redes sociais e e-mail marketing que iria permitir uma comunicação rápida e eficiente com o mundo.{' '}
							</p>
							<p>
								Já que o nome Olá Wolff veio com base no personagem de Ben Affleck do filme O Contador: Christian Wolff. Simplificamos o nome para ser fácil de ler e simples para escrever, além de adicionar um quê de abrasileirada com um dos sobrenomes mais comuns no Brasil, que
								também representa a palavra vendas em inglês.
							</p>
							<p>Alguns outros nomes e sobrenomes estiveram na nossa pesquisa durante o desenvolvimento do personagem, porém esse foi o ganhador. Acredito que se fosse hoje estariamos com o nome Cris ao invés de Cristian para ser um nome sem gênero.</p>
						</div>
					</div>
				</Section>
			</div>

			<div className='container wrapper'>
				<PhotoGallery options={{ Carousel: { infinite: false } }}>
					<a data-fancybox='gallery' href='/img/projects/olawolff/v1.jpg'>
						<img src='/img/projects/olawolff/v1.jpg' width='200' height='150' />
					</a>
					<a data-fancybox='gallery' href='/img/projects/olawolff/v2.jpg'>
						<img src='/img/projects/olawolff/v2.jpg' width='200' height='150' />
					</a>
				</PhotoGallery>
			</div>

			<div className='container'>
				<Section>
					<h2>Usabilidade do chat</h2>
					<SectionContentWithImage image={'/img/projects/olawolff/mobile.jpg'} imageAlt={'Imagem real do produto em desenvolvimento em um visão mobile'} imageCaption gap={10}>
						<p>
							O chat foi, provavelmente, a parte mais importante de todo o projeto. Foram várias versões desenvolvidas e varias melhoras com o tempo. A importância se deu pois queríamos passar a impressão de que havia realmente alguem respondendo as perguntas, sem parecer
							forçado. Queriamos ter uma experiência já conhecida pelos nosso público alvo, trabalhadores MEI que poderia ou ser familiarizado com a mídia, ou ser novo na internet.{' '}
						</p>
						<p>
							O fácil acesso para cada persona era impresindivel. Outro detalhe é que precisávamos passar uma imagem de confiabilidade e segurança, além de todo uma questão de privacidade de dados, visto que estavamos pendindo dados muito sensíveis. A validação dos dados era
							outro quesito que foi trago dentro do chat - pois precisávamos garantir que os dados informados estavam certos para ir atrás do processo formal de abertura de empresa após a finalização do fluxo de abertura.
						</p>
						<p>O front-end do chat foi desenvolvido com React e comunicava com os serviços cognitivos do Azure e nossa API interna para outras informações além do diálogo. Lançamos o projeto como open-source em licença MIT. </p>

						<Button as='a' href='https://github.com/vtnorton/WolffChat' icon={<Code20Regular />} size='large' shape='square'>source_code;</Button>
					</SectionContentWithImage>
				</Section>

				<Section>
					<div className='text-60-percent-wrap'>
						<h2>Funções do chat</h2>
						<p>Conheça algumas das funções mais desafiadores para criar uma excelente experiência de usuário dentro do chat para nossas personas.</p>
					</div>

					<div className='space-long'></div>
					<div className='flex' style={{ gap: '5rem' }}>
						<div>
							<img className='center img-helper' src='/img/projects/olawolff/usuario.jpg' />
							<div className='space-low'></div>
							<h4>Proxímidade com o usuário</h4>
							<p>Ao informar o nome, o chat apresentava o nome do usuário embaixo de todas as mensagens enviadas por ele, assim como o avatar recebia as iniciais do nome para deixar mais íntimo e pessoal a conversa. Similar ao que mensageiros atuais já fazem.</p>
							<p>E em adição a isso, temos a hora sendo apresentada junto com a mensagem, para auxiliar não só no processo de auditoria, mas para que o usuário tenha a sensação de controle vendo o tempo gasto nas mensagens.</p>
						</div>
						<div>
							<img className='center img-helper' src='/img/projects/olawolff/digitando.jpg' />
							<div className='space-low'></div>
							<h4>O Wolff está digitando...</h4>
							<p>Era apresentado para o usuário um balão dizendo que o Wolff está digitando para personificar o Wolff criando ainda mais empatia. </p>
							<p>
								Essa função criava um delay entre o momento em que o Wolff responde ao momento em que a resposta realmente aparece na tela. Esse delay é calculado pela quantidade de caracteres que há na mensagem. Fizemos um estudo para entender a velocidade de digitação de uma
								pessoa rápida: neste caso 6 caracteres por segundo.
							</p>
						</div>
						<div>
							<img className='center img-helper' src='/img/projects/olawolff/status.jpg' />
							<div className='space-low'></div>
							<h4>Status de mensagem</h4>
							<p>
								Com o status de mensagem queriamos informar para o usuário como está o processo dela. Tinhamos três estágios de status: enviada, recebida e lida. Uma bolinha clara para enviado, duas bolinhas (uma verde e uma clara) para recebida pelo Wolff e duas verdes para
								determinar que a mensagem foi lida e já está processando a resposta.
							</p>
							<p>No fundo, ao dizer a mensagem foi lida, a resposta já estava no computador do usuário esperando para ser apresentada.</p>
						</div>
					</div>
					<div className='space-long'></div>

					<div className='text-60-percent-wrap'>
						<h4>Fazendo os termos mais acessíveis</h4>
						<p>A maneira como o Wolff conversava precisava ser acessível, muito porque a maneira de de desburocratizar todo o processo vinha da complicação dos termos contáveis, jurídicos e oficiais de um processo de abertura de empresa.</p>
						<p>Tinhamos uma UX Writer para ajudar na formulação dos diálogo, mas alguns vezes, precisávamos apresentar um pouco mais de informações, por isso alguns mensagens continham um balão com elas.</p>
						<img src='/img/projects/olawolff/termos.jpg' className='img-helper' />
					</div>
				</Section>
			</div>

			<div className='container text-center'>
				<img className='img-helper' src='/img/projects/olawolff/pages.png' />
			</div>

			<div className='container'>
				<Section removePaddingButton>
					<h2>Backend, backoffice &amp; pipelines</h2>
					<SectionContentWithImage image={'/img/projects/olawolff/back-2.jpg'} imageAlt={''} gap={10} >
						<h4>Trabalho junto a Junta Comercial e orgãos públicos</h4>
						<p>
							O projeto nunca teve posições políticas, mas precisavamos estar conversando com as cidades e auxiliando no processo de digitalização, desde o mapeamento das ruas da cidade para alvará de funcionamento digital, até integrações de sistemas da prefeitura, para uma
							vez com alvará, já receber o acesso para emissão de NF-e.{' '}
						</p>
						<h4>Backoffice</h4>
						<p>
							Um ponto importante foi que ao escolher o Bot Framework, da Microsoft, ao invés de outros concorrentes, nós não tinhamos uma interface fácil para edição das mensagens por aqueles que não são desenvolvedores. A construção de um backoffice que o permitia era
							essencial. Nele também salvámos todos os dados de usuários.
						</p>
					</SectionContentWithImage>
					<div className='space-medium'></div>
					<SectionContentWithImage image={'/img/projects/olawolff/back-1.jpg'} imageAlt={''} gap={10} >
						<h4>Migração de conteúdo</h4>
						<p>
							Com diversos ambientes sendo desenvolvidos ao mesmo tempo, e um fluxo de trabalho diferente por parte dos diálogos, um mecanimos de migração de conteúdo foi implementado, assim, os diálogos que estavam em produção também poderiam chegar em desenvolvimento, e
							vice-versa. O sistema de backoffice também permitia escolher qual ambiente estaria editando.
						</p>
						<h4>Pipelines de build e release</h4>
						<p>
							Para que tudo funcionasse perfeitamente, tinhamos alguns projetos que se intregavam na hora de uma release: um chat em React, um framework CSS, um portal e uma API em dotnet, um blog WordPress e o backoffice. Todos com ambientes de desenvolvimento, homologação e
							produção.
						</p>
						<p>O que mais chama atenção foi a necessidade ágil do projeto, o que, juntando tudo, permitia que em alterações solicitadas e ajustes fossem implementados nos diversos ambientes a caminho de reuniões com a prefeitura e/ou deputados.</p>
					</SectionContentWithImage>
					<div className='space-long'></div>
					<NextProjectComponent name={nextProject.name} imageUrl={nextProject.imageUrl} link={nextProject.link} />
				</Section>
			</div>
			<ProductShelfComponent />

			<FooterComponent />
		</>
	)
}
