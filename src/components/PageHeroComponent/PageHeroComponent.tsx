'use client'
import { CSSProperties } from 'react'
import { Typewriter } from 'react-simple-typewriter'

import { PageHeroComponentProps } from './PageHeroComponentProps'

export const PageHeroComponent = (props: PageHeroComponentProps) => {
	const heroClass = props.backgroundClass ? `hero ${props.backgroundClass}` : 'hero'
	let styles: CSSProperties

	if (props.backgroundUrl)
		styles = {
			backgroundImage: 'url(' + props.backgroundUrl + ')',
			backgroundPositionY: props.backgroundPosition,
		}
	else
		styles = {
			backgroundColor: props.backgroundColor ? props.backgroundColor : 'inherit',
		}

	return (
		<>
			<div className={heroClass} style={styles}>
				<div className='hero-overlay'></div>
				<div className='hero-inner'>
					<div className='row'>
						<div className='col-md-8'>
							<h1>
								<Typewriter words={[props.title]} typeSpeed={100} cursor={true} />
							</h1>
							<p>{props.description}</p>
							{props.innerComponent}
						</div>
					</div>
				</div>
			</div>
			<div className='container page-hero-next-item'>{props.children}</div>
		</>
	)
}
