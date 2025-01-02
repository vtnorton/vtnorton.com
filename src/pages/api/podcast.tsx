import type { NextApiRequest, NextApiResponse } from 'next'

import { PodcastEpisode } from '../../interfaces'
import { getPodcasts } from '../../services/notionServices'
import { handleCache } from '../../services/cacheServices'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PodcastEpisode[] | { error: string }>,
) {
  if (req.method !== 'GET')
    return res.status(405).json({ error: 'Method not allowed' })

  const itens = await handleCache<PodcastEpisode>('podcast', getPodcasts)
  return res.status(200).json(itens)

}
