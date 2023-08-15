import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const DiscordTile = () => {
	return (
		<div className='link-item discord'>
			<div className='tile-title'>
				<img src='/img/icons/discord.png' alt='Ícone do Discord' />
				<h2>Discord</h2>
			</div>
			<div className='tile-content'>
				<p>Dentro do server do Discord temos o clube do livro "Bora Ler", beta de testers do Formula/Athena/Heartthrob, mentoiras, lives outros rolês. Chega mais e bora bater um papo!</p>
				<a target='_blank' className='btn btn-link' href='https://discord.gg/hY3pTjMxmG'>
					<FontAwesomeIcon icon={faChevronRight} />
					entrar();
				</a>
			</div>
		</div>
	)
}
