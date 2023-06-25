import axios from 'axios'

import { InstagramItem } from '../interfaces/InstagramItem'

async function fetchInstagramMedia(userId: string, accessToken: string): Promise<any> {
	const response = await axios.get(`https://graph.instagram.com/v16.0/${userId}/media?access_token=${accessToken}`)
	const listOfMedia = response.data.data.slice(0, 3)
	return listOfMedia
}

async function fetchInstagramPhoto(mediaId: string, accessToken: string): Promise<InstagramItem> {
	const response = await axios.get(`https://graph.instagram.com/${mediaId}?fields=media_url,caption&access_token=${accessToken}`)
	const photo: InstagramItem = {
		imageUrl: response.data.media_url,
		altImg: response.data.caption || '',
	}
	return photo
}

export async function getInstagramPosts(): Promise<InstagramItem[]> {
	let photos: InstagramItem[] = []
	const accessToken = process.env.instagramAccessToken || ''
	const userId = '17841401451493119'

	try {
		const listOfMedia = await fetchInstagramMedia(userId, accessToken)
		const promises = listOfMedia.map((media: { id: string }) => fetchInstagramPhoto(media.id, accessToken))
		const results = await Promise.all(promises)
		photos.push(...results)
	} catch (error) {
		console.error(error)
	}

	return photos
}
