import React from 'react'
import { ContentSEO } from '../../database/seo'
import { Footer } from '../../sections/Footer/Footer'
import { PageHero } from '../../components/PageHero'
import { Section } from '../../components/Section'

export default function TermosMeta() {
	return (
		<>
			<ContentSEO title='Termo de uso e política de privacidade' description='Este termo de uso e política de privacidade se aplica ao aplicativo e conexões do Bot do Meta' featureImage='/img/pages/blog.jpg' />
			<PageHero backgroundUrl='/img/pages/blog.jpg' title='Termo de uso e política de privacidade' description='Este termo de uso e política de privacidade se aplica ao aplicativo e conexões do Bot do Meta'>
				<Section>
					<div className='text-60-percent-wrap'>
						<h2>Política de Privacidade:</h2>
						<p>
							A privacidade dos usuários é uma prioridade para mim. Esta política de privacidade explica como eu lido com as informações pessoais que podem ser coletadas durante o uso o meu bot utilizado na plataforma do Meta. É importante ressaltar que minha aplicação não
							armazena nenhuma informação e não solicita acesso a nenhum usuário. Ela é exclusivamente utilizada pelo administrador do servidor para gerenciar eventos e conectar com outros serviços usando as informações públicas disponíveis nos servidores da Meta.
						</p>

						<h2>Coleta de Informações:</h2>
						<p>
							Minha aplicação não coleta, armazena ou acessa qualquer informação pessoal dos usuários. Não exijo que os usuários forneçam qualquer tipo de informação pessoal para utilizar minha aplicação. Além disso, não utilizo cookies ou outras tecnologias de rastreamento
							para coletar informações dos usuários.
						</p>

						<h2>Uso de Informações:</h2>
						<p>
							Devido à natureza da minha aplicação, não utilizo nem compartilho informações pessoais dos usuários. A aplicação é usada para gerenciar eventos e conectar com outros serviços, mas isso é feito exclusivamente com base nas informações públicas disponíveis no
							servidor do Meta. Não realizo qualquer processamento adicional dessas informações.
						</p>

						<h2>Segurança:</h2>
						<p>
							A segurança dos dados é uma preocupação importante para mim, mesmo que minha aplicação não armazene ou acesse informações pessoais. Implementei medidas de segurança apropriadas para proteger qualquer dado transmitido ou processado através da minha aplicação. No
							entanto, é importante ressaltar que, como não armazeno informações pessoais, qualquer risco relacionado à segurança dos dados é reduzido significativamente.
						</p>

						<h2>Alterações na Política de Privacidade:</h2>
						<p>Posso atualizar esta política de privacidade de tempos em tempos, caso seja necessário. Quaisquer alterações significativas serão comunicadas aos usuários por meio de um aviso destacado na minha aplicação Meta.</p>

						<h2>Entre em contato:</h2>
						<p>
							Se você tiver alguma dúvida ou preocupação sobre esta política de privacidade ou meus termos de uso, entre em contato comigo <a href='mailto:vitor@vtnorton.com'>pelo e-mail</a>.
						</p>

						<p>Última atualização: 26 de maio de 2023</p>
					</div>
				</Section>
			</PageHero>

			<Footer />
		</>
	)
}
