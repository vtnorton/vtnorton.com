import { DiscordTile } from './Tiles/DiscordTile/DiscordTile'
import { InstagramTile } from './Tiles/InstagramTile/InstagramTile'

// <MaillistTile />
export const TilesComponent = () => {
	return (
		<section>
			<div>
				<InstagramTile username='@vt_norton' />
				{/* <SuperProfTile /> */}
				<DiscordTile />
			</div>
		</section>
	)
}
