// TODO: renomear para project
export interface Product {
	// TODO: fazer obrigatoriedade do id
	id?: string
	slug: string
	name: string
	imageUrl: string
	link: string
	supported?: boolean
	businessCase?: boolean
}
