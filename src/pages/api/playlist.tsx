import type { NextApiRequest, NextApiResponse } from 'next'

import { Playlist } from '../../interfaces'
import { getPlaylistsFromClubeDoLivro } from '../../services/youtubeServices'
import { handleCache } from '../../services/cacheServices'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Playlist[] | { error: string }>) {
	if (req.method !== 'GET')
		return res.status(405).json({ error: 'Method not allowed' })

	const itens = await handleCache<Playlist>('playlist', getPlaylistsFromClubeDoLivro)
	return res.status(200).json(itens)
}
