import { kv } from '@vercel/kv'
import type { Progress } from '../types/ComingSoonStatus'

const NEXT_REFRESH_KEY = 'coming-soon:next-refresh-at'

const isCount = (value: unknown): value is number => {
	return typeof value === 'number' && Number.isInteger(value) && value >= 0
}

const parseProgress = (key: string, value: unknown): Progress => {
	const invalid = new Error(`KV key "${key}" must hold {"completed": n, "total": n} with completed <= total`)
	if (typeof value !== 'object' || value === null) throw invalid
	if (!('completed' in value) || !('total' in value)) throw invalid

	const { completed, total } = value
	if (!isCount(completed) || !isCount(total) || completed > total) throw invalid

	return { completed, total }
}

const readManualProgress = async (key: string): Promise<Progress | null> => {
	const value = await kv.get<unknown>(key)
	if (value === null) return null
	return parseProgress(key, value)
}

const readNextRefreshAt = async (): Promise<number | null> => {
	const value = await kv.get<unknown>(NEXT_REFRESH_KEY)
	if (value === null) return null
	if (typeof value !== 'number') throw new Error(`KV key "${NEXT_REFRESH_KEY}" must hold a timestamp in milliseconds`)
	return value
}

const saveNextRefreshAt = async (timestamp: number): Promise<void> => {
	await kv.set(NEXT_REFRESH_KEY, timestamp)
}

export const comingSoonKvAdapter = {
	readManualProgress,
	readNextRefreshAt,
	saveNextRefreshAt,
}
