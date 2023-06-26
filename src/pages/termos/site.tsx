import React from 'react'

import { FooterComponent, PageHeroComponent } from '../../components'
import { SeoProps } from '../../database/SEOProps'

export default function TermosSite() {
	return (
		<>
			<SeoProps title='Termo de uso e política de privacidade' description='Este termo de uso e política de privacidade se aplica ao site vtnorton.com' featureImage='/img/pages/blog.jpg' />
			<PageHeroComponent backgroundUrl='/img/pages/blog.jpg' title='Termo de uso e política de privacidade' description='Este termo de uso e política de privacidade se aplica ao site vtnorton.com'>
				<section>
					<div className='row showcase'>
						<div className='col-lg-8'>
							<h1>Política de Privacidade e Termos de Uso do site vtnorton.com</h1>

							<p>
								Agradecemos por utilizar o site vtnorton.com. A sua privacidade é importante para nós e nos comprometemos a proteger as informações pessoais que você possa fornecer durante a utilização do nosso site. Esta Política de Privacidade e Termos de Uso descreve como
								coletamos, usamos, armazenamos e protegemos suas informações pessoais. Ao utilizar o site vtnorton.com, você concorda com os termos descritos abaixo.
							</p>

							<h2>1. Conteúdo do site</h2>
							<p>
								O conteúdo presente no site vtnorton.com está licenciado sob a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 (CC BY-NC-SA 4.0) International. Isso significa que você é livre para compartilhar e adaptar o conteúdo, desde que seja para fins não
								comerciais, atribuindo os devidos créditos e aplicando a mesma licença para qualquer trabalho derivado.
							</p>

							<h2>2. Anúncios</h2>
							<p>O site vtnorton.com não exibe anúncios de terceiros em suas páginas.</p>

							<h2>3. Cookies</h2>
							<p>Não utilizamos ferramentas de manuseio de cookies para rastrear informações pessoais dos usuários em nosso site.</p>

							<h2>4. Coleta de informações</h2>
							<p>
								Exceto pelo endereço de e-mail, não coletamos nenhuma outra informação pessoal dos usuários. O endereço de e-mail é coletado apenas em determinados pontos para fins de e-mail marketing. Ressaltamos que não compartilhamos seu endereço de e-mail com terceiros e não
								enviamos spam.
							</p>

							<h2>5. Google Analytics</h2>
							<p>
								Utilizamos o Google Analytics para analisar a quantidade de acessos ao site. Essas informações nos ajudam a entender melhor o desempenho do site e melhorar a experiência do usuário. O Google Analytics pode coletar informações anônimas sobre sua visita, como o seu
								endereço IP, páginas visitadas e o tempo gasto em cada página. Essas informações são usadas apenas para fins estatísticos e de análise, e não são vinculadas a nenhuma informação pessoal identificável.
							</p>

							<h2>6. Dúvidas e sugestões</h2>
							<p>
								Encorajamos os usuários a enviar dúvidas, sugestões ou outros tipos de feedback por meio das issues do <a href='https://github.com/vtnorton/vtnorton.com'>Github do site</a>. Essa é a melhor maneira de nos comunicarmos e respondermos às suas preocupações de forma
								eficiente.
							</p>

							<p>Lembramos que esta Política de Privacidade e Termos de Uso se aplica apenas ao site vtnorton.com. Não nos responsabilizamos por quaisquer práticas de privacidade de sites de terceiros que possam estar vinculados ao nosso site.</p>

							<p>
								Podemos atualizar esta Política de Privacidade e Termos de Uso periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre quaisquer alterações. Ao continuar a utilizar o site vtnorton.com após quaisquer modificações nesta
								política, você estará concordando com os termos atualizados.
							</p>

							<p>Caso tenha alguma dúvida adicional ou precise de mais informações, entre em contato conosco através do formulário de contato disponível no site vtnorton.com.</p>

							<p>Última atualização: 26 de junho de 2023</p>
						</div>
					</div>
				</section>
			</PageHeroComponent>

			<FooterComponent />
		</>
	)
}
