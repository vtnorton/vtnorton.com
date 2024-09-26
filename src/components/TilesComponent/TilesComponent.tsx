import { DiscordTile } from './Tiles/DiscordTile/DiscordTile'

// <MaillistTile />
export const TilesComponent = () => {
	return (
		<section className='section'>
			<div>
				{/*<InstagramTile username='@vt_norton' />*/}
				{/* <SuperProfTile /> */}
				<DiscordTile />
			</div>
		</section>
	)
}
