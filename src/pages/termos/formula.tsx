import React from 'react'
import { ContentSEO } from '../../database/seo'
import { Footer } from '../../sections/Footer/Footer'
import { PageHero } from '../../components/PageHero'

export default function TermosFormula() {
	return (
		<>
			<ContentSEO title='Termo de uso e política de privacidade' description='Este termo de uso e política de privacidade se aplica ao aplicativo Formula - Code Editor' featureImage='/img/pages/blog.jpg' />
			<PageHero backgroundUrl='/img/pages/blog.jpg' title='Termo de uso e política de privacidade' description='Este termo de uso e política de privacidade se aplica ao aplicativo Formula - Code Editor'>
				<section className='section'>
					<div className='showcase'>
						<p>
							Formula – Universal Code Editor repeita totalmente sua privacidade. Nós coletamos informações padrões da industria (como, o sistema operacional que você está utilizando) para permitir que nós entreguemos o melhor produto possível. Os próximos parágrafos explicam
							melhor que tipo de informação nós usamos e o que fazemos com elas.
						</p>
						<h2>Windows Dev Center</h2>
						<p>Todas as vezes que você abre a aplicação, ela avisa ao Dev Center – de forma anonima – que você abriou a aplicação neste dia, neste país com esta versão, e só para estatísticas.</p>
						<h2>Não coletamos informações pessoais</h2>
						<p>Exceto pelas informações padrões, acima, o aplicativo não coleta ou reporta nenhuma informação pessoal para Vítor Norton ou terceirizados.</p>
						<p>
							Quando é mandado um feedback (através do serviço construído no aplicativo) você concorda em enviar o seu e-mail, nome, para que nós possamos responder para você e para que possamos colocar você na nossa lista de e-mail (sem spam). Esta informação não é compartilhada
							com ninguém, e para a lista de e-mail só utlizamos o seu e-mail, não o seu nome.
						</p>
						<h2>Links de Web Site</h2>
						<p>Todas as páginas da web linkadas no aplicativo abrem no navegador padrão do seu sistema, externamente do aplicativo.</p>
					</div>
				</section>
			</PageHero>

			<Footer />
		</>
	)
}
