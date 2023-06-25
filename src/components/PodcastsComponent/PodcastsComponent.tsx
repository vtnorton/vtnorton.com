import Carousel from 'react-multi-carousel'
import { PodcastEpisode } from '../../interfaces/PodcastEpisode'
import { PodcastItem } from './PodcastItem'
import 'react-multi-carousel/lib/styles.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const renderPodcastList = (items: PodcastEpisode[]) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 7,
			paritialVisibilityGutter: 60,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 4,
			paritialVisibilityGutter: 50,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 2,
			paritialVisibilityGutter: 30,
		},
	}
	return (
		<Carousel className='podcast-list' responsive={responsive} draggable swipeable showDots={false} keyBoardControl={false} customTransition='all .5' transitionDuration={500} removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}>
			{items.map((item: PodcastEpisode, index: number) => {
				return <PodcastItem key={index} title={item.title} link={item.link} coverURL={item.coverURL} date={item.date} id={item.id} feedName={item.feedName} />
			})}
		</Carousel>
	)
}

export const PodcastsComponent = () => {
	const [items, setItems] = useState<PodcastEpisode[]>([])

	useEffect(() => {
		if (items.length === 0) {
			axios
				.get('/api/podcast')
				.then((response) => {
					setItems(response.data)
				})
				.catch((error) => {
					console.error('Erro ao obter os dados da API:', error)
				})
		}
	}, [])

	return (
		<>
			<div className='container podcasts'>
				<section>
					<div className='row showcase'>
						<div className='col-md-6 col-sm-8'>
							<h2>🎙️ Podcasts</h2>
							<p>Ocasionalmente eu acabo participando de algum cast, na grande maioria pra falar de tech, mas rola de tudo, bora bater um papo? [ou pros que estão na interwebs a mais tempo, qr tc?]</p>
							<div className='space-medium'></div>
						</div>
					</div>
				</section>
			</div>
			<div className='podcast-list-wrapper'>{renderPodcastList(items)}</div>
		</>
	)
}
