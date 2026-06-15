import type { NotionFilter } from '../../types/notionTypes'

export const postsSharedFilter = (): NotionFilter => {
	const CLIENT_ID = process.env.CLIENT_ID

	return [
		// O filtro de data NÃO entra aqui de propósito: se entrasse, o "agora"
		// ficaria congelado no snapshot do cache por toda a janela de TTL. O
		// recorte por data é feito na leitura (filterPublishedPosts), garantindo
		// que posts agendados apareçam assim que a data chega.
		{
			or: [
				{
					property: 'Status-post',
					status: {
						equals: 'Query',
					},
				},
				{
					property: 'Status-post',
					status: {
						equals: 'Follow-up',
					},
				},
				{
					property: 'Status-post',
					status: {
						equals: 'Published',
					},
				},
			],
		},
		{
			or: [
				{
					property: 'Cliente',
					relation: {
						is_empty: true,
					},
				},
				{
					// TODO: Permitir todos os clientes, mas colocar a informação do cliente na postagem
					property: 'Cliente',
					relation: {
						contains: CLIENT_ID || '',
					},
				},
			],
		},
	]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const itemTypeFilter = (type: string): any => {
	return {
		property: 'Type',
		multi_select: {
			contains: type,
		},
	}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const itemCategoryFilter = (category: string): any => {
	return {
		property: 'Categoria',
		multi_select: {
			contains: category,
		},
	}
}
