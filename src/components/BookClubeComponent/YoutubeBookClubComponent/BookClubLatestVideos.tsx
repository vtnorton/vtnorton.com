import axios from 'axios'
import { useEffect, useState } from 'react'

import { Playlist } from '../../../interfaces/YouTube/Playlist'
import { BookClubPlaylists } from './BookClubPlaylists'

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

	return (
		<div className='clube-item youtube escapte-padding'>
			<h3>🔴 Histórico de lives </h3>
			<div className='playlists'>
				<BookClubPlaylists items={items} />
			</div>
		</div>
	)
}
