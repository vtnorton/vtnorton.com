import type { NextApiRequest, NextApiResponse } from 'next'
import { kv } from '@vercel/kv'
import { Playlist } from '../../interfaces'
import { getPlaylistsFromClubeDoLivro } from '../../services/youtubeServices'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Playlist[]>) {
	const cacheKey = 'playlist'
	const cachedEvents = (await kv.get(cacheKey)) as Playlist[]

	if (cachedEvents) return res.status(200).json(cachedEvents)

	const playlist: Playlist[] = await getPlaylistsFromClubeDoLivro()
	await kv.setex(cacheKey, 60 * 60 * 24, playlist)

	return res.status(200).json(playlist)
}
