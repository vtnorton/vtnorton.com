import { SectionProps } from './SectionProps'

export const Section = ({ children, half, full, className }: SectionProps) => {
	const classes = [className]

	if (half) {
		classes.push('section-half-width')
	}

	if (full) {
		classes.push('section-full-width')
	}

	return (
		<section className={classes.join(' ')}>
			{children}
		</section>
	)

}