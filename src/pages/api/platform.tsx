import { createClient } from '@supabase/supabase-js'
import type { NextApiRequest, NextApiResponse } from 'next'

// TODO: Adicionar chave de autenticação
export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	if (req.method !== 'POST')
		return res.status(405).json({ error: 'Method not allowed' })

	const { data } = req.body

	if (!data.id || !data.properties)
		return res.status(400).json({ error: 'Missing id or name in request body' })

	let platformName

	try {
		platformName = data.properties.Name.title[0].text.content
	} catch {
		return res.status(400).json({ error: 'Missing the platform name in request body' })
	}

	const SUPABASE_URL = process.env.SUPABASE_URL as string
	const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY as string
	const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

	const { data: platform, error } = await supabase
		.from('platform')
		.insert([
			{ id: data.id, name: platformName },
		])

	if (platform)
		return res.status(200).json(platform)

	return res.status(500).json({ error })

}