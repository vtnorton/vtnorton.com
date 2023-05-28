import { Client } from '@notionhq/client'
import { NotionAPI } from 'notion-client'
import { Post } from '../interfaces/Post'
import { Hashtag } from '../interfaces/Hashtag'
import { PodcastEpisode } from '../interfaces/PodcastEpisode'
import { BlogGridItemProps } from '../components'

const notion = new Client({
	auth: process.env.notionSecret,
})

const notionApi = new NotionAPI({
	authToken: process.env.notionToken,
})

let cachedPosts: Post[]

export const getPodcasts = async (): Promise<PodcastEpisode[]> => {
	const response = await notion.databases.query({
		database_id: process.env.devrelDb as string,
		sorts: [
			{
				property: 'Date',
				direction: 'descending',
			},
		],
		filter: {
			and: [
				{
					property: 'Type',
					multi_select: {
						contains: 'Podcast',
					},
				},
				{
					property: 'Date',
					date: {
						on_or_before: new Date().toISOString(),
					},
				},
				{
					property: 'Status-podcast',
					select: {
						equals: 'Publicado',
					},
				},
			],
		},
	})
	const { results } = response

	let podcasts = results.map((result: any) => {
		const item: PodcastEpisode = {
			id: result.id,
			link: result.properties.Link.url,
			title: result.properties.Name.title[0].text.content,
			date: result.properties.Date.date.start as string,
			coverURL: result.cover ? result.cover.external.url : '',
			feedName: result.properties.Podcast.select.name,
		}

		return item
	})

	podcasts = podcasts.filter((cast): cast is PodcastEpisode => typeof cast !== 'undefined')

	return podcasts
}

export const getPosts = async (tag?: string) => {
	const filter = [
		{
			property: 'Type',
			multi_select: {
				contains: 'Post',
			},
		},
		{
			property: 'Date',
			date: {
				on_or_before: new Date().toISOString(),
			},
		},
		{
			or: [
				{
					property: 'Status-post',
					select: {
						equals: 'Query',
					},
				},
				{
					property: 'Status-post',
					select: {
						equals: 'Follow-up',
					},
				},
				{
					property: 'Status-post',
					select: {
						equals: 'Published',
					},
				},
			],
		},
	]

	if (tag) {
		filter.push({
			property: 'Hashtags',
			multi_select: {
				contains: tag,
			},
		})
	}

	const response = await notion.databases.query({
		database_id: process.env.devrelDb as string,
		sorts: [
			{
				property: 'Date',
				direction: 'descending',
			},
		],
		filter: {
			and: filter,
		},
	})
	const { results } = response

	let posts = results.map((result: any) => {
		const getHashtags = function () {
			let hashtags: string[] = []
			result.properties.Hashtags.multi_select.map((item: any) => {
				hashtags.push(item.name)
			})
			return hashtags
		}

		const item: Post = {
			id: result.id,
			url: result.url,
			slug: result.properties.Slug.rich_text[0].text.content,
			fullSlug: mountSlug(result),
			title: result.properties.Name.title[0].text.content,
			date: result.properties.Date.date.start,
			featureImage: result.cover ? result.cover.external.url : '',
			hashtags: getHashtags(),
			recordMap: {},
		}

		return item
	})

	posts = posts.filter((post): post is Post => typeof post !== 'undefined')
	cachedPosts = posts
	return posts
}

export async function getPostBySlug(slug: string) {
	const posts = await getPosts()
	let post: any = posts.find((p: Post) => p.slug === slug) ?? null
	post.recordMap = await getPage(post.id)
	return post
}

export async function getBlogSectionPosts(numberOfPosts: number = 12, tag?: string): Promise<BlogGridItemProps[]> {
	let posts: Post[] = cachedPosts

	if (!posts) posts = await getPosts(tag)
	let blogGridItems: BlogGridItemProps[] = []

	posts.map((post: Post) => {
		blogGridItems.push({
			id: post.id,
			image: post.featureImage,
			link: post.fullSlug,
			title: post.title,
			hashtags: post.hashtags,
		})
	})

	return blogGridItems.slice(0, numberOfPosts)
}

export const getPage = async (pageId: string) => {
	return await notionApi.getPage(pageId)
}

export const getHashtags = async (): Promise<Hashtag[]> => {
	const response = await notion.databases.query({
		database_id: process.env.devrelDb ?? '',
	})
	const { results } = response as any

	let hashtags: Hashtag[] = []
	for (const result of results) {
		const d = result.properties! as any
		for (const select of d.Hashtags.multi_select) {
			if (!hashtags.filter((hashtag) => hashtag.name == select.name).length) {
				hashtags.push({ name: select.name, color: select.color, count: 1 })
			} else {
				hashtags.filter((hashtag) => hashtag.name == select.name)[0].count += 1
			}
		}
	}
	return hashtags
}

function mountSlug(result: any): string {
	const postDate = new Date(result.properties.Date.date.start)
	const pageSlug = result.properties.Slug.rich_text[0].text.content
	const year = postDate.getFullYear().toString()
	const month = postDate.getMonth().toString().padStart(2, '0')

	return `${year}/${month}/${pageSlug}`
}
