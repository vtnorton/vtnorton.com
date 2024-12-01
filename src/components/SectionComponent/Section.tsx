import { SectionProps } from './SectionProps'

export const Section = ({ children, full, half, className, removePaddingButton, image }: SectionProps) => {
	const classes = [className]

	if (full) {
		classes.push('section-full-width')
	}

	if (half) {
		classes.push('section-half-width')
	}

	if (removePaddingButton) {
		classes.push('section-remove-padding-button')
	}

	if (image) {
		classes.push('section-with-image')
	}

	return (
		<section className={classes.join(' ')}>
			<div className='section-content'>
				{children}
			</div>

			{image && (
				<div className='section-image'>
					<div className='section-image-blur' style={{
						backgroundColor: image.solidColor ? image.solidColor : 'transparent',
						backgroundImage: image.imageBlurURL ? 'url(' + image.imageBlurURL + ')' : 'none',
					}}></div>
					<img src={image.imageURL} alt={image.imageAlt} />
				</div>
			)}
		</section>
	)

}