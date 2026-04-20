import { SectionContentWithImageProps } from './SectionProps'

export const SectionContentWithImage = ({ children, image, side, sticky, imageSize }: SectionContentWithImageProps) => {
	const className = side === 'right' ? 'content-with-image content-with-image--right' : 'content-with-image'
	let classNameImage = sticky ? 'content-with-image__image content-with-image--sticky' : 'content-with-image__image'

	if (imageSize === 'small')
		classNameImage += ' content-with-image__image--small'

	return (
		<div className={className}>
			<div className='content-with-image__content'>
				{children}
			</div>
			<div className={classNameImage}>
				<img src={image.imageUrl} alt={image.imageAlt} />
				{image.imageCaption ? <small><i>{image.imageCaption}</i></small> : null}
			</div>
		</div>
	)
}
