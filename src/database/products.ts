type Product = {
	id?: string
	slug: string
	name: string
}

// TODO: this should be fetched from Notion, but for now it's hardcoded to avoid unnecessary complexity and API calls until we have more than one product
export const products: Product[] = [
	{
		id: '1ae4009b-7ca6-80ca-b87c-c43f1115f955',
		name: 'Formula - Code Editor',
		slug: 'formula',
	},
]
