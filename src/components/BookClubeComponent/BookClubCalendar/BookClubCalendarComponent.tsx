import axios from 'axios'
import { useEffect, useState } from 'react'

import { CalendarItem } from '../../../interfaces/CalendarItem'
import { BookClubCalendarItem } from './BookClubCalendarItem'

export const BookClubCalendarComponent = () => {
	const [items, setItems] = useState<CalendarItem[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (loading) {
			axios
				.get('/api/bookclub')
				.then((response) => {
					setItems(response.data)
					setLoading(false)
				})
				.catch((error) => {
					console.error('Erro ao obter os dados da API:', error)
				})
		}
	}, [loading])

	return (
		<div className='clube-item escape-padding'>
			<h3>➡️ Próximas lives </h3>

			{loading && <p>Carregando...</p>}
			{(!loading && items.length === 0) && <p>Não há nenhuma live agendada por hora, fique atento aqui ou lá no Discord para saber quando teremos mais uma live.</p>}
			<div className='playlists'>
				{items.map((item: CalendarItem, index: number) =>
					<BookClubCalendarItem key={index} item={item} />)}
			</div>
		</div>
	)
}
