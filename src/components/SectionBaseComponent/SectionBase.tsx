import { SectionBaseProps } from './SectionBaseProps'

/**
 * @deprecated Este componente será removido, use o SectionComponent em seu lugar
 */
export const SectionBase = (props: SectionBaseProps) => {
	const classes = props.half ? 'row showcase half' : 'row showcase'
	return (
		<section className='section'>
			<div className={classes}>
				<div className='col-lg-4 col-md-6'>{props.children}</div>
				<div className='col-lg-6 col-md-5 col-lg-offset-2 col-md-offset-1 showcase-right'>
					<div className='showcase-bg sc-full-width' style={{ backgroundImage: 'url(' + props.blurImageUrl + ')' }}></div>
					<img src={props.imageUrl} alt={props.imageAlt} />
				</div>
			</div>
		</section>
	)
}
