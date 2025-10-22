import { JSX } from 'react'

export interface PageHeroProps {
	title: string
	description?: string
	backgroundUrl?: string
	backgroundClass?: string
	children: JSX.Element
	backgroundPosition?: string
	backgroundColor?: string
	innerComponent?: JSX.Element
}
