import { ImageBlur } from './ImageBlur'

export interface SectionProps {
	full?: boolean
	half?: boolean
	removePaddingButton?: boolean
	removePaddingTop?: boolean
	className?: string
	image?: ImageBlur
	children: React.ReactNode
}