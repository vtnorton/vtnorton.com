import { FluentProvider, Spinner, webLightTheme } from '@fluentui/react-components'
import axios from 'axios'
import { useEffect, useState } from 'react'

import { Playlist } from '../../../interfaces/YouTube/Playlist'
import { BookClubPlaylistCardComponent } from './BookClubPlaylistCardComponent'

export const BookClubLatestVideos = () => {
	const [items, setItems] = useState<Playlist[]>([])

	useEffect(() => {
		if (items.length === 0) {
			axios
				.get('/api/playlist')
				.then((response) => {
					setItems(response.data)
				})
				.catch((error) => {
					console.error('Erro ao obter os dados da API:', error)
				})
		}
	}, [])

	const renderPlaylists = () => {
		if (items.length !== 0) return items.map((playlist: Playlist, index: number) => <BookClubPlaylistCardComponent key={index} thumbnailUrl={playlist.thumbnailUrl} items={playlist.items} title={playlist.title} id={playlist.id} description={playlist.description} />)

		return (
			<FluentProvider theme={webLightTheme}>
				<div className='space-long'></div>
				<Spinner size='medium' label='Carregando...' />
			</FluentProvider>
		)
	}

	return (
		<div className='clube-item youtube'>
			<h3>📹 Últimas lives </h3>
			<div className='row'>{renderPlaylists()}</div>
		</div>
	)
}
