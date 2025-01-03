import { Button } from '@fluentui/react-components'
import { Live24Regular } from '@fluentui/react-icons'
import { Section } from '../SectionComponent'

export const TwitchComponent = () => {
	const twitchParent = process.env.host
	const twitchHost = `https://player.twitch.tv/?channel=vt_norton&parent=${twitchParent}`
	return (
		<Section className='twitch' full removePaddingTop removePaddingButton>
			<div className='twitch-container'>
				<div className='video-container'>
					<iframe title='Twitch vtnorton' src={twitchHost} allowFullScreen scrolling='no'></iframe>
				</div>
				<div className='twitch-content'>
					<h2>👀 siga-me na twitch</h2>
					<p>No canal da twitch eu vivo passando dicas de programação enquanto eu faço livecodings e usabilidade do Windows, além é claro de jogar vem ou outra! Siga-me por lá, não perca as novidades e fique por dentro do que tem de mais atual no campo da tecnologia.</p>
					<Button as='a' href='https://twitch.tv/vt_norton/' icon={<Live24Regular />} size='large' appearance='primary' shape='square'>watch();</Button>
				</div>
			</div>
		</Section>
	)
}
