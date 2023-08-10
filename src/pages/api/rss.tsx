import { NextApiRequest, NextApiResponse } from 'next'

import { BlogGridItemProps } from '../../components'
import { getBlogSectionItems } from '../../services/notionServices'
import { generateRssFeed } from '../../services/rssServices'

//TODO: colocar cache aqui
export default async (req: NextApiRequest, res: NextApiResponse<string>) => {
	const posts: BlogGridItemProps[] = await getBlogSectionItems()
	const rss = await generateRssFeed(posts)

	res.setHeader('Content-Type', 'text/xml')
	res.write(rss)
	res.end()
}
