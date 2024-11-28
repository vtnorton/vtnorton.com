import { PostType } from '../../../interfaces'

export interface BlogGridItemProps {
	id: string
	title: string
	image: string
	hashtags?: string[]
	link: string
	date?: string
	type: PostType
}
