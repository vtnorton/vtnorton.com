'use client'
import { CSSProperties } from 'react'
import { PageHeroProps } from './PageHeroProps'

export const PageHero = (props: PageHeroProps) => {
	const heroClass = props.backgroundClass ? `hero ${props.backgroundClass}` : 'hero'
	const backgroundClass = props.backgroundClass ? `hero-background ${props.backgroundClass}` : 'hero-background'
	let styles: CSSProperties

	if (props.backgroundUrl) {
		styles = {
			backgroundImage: 'url(' + props.backgroundUrl + ')',
			backgroundPositionY: props.backgroundPosition,
		}
	}
	else {
		styles = {
			backgroundColor: props.backgroundColor ? props.backgroundColor : 'inherit',
		}
	}

	return (
		<>
			<div className={heroClass}>
				<div className='hero-background-wrapper'>
					<div className={backgroundClass} style={styles}></div>
				</div>
				<div className='hero-overlay'></div>
				<div className='hero-inner'>
					<div className='container'>
						<h1>{props.title}</h1>
						<p>{props.description}</p>
						{props.innerComponent}
					</div>
				</div>
			</div>
			<div className='container page-hero-next-item'>{props.children}</div>
		</>
	)
}
