import axios from 'axios'
import { useEffect, useState } from 'react'

import { CalendarItem } from '../../../interfaces/CalendarItem'

const renderLive = (items: CalendarItem[]) => {
	const today = new Date()

	return items.map((item: CalendarItem) => {
		const date = new Date(item.date)

		const monthNumber = date.getMonth() + 1
		const month = monthNumber.toString().padStart(2, '0')
		const formatedDate = `${date.getDate().toString().padStart(2, '0')}/${month} às ${date.getHours().toString().padStart(2, '0')}h${date.getMinutes().toString().padStart(2, '0')}`
		let eventNameAndDescription = `${item.name.replace('[BORA LER]', '')} - ${formatedDate}`

		if (date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate()) {
			eventNameAndDescription = '🔴 ' + eventNameAndDescription
		}
		return (
			<div className='col-md-6 sameheight'>
				<div className='calendar-item shadow-middle'>
					<img src={item.imageHash} alt={eventNameAndDescription} />
					<h4>{eventNameAndDescription}</h4>
					<small>{item.description}</small>
				</div>
			</div>
		)
	})
}

const render = () => {
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
	}, [])

	if (items.length == 0) {
		return (
			<div className='col-md-12'>
				<small>Não há nenhuma live agendada por hora, fique atento aqui ou lá no Discord para saber quando teremos mais uma live.</small>
			</div>
		)
	}

	return renderLive(items)
}

export const BookClubCalendarComponent = () => {
	return (
		<div className='clube-item'>
			<h3>➡️ Próximas lives </h3>
			<div className='row sameheight'>{render()}</div>
		</div>
	)
}
