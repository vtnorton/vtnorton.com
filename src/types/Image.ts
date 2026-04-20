export type Image = {
	imageAlt: string
	imageUrl: string
	imageCaption?: string
}

export type ImageBlur = Image & {
	imageBlurUrl?: string
	solidColor?: string
}
