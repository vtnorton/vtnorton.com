import type { NextApiRequest, NextApiResponse } from 'next'

import { BlogGridItemProps } from '../../components'
import { PostType } from '../../interfaces'
import { getBlogSectionItems } from '../../services/notionServices'
import { handleCache } from '../../services/cacheServices'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogGridItemProps[] | { error: string }>,
) {
  if (req.method !== 'GET')
    return res.status(405).json({ error: 'Method not allowed' })

  const postQuantity = req.query.quantity
    ? parseInt(req.query.quantity.toString())
    : 12
  const tag = req.query.tag ? req.query.tag.toString() : undefined
  const hideChangelogs = req.query.hidechangelogs ? true : false

  const cacheKey = tag ? `blogPosts-${tag}` : 'blogPosts'
  const itens = await handleCache<BlogGridItemProps>(cacheKey, () => getBlogSectionItems(tag), 60 * 60 * 8)

  return res.status(200).json(selectPosts(itens, hideChangelogs, postQuantity))
}

const selectPosts = (
  posts: BlogGridItemProps[],
  hideChangelogs: boolean,
  postQuantity: number,
) => {
  let filteredPosts = posts
  if (hideChangelogs) {
    filteredPosts = filteredPosts.filter(
      (post) => post.type === PostType.Changelog,
    )
  }
  return filteredPosts.slice(0, postQuantity)
}
