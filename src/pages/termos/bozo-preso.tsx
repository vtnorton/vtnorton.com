import React from 'react'
import { ContentSEO } from '../../database/seo'
import { Footer } from '../../sections/Footer/Footer'
import { PageHero } from '../../components/PageHero'

export default function TermosBozoPreso() {
	return (
		<>
			<ContentSEO title='Termo de uso e política de privacidade' description='Este termo de uso e política de privacidade se aplica ao aplicativo Bozo foi preso?' featureImage='/img/pages/blog.jpg' />
			<PageHero backgroundUrl='/img/pages/blog.jpg' title='Termo de uso e política de privacidade' description='Este termo de uso e política de privacidade se aplica ao aplicativo Bozo foi preso?'>
				<section className='section'>
					<div className='showcase'>
						<p>
							O Bozo foi preso? é um aplicativo independente, feito por uma pessoa só, que acompanha notícias públicas e avisa quando algo acontece. Ele não pede cadastro, não pede login e não coleta seu nome, seu e-mail ou sua localização. Os parágrafos abaixo explicam o
							pouco que é coletado e por quê.
						</p>
						<h2>Notificações</h2>
						<p>
							Para conseguir te avisar, o aplicativo registra o aparelho no Firebase Cloud Messaging, do Google, e recebe um identificador de envio. Esse identificador aponta para o aparelho, não para você: não vem acompanhado de nome, e-mail ou telefone. Todos os aparelhos
							registrados recebem exatamente os mesmos avisos, não existe segmentação por pessoa. Desativar as notificações do aplicativo nas configurações do sistema interrompe o envio.
						</p>
						<h2>Estatísticas de uso</h2>
						<p>
							O aplicativo usa o Firebase Analytics, do Google, para registrar quais telas foram abertas, junto das informações padrão que esse serviço coleta: modelo do aparelho, versão do sistema, versão do aplicativo e país aproximado, deduzido do endereço de IP. Isso serve
							para eu entender o que as pessoas usam. Nada disso identifica você individualmente, e nada é vendido ou compartilhado para publicidade.
						</p>
						<h2>Compras</h2>
						<p>
							Se você comprar algo dentro do aplicativo, quem processa o pagamento é a Google Play, com a administração das compras feita pela RevenueCat. Eu não recebo nem guardo número de cartão, endereço ou dados bancários — chega até mim apenas a confirmação de que a
							compra aconteceu.
						</p>
						<h2>O que fica só no seu aparelho</h2>
						<p>Preferências como &quot;já vi a introdução&quot; e os itens que você desbloqueou ficam gravados apenas no armazenamento do próprio aparelho, e não são enviados para lugar nenhum. Desinstalar o aplicativo apaga tudo isso.</p>
						<h2>Não existe servidor meu</h2>
						<p>
							Desde a versão 1.4.0, o conteúdo do aplicativo — a data da prisão, o relatório e o histórico de notícias — vem embutido nele. O aplicativo não conversa com nenhum servidor meu e, portanto, não me envia nada. As únicas conexões que ele faz são com os serviços do
							Google citados acima.
						</p>
						<h2>Conteúdo e isenção</h2>
						<p>
							As notícias e os relatórios exibidos vêm de veículos de imprensa públicos, citados na própria tela. Este aplicativo não representa nenhuma entidade governamental, não tem afiliação com órgãos oficiais ou jurídicos e não constitui fonte oficial. Para informações
							oficiais, consulte sempre os canais competentes.
						</p>
						<h2>Links</h2>
						<p>Todos os links abrem no navegador padrão do seu aparelho, fora do aplicativo. O que acontece de lá em diante segue a política de quem estiver do outro lado.</p>
						<h2>Alterações</h2>
						<p>Posso atualizar este texto conforme o aplicativo mudar. A data no fim da página indica a última revisão.</p>
						<h2>Entre em contato</h2>
						<p>
							Para dúvidas sobre estes termos, ou para pedir a remoção de qualquer dado, <a href='mailto:vitor@vtnorton.com'>me escreva por e-mail</a>.
						</p>

						<p>Última atualização: 23 de julho de 2026</p>
					</div>
				</section>
			</PageHero>

			<Footer />
		</>
	)
}
