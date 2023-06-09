import Carousel from 'react-multi-carousel'
import { SliderComponnetProps } from './SliderComponentProps'
import React from 'react'

export const SliderComponent = (props: SliderComponnetProps) => {
	const CustomDot = ({ onClick, active, index, carouselState }: { onClick: any; active: boolean; index: number; carouselState: any }) => {
		const { currentSlide } = carouselState
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
			autoPlaySpeed={3000}
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

// <Carousel className='podcast-list' responsive={responsive} draggable swipeable showDots={false} keyBoardControl={false} customTransition='all .5' transitionDuration={500} removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}>
// 	{items.map((item: PodcastEpisode, index: number) => {
// 		return <PodcastItem key={index} title={item.title} link={item.link} coverURL={item.coverURL} date={item.date} id={item.id} feedName={item.feedName} />
// 	})}
// </Carousel>
