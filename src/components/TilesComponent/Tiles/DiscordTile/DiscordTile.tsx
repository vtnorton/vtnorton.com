import { Button } from '@fluentui/react-components'
import { ChevronRight20Regular } from '@fluentui/react-icons'

export const DiscordTile = () => {
	return (
		<div className='link-item discord escapte-padding'>
			<div className='tile-title'>
				<img src='/img/icons/discord.png' alt='Ícone do Discord' />
				<h2>Discord</h2>
			</div>
			<div className='tile-content'>
				<p>Dentro do server do Discord temos o clube do livro "Bora Ler", beta de testers do Formula/Athena/Heartthrob, mentoiras, lives outros rolês. Chega mais e bora bater um papo!</p>
				<Button as='a' href='https://discord.gg/hY3pTjMxmG' icon={<ChevronRight20Regular />} size='large' appearance='outline' shape='square'>join;</Button>
			</div>
		</div>
	)
}
