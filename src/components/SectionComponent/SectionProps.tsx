import { ImageBlur } from './ImageBlur'

export interface SectionProps {
	full?: boolean
	half?: boolean
	removePaddingButton?: boolean
	className?: string
	image?: ImageBlur
	children: React.ReactNode
}