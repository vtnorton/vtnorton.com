import { Section } from '../SectionComponent'
import { DiscordTile } from './Tiles/DiscordTile/DiscordTile'

// <MaillistTile />
export const TilesComponent = () => {
	return (
		<Section removePaddingButton removePaddingTop full>
			<div>
				{/* <SuperProfTile /> */}
				<DiscordTile />
			</div>
		</Section>
	)
}
