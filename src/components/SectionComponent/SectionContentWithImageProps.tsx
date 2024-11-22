export interface SectionContentWithImageProps {
	children: React.ReactNode
	image: string,
	imageAlt: string,
	imageCaption?: boolean,
	sticky?: boolean,
	gap?: number,
	side?: 'left' | 'right'
}