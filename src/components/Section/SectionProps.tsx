import { ReactNode } from 'react'

export interface ImageBlur {
	imageURL: string,
	imageBlurURL?: string
	solidColor?: string
	imageAlt: string
}

export interface SectionProps {
	full?: boolean
	half?: boolean
	removePaddingButton?: boolean
	removePaddingTop?: boolean
	className?: string
	image?: ImageBlur
	children: ReactNode
}

export interface SectionContentWithImageProps {
	children: ReactNode
	image: string,
	imageAlt: string,
	imageCaption?: boolean,
	imageSize?: 'normal' | 'small',
	sticky?: boolean,
	side?: 'left' | 'right'
}