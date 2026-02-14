import { kv } from '@vercel/kv'

export async function handleCache<T>(cacheKey: string, getFunction: () => Promise<T[]>, ttl?: number): Promise<T[]> {
	if (process.env.HOST === 'localhost')
		return getFunction()

	const cachedItens = (await kv.get(cacheKey)) as T[]

	if (cachedItens)
		return cachedItens

	if (!ttl)
		ttl = 60 * 60 * 24

	const itens: T[] = await getFunction()
	await kv.setex(cacheKey, 60 * 60 * 24, itens)

	return itens
}
