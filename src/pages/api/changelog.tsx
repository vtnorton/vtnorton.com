import { kv } from '@vercel/kv'
import type { NextApiRequest, NextApiResponse } from 'next'

import { BlogGridItemProps } from '../../components'
import { getChangelogSectionItems } from '../../services/notionServices'

export default async function handler(req: NextApiRequest, res: NextApiResponse<BlogGridItemProps[]>) {
	const cacheKey = 'changelogs'
	const cachedEvents = (await kv.get(cacheKey)) as BlogGridItemProps[]
	const postQuantity = req.query.quantity ? parseInt(req.query.quantity.toString()) : 3
	const projectSlug = req.query.projectSlug ? req.query.projectSlug.toString() : undefined

	if (cachedEvents) return res.status(200).json(cachedEvents)

	const changelogs: BlogGridItemProps[] = await getChangelogSectionItems(projectSlug)
	await kv.setex(cacheKey, 60 * 60 * 12, changelogs)

	return res.status(200).json(changelogs.slice(0, postQuantity))
}
