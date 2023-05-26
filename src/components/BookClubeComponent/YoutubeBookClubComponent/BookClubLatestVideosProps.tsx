import { Playlist } from '../../../interfaces/YouTube/Playlist'
import { BookClubPlaylistCardComponent } from './BookClubPlaylistCardComponent'
import { BookClubVideoItemComponentProps } from './BookClubVideoItemComponentProps'

export const BookClubLatestVideosProps = (props: BookClubVideoItemComponentProps) => {
	return (
		<div className='clube-item youtube'>
			<h3>📹 Últimas lives </h3>
			<div className='row'>
				{props.playlists.map((playlist: Playlist, index: number) => (
					<BookClubPlaylistCardComponent key={index} thumbnailUrl={playlist.thumbnailUrl} items={playlist.items} title={playlist.title} id={playlist.id} description={playlist.description} />
				))}
			</div>
		</div>
	)
}
