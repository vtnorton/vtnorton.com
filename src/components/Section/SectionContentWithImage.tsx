import { SectionContentWithImageProps } from './SectionProps'

export const SectionContentWithImage = ({ children, image, imageAlt, imageCaption, side, gap, sticky, imageSize }: SectionContentWithImageProps) => {
	let classNameImage = sticky ? 'content-with-image__image content-with-image--sticky' : 'content-with-image__image'
	const className = side === 'right' ? 'content-with-image content-with-image--right' : 'content-with-image'
	const gapSize = gap ? { gap: `${gap}rem` } : {}

	if (imageSize === 'small')
		classNameImage += ' content-with-image__image--small'


	return (
		<div className={className} style={gapSize}>
			<div className='content-with-image__content'>
				{children}
			</div>
			{imageCaption ?
				<div className='content-with-image__image'>
					<img src={image} alt={imageAlt} />
					<small><i>{imageAlt}</i></small>
				</div> :
				<img className={classNameImage} src={image} alt={imageAlt} />}
		</div>
	)
}