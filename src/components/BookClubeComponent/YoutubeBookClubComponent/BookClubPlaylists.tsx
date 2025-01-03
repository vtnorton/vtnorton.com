import { Spinner } from '@fluentui/react-components'
import { Playlist } from '../../../interfaces'
import { BookClubPlaylistCardComponent } from './BookClubPlaylistCardComponent'

export const BookClubPlaylists = ({ items }: { items: Playlist[] }) => {
	if (items.length !== 0) {
		return items.map((playlist: Playlist, index: number) =>
			<BookClubPlaylistCardComponent key={index} thumbnailUrl={playlist.thumbnailUrl} items={playlist.items} title={playlist.title} id={playlist.id} description={playlist.description} />)
	}

	return (
		<>
			<div className='space-long'></div>
			<Spinner size='medium' label='Carregando...' />
		</>
	)
}