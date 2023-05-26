import { PageHeroComponentProps } from './PageHeroComponentProps'

export const PageHeroComponent = (props: PageHeroComponentProps) => {
	const heroClass = props.backgroundClass ? `hero ${props.backgroundClass}` : `hero`
	return (
		<>
			<div className={heroClass} style={{ backgroundImage: 'url(' + props.backgroundUrl + ')', backgroundPositionY: props.backgroundPosition }}>
				<div className='hero-overlay'></div>
				<div className='hero-inner'>
					<div className='row'>
						<div className='col-md-8'>
							<h1>{props.title}</h1>
							<p>{props.description}</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container page-hero-next-item'>{props.children}</div>
		</>
	)
}
