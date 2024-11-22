import { SectionProps } from './SectionProps'

export const Section = ({ children, half, full, className, removePaddingButton }: SectionProps) => {
	const classes = [className]

	if (half) {
		classes.push('section-half-width')
	}

	if (full) {
		classes.push('section-full-width')
	}

	if (removePaddingButton) {
		classes.push('section-remove-padding-button')
	}

	return (
		<section className={classes.join(' ')}>
			{children}
		</section>
	)

}