import { CalendarItem } from '../../../interfaces/CalendarItem'
import { BookClubCalendarComponentProps } from './BookClubCalendarComponentProps'

const renderLive = (items: CalendarItem[]) => {
	const today = new Date()
	return items.map((item: CalendarItem) => {
		const date = new Date(item.date)
		const formatedDate = `${date.getDate().toString().padStart(2, '0')}/${date.getMonth().toString().padStart(2, '0')} às ${date.getHours().toString().padStart(2, '0')}h${date.getMinutes().toString().padStart(2, '0')}`
		let eventNameAndDescription = `${item.name.replace('[CLUBE DO LIVRO]', '')} - ${formatedDate}`

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

const render = (items: CalendarItem[]) => {
	if (items.length == 0) {
		return (
			<div className='col-md-12'>
				<small>Não há nenhuma live agendada por hora, fique atento aqui ou lá no Discord para saber quando teremos mais uma live.</small>
			</div>
		)
	}

	return renderLive(items)
}

export const BookClubCalendarComponent = (props: BookClubCalendarComponentProps) => {
	return (
		<div className='clube-item'>
			<h3>➡️ Próximas lives </h3>
			<div className='row sameheight'>{render(props.calendarItems)}</div>
		</div>
	)
}
