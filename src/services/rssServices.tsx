import RSS from 'rss'

import { SEOMetaData } from '../database/SEOProps'
import { Post } from '../models/Post'
import { Changelog } from '../models/Changelog'

export const generateRssFeed = async (items: Array<Post | Changelog>) => {
	const site_url = 'https://vtnorton.com'
	const feedOptions = {
		title: SEOMetaData.defaultTitle,
		description: SEOMetaData.description,
		site_url: site_url,
		feed_url: `${site_url}/rss`,
		image_url: `${site_url}/img/logo-color.png`,
		pubDate: new Date(),
		copyright: 'Attribution-NonCommercial-ShareAlike 4.0 (CC BY-NC-SA 4.0) International',
		managingEditor: 'Vítor Norton',
		webMaster: 'Vítor Norton',
		language: 'pt-BR',
		tll: 720,
	}

	const feed = new RSS(feedOptions)
	items.map((post) => {
		feed.item({
			title: post.title,
			description: '',
			url: `https://vtnorton.com${post.fullSlug}`,
			date: post.date,
		})
	})
	return feed.xml({ indent: true })
}
