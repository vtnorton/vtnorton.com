import axios from 'axios'
import { useEffect, useState } from 'react'

import { CalendarItem } from '../../../interfaces/CalendarItem'

const renderLive = (items: CalendarItem[]) => {
	const today = new Date()

	return items.map((item: CalendarItem, index: number) => {
		const date = new Date(item.date)

		const monthNumber = date.getMonth() + 1
		const month = monthNumber.toString().padStart(2, '0')
		const formatedDate = `${date.getDate().toString().padStart(2, '0')}/${month} às ${date.getHours().toString().padStart(2, '0')}h${date.getMinutes().toString().padStart(2, '0')}`
		let eventNameAndDescription = `${item.name.replace('[BORA LER]', '')}`

		if (date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate()) {
			eventNameAndDescription = '🔴 ' + eventNameAndDescription
		}
		return (
			<div className='sameheight' key={index}>
				<div className='calendar-item shadow-middle'>
					<img src={item.imageHash} alt={eventNameAndDescription} />
					<h4>{eventNameAndDescription}</h4>
					<p>{item.description}</p>
					<p>
						📅 {formatedDate} <br />
						📺{' '}
						<a href={item.location} target='_blank' rel='noreferrer'>
							Twitch @vt_norton
						</a>
					</p>
				</div>
			</div>
		)
	})
}

export const BookClubCalendarComponent = () => {
	const [items, setItems] = useState<CalendarItem[]>([])

	useEffect(() => {
		if (items.length === 0) {
			axios
				.get('/api/bookclub')
				.then((response) => {
					setItems(response.data)
				})
				.catch((error) => {
					console.error('Erro ao obter os dados da API:', error)
				})
		}
	}, [items])

	if (items.length == 0) {
		return (
			<p>Não há nenhuma live agendada por hora, fique atento aqui ou lá no Discord para saber quando teremos mais uma live.</p>
		)
	}

	return (
		<div className='clube-item'>
			<h3>➡️ Próximas lives </h3>
			<div className='playlists'>{renderLive(items)}</div>
		</div>
	)
}
