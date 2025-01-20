import type { NextApiRequest, NextApiResponse } from 'next'
import { handleCache } from '../../services/cacheServices'
import { Changelog } from '../../models/Changelog'
import { Post } from '../../models/Post'
import { getPosts } from '../../services/postsServices'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Post | Changelog> | { error: string }>,
) {
  if (req.method !== 'GET')
    return res.status(405).json({ error: 'Method not allowed' })

  const postQuantity = req.query.quantity
    ? parseInt(req.query.quantity.toString())
    : 12
  const tag = req.query.tag ? req.query.tag.toString() : undefined
  const hideChangelogs = req.query.hidechangelogs ? true : false

  const cacheKey = tag ? `blogPosts-${tag}` : 'blogPosts'
  const itens = await handleCache<Post | Changelog>(cacheKey, () => getPosts(tag), 60 * 60 * 8)

  return res.status(200).json(selectPosts(itens, hideChangelogs, postQuantity))
}

const selectPosts = (
  posts: Array<Post | Changelog>,
  hideChangelogs: boolean,
  postQuantity: number,
) => {
  let filteredPosts = posts
  if (hideChangelogs) {
    filteredPosts = filteredPosts.filter(
      (post) => !(post instanceof Changelog),
    )
  }
  return filteredPosts.slice(0, postQuantity)
}
