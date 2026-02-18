import { NotionAdapter } from '../adapters/notionAdapter'
import { azureBlobAdapter } from '../adapters/azureBlobAdapter'
import { NotionPage } from '../models/Notion/NotionPage'
import { postServices } from './postsServices'
import { palestrasServices } from './palestrasServices'
import { isLessThanOneWeekOld } from '../utils/dateUtils'
import { processImage } from '../utils/imageUtils'

const AZURE_COVER_PREFIX = 'https://vtnphotoswebsite.blob.core.windows.net/covers/'

const NOTION_DB_DEVREL = process.env.DEVREL_DATASOURE as string
const TALKS_DATASOURCE = process.env.TALKS_DATASOURCE as string

type ProcessingStatus = 'skipped' | 'processed' | 'error'

interface ItemResult {
	id: string
	title: string
	status: ProcessingStatus
	message?: string
}

interface ProcessingResult {
	total: number
	processed: number
	skipped: number
	errors: number
	details: ItemResult[]
}

const isAzureCover = (url: string): boolean => {
	return url.startsWith(AZURE_COVER_PREFIX)
}

const generateFileName = (item: NotionPage): string => {
	return `${item.id}.jpg`
}

const downloadImage = async (url: string): Promise<Buffer> => {
	const response = await fetch(url)

	if (!response.ok) {
		throw new Error(`Failed to download image: ${response.status} ${response.statusText}`)
	}

	const arrayBuffer = await response.arrayBuffer()
	return Buffer.from(arrayBuffer)
}

const getRecentItems = async (): Promise<NotionPage[]> => {
	const [posts, talks] = await Promise.all([
		postServices.getPosts(),
		palestrasServices.getAllTalks(),
	])

	const recentPosts = posts.filter((post) => isLessThanOneWeekOld(post.date))
	const recentTalks = talks.filter((talk) => isLessThanOneWeekOld(talk.date))

	return [...recentPosts, ...recentTalks]
}

const uploadToAzure = async (buffer: Buffer, fileName: string): Promise<string> => {
	return await azureBlobAdapter.uploadCover(buffer, fileName)
}

const updateNotionCover = async (item: NotionPage, azureUrl: string): Promise<void> => {
	const datasource = item.type === 'post' ? NOTION_DB_DEVREL : TALKS_DATASOURCE
	const notion = new NotionAdapter(datasource)
	await notion.updatePageCover(item.id, azureUrl)
}

const processSingleCover = async (item: NotionPage): Promise<ItemResult> => {
	try {
		if (!item.cover) {
			return { id: item.id, title: item.title, status: 'skipped', message: 'No cover image' }
		}

		if (isAzureCover(item.cover)) {
			return { id: item.id, title: item.title, status: 'skipped', message: 'Already on Azure' }
		}

		const originalBuffer = await downloadImage(item.cover)
		const processedBuffer = await processImage(originalBuffer)

		const fileName = generateFileName(item)
		const azureUrl = await uploadToAzure(processedBuffer, fileName)

		await updateNotionCover(item, azureUrl)

		return { id: item.id, title: item.title, status: 'processed', message: `Uploaded to ${azureUrl}` }
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error'
		return { id: item.id, title: item.title, status: 'error', message }
	}
}

const processAllCovers = async (): Promise<ProcessingResult> => {
	const items = await getRecentItems()

	const details: ItemResult[] = []

	for (const item of items) {
		const result = await processSingleCover(item)
		details.push(result)
	}

	return {
		total: details.length,
		processed: details.filter((d) => d.status === 'processed').length,
		skipped: details.filter((d) => d.status === 'skipped').length,
		errors: details.filter((d) => d.status === 'error').length,
		details,
	}
}

export const coverProcessingService = {
	processAllCovers,
}
