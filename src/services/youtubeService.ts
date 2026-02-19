const youtubeKey = process.env.youtubeKey || ''
const channelId = 'UCMM0acsrwNvI0tEML8-vAjw'

const getVideosCount = async (): Promise<number> => {
	try {
		const response = await fetch(
			`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${youtubeKey}`,
		)
		const data = await response.json()
		if (data.items && data.items.length > 0) {
			const count = parseInt(data.items[0].statistics.videoCount, 10)
			return Math.floor(count / 10) * 10
		}
		return 50
	} catch (e) {
		console.error('Error fetching YouTube video count', e)
		return 50
	}
}

export const youtubeService = {
	getVideosCount,
}