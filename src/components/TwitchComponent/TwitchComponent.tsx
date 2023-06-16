import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const TwitchComponent = () => {
	const twitchParent = process.env.host
	const twitchHost = `https://player.twitch.tv/?channel=vt_norton&parent=${twitchParent}`
	return (
		<section>
			<div className='showcase twitch'>
				<div className='twitch-container'>
					<div className='video-container'>
						<iframe title='Twitch vtnorton' src={twitchHost} allowFullScreen scrolling='no'></iframe>
					</div>
					<div className='twitch-content'>
						<h2>👀 siga-me na twitch</h2>
						<p>No canal da twitch eu vivo passando dicas de programação enquanto eu faço livecodings e usabilidade do Windows, além é claro de jogar vem ou outra! Siga-me por lá, não perca as novidades e fique por dentro do que tem de mais atual no campo da tecnologia.</p>
						<a rel='noreferrer' href='https://twitch.tv/vt_norton/' className='btn btn-danger'>
							<FontAwesomeIcon icon={faChevronRight} />
							inscreva_se;
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
