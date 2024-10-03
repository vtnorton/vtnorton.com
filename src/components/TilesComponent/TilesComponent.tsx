import { DiscordTile } from './Tiles/DiscordTile/DiscordTile'
import { SuperProfTile } from './Tiles/SuperProfTile/SuperProfTile'

// <MaillistTile />
export const TilesComponent = () => {
	return (
		<section className='section'>
			<div>
				{/*<InstagramTile username='@vt_norton' />*/}
				<SuperProfTile />
				<DiscordTile />
			</div>
		</section>
	)
}
