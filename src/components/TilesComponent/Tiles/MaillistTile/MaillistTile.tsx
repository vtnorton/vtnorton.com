import { Button, FluentProvider, Input, webLightTheme } from '@fluentui/react-components'
import { SignatureRegular } from '@fluentui/react-icons'

export const MaillistTile = () => {
	return (
		<div className='link-item maillist'>
			<div className='tile-title'>
				<img src='/img/icons/list.png' alt='Sinal de paz e amor feito com a mãeo' />
				<h2>Entre na minha newsletter</h2>
			</div>
			<div className='tile-content'>
				<p>Na news eu compartilho quando vai rolar as próximas lives do clube do livro "Bora ler", um resumo das postagens aqui do blog, atualições dos meus apps e projetos e muito mais.</p>
				<FluentProvider theme={webLightTheme}>
					<Input placeholder='e-mail' type='email' />
					<Button appearance='primary' icon={<SignatureRegular />}>
						cadastrar();
					</Button>
				</FluentProvider>
			</div>
		</div>
	)
}
