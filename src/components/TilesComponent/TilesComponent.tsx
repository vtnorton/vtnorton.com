import { Section } from '../SectionComponent'
import { DiscordTile } from './Tiles/DiscordTile/DiscordTile'

// <MaillistTile />
export const TilesComponent = () => {
	return (
		<Section removePaddingButton removePaddingTop full>
			<div>
				{/*<InstagramTile username='@vt_norton' />*/}
				{/* <SuperProfTile /> */}
				<DiscordTile />
			</div>
		</Section>
	)
}
