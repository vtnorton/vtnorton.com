export interface SectionContentWithImageProps {
	children: React.ReactNode
	image: string,
	imageAlt: string,
	imageCaption?: boolean,
	imageSize?: 'normal' | 'small',
	sticky?: boolean,
	gap?: number,
	side?: 'left' | 'right'
}