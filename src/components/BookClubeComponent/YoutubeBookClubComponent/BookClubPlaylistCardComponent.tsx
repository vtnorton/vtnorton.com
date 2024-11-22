import { Playlist } from '../../../interfaces/YouTube/Playlist'
import { PlaylistItem } from '../../../interfaces/YouTube/PlaylistItem'
import { BookClubVideoItemComponent } from './BookClubVideoItemComponent'

export const BookClubPlaylistCardComponent = (props: Playlist) => {
	return (
		<div className='video-card shadow-middle'>
			<img src={props.thumbnailUrl} alt='Capa da playlist' />
			<h4>{props.title}</h4>
			<small>Veja as gravações ⬇️</small>
			<div className='video-card-scroller'>
				{props.items.map((video: PlaylistItem, index: number) => {
					return <BookClubVideoItemComponent key={index} title={video.title} link={video.link} thumbnailUrl={video.thumbnailUrl} />
				})}
			</div>
		</div>
	)
}
