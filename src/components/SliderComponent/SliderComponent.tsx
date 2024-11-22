import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { SliderComponnetProps } from './SliderComponentProps'

export const SliderComponent = (props: SliderComponnetProps) => {
	const CustomDot = ({ onClick, active }: { onClick: any; active: boolean; index: number; carouselState: any }) => {
		return (
			<li>
				<div className={active ? 'active' : ''} onClick={() => onClick()} />
			</li>
		)
	}

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
			paritialVisibilityGutter: 60,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
			paritialVisibilityGutter: 50,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			paritialVisibilityGutter: 30,
		},
	}

	return (
		<Carousel
			customDot={<CustomDot onClick={undefined} active={false} index={0} carouselState={undefined} />}
			className='project-slider'
			renderDotsOutside
			responsive={responsive}
			draggable
			showDots
			infinite
			autoPlay
			autoPlaySpeed={7000}
			transitionDuration={1000}
			removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}>
			{props.items.map((item, index: number) => (
				<div className='item' key={index}>
					<img src={item.imageUrl} alt={item.imageAlt} />
				</div>
			))}
		</Carousel>
	)
}