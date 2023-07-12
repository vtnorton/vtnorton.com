import RSS from 'rss';

import { BlogGridItemProps } from '../components';
import { SEOMetaData } from '../database/SEOProps';


export const generateRssFeed = async (items: BlogGridItemProps[]) => {
	const site_url = 'https://vtnorton.com'
	const feedOptions = {
		title: SEOMetaData.defaultTitle,
		description: SEOMetaData.description,
		site_url: site_url,
		feed_url: `${site_url}/rss.xml`,
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
			url: `https://vtnorton.com/${post.link}`,
			date: post.date,
		})
	})

	return feed.xml({ indent: true })
}