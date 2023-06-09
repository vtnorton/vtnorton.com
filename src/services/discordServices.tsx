import axios from 'axios'
import { CalendarItem } from '../interfaces/CalendarItem'
import { APIGuildScheduledEvent } from 'discord-api-types/v10'

const guildId = '828792462453112862'
const discordToken = process.env.discordToken

export async function getServerSchedule(): Promise<CalendarItem[]> {
	let events: CalendarItem[] = []

	try {
		const response = await axios.get(`https://discord.com/api/v10/guilds/${guildId}/scheduled-events`, {
			headers: {
				Authorization: `Bot ${discordToken}`,
				'User-Agent': 'DiscordBot (https://vtnorton.com, 1)',
			},
		})
		response.data.map((item: APIGuildScheduledEvent) => {
			const event: CalendarItem = {
				location: item.entity_metadata?.location || '',
				description: item.description || '',
				name: item.name,
				date: item.scheduled_start_time,
				imageHash: `https://cdn.discordapp.com/guild-events/${item.id}/${item.image}.jpg?size=1024`,
			}
			events.push(event)
		})
	} catch (error) {
		console.error(error)
	}

	return events.sort((a, b) => (b.date && a.date ? new Date(b.date).getTime() - new Date(a.date).getTime() : new Date().getTime()))
}
