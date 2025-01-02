import type { NextApiRequest, NextApiResponse } from 'next'

import { BlogGridItemProps } from '../../components'
import { getChangelogSectionItems } from '../../services/notionServices'
import { handleCache } from '../../services/cacheServices'

export default async function handler(req: NextApiRequest, res: NextApiResponse<BlogGridItemProps[] | { error: string }>) {
	if (req.method !== 'GET')
		return res.status(405).json({ error: 'Method not allowed' })


	const postQuantity = req.query.quantity ? parseInt(req.query.quantity.toString()) : 3
	const projectSlug = req.query.projectSlug ? req.query.projectSlug.toString() : undefined
	const itens = await handleCache<BlogGridItemProps>('changelogs', () => getChangelogSectionItems(projectSlug), 60 * 60 * 12)

	return res.status(200).json(itens.slice(0, postQuantity))
}
