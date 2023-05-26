import { DiscordTile } from './Tiles/DiscordTile/DiscordTile'
import { InstagramTile } from './Tiles/InstagramTile/InstagramTile'
import { SuperProfTile } from './Tiles/SuperProfTile/SuperProfTile'
import { TilesComponentProps } from './TilesComponentProps'

// <MaillistTile />
export const TilesComponent = (props: TilesComponentProps) => {
	return (
		<section>
			<div>
				<InstagramTile photos={props.instagramPhotos} username='@vt_norton' />
				<SuperProfTile />
				<DiscordTile />
			</div>
		</section>
	)
}
