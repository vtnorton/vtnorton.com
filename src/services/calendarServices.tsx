import { CalendarItem } from '../interfaces/CalendarItem'
import { getServerSchedule } from './discordServices'

export async function getBoraLerEvents(): Promise<CalendarItem[]> {
	let events: CalendarItem[] = await getServerSchedule()

	return events.filter((event) => event.name.includes('BORA LER'))
}
