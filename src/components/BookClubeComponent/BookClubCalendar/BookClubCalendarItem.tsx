import { CalendarItem } from '../../../interfaces'

export const BookClubCalendarItem = ({ item }: { item: CalendarItem }) => {
	const today = new Date()
	const date = new Date(item.date)

	const monthNumber = date.getMonth() + 1
	const month = monthNumber.toString().padStart(2, '0')
	const formatedDate = `${date.getDate().toString().padStart(2, '0')}/${month} às ${date.getHours().toString().padStart(2, '0')}h${date.getMinutes().toString().padStart(2, '0')}`
	let eventNameAndDescription = `${item.name.replace('[BORA LER]', '')}`

	if (date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate())
		eventNameAndDescription = '🔴 ' + eventNameAndDescription

	return (
		<div className='sameheight'>
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
}