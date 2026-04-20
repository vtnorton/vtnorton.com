import type { ReactNode } from 'react'

import type { ImageBlur } from '../../types/Image'
import type { Image } from '../../types/Image'

export type SectionProps = {
	full?: boolean
	half?: boolean
	removePaddingButton?: boolean
	removePaddingTop?: boolean
	className?: string
	image?: ImageBlur
	children: ReactNode
	paragraph?: boolean
}

export type SectionContentWithImageProps = {
	children: ReactNode
	image: Image
	imageSize?: 'normal' | 'small',
	sticky?: boolean,
	side?: 'left' | 'right'
}
