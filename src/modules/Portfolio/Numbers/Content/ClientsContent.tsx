import '@fancyapps/ui/dist/carousel/carousel.css'
import '@fancyapps/ui/dist/carousel/carousel.autoplay.css'
import { Autoplay } from '@fancyapps/ui/dist/carousel/carousel.autoplay.esm'
import { Carousel } from '@fancyapps/ui'
import { useEffect, useRef } from 'react'

type Client = {
	name: string
	logo: string
	url: string
}

const clients: Client[] = [
	{
		name: 'Doco',
		logo: '/img/portfolio/clients/doco.png',
		url: 'https://trydoco.com/',
	},
	{
		name: 'Lerian',
		logo: '/img/portfolio/clients/lerian.png',
		url: 'https://lerian.studio/',
	},
	{
		name: 'Superviz',
		logo: '/img/portfolio/clients/superviz.png',
		url: 'https://www.superviz.com/',
	},
	{
		name: 'Méliuz',
		logo: '/img/portfolio/clients/meliuz.png',
		url: 'https://meliuz.com.br/',
	},

	{
		name: 'Bankly',
		logo: '/img/portfolio/clients/bankly.png',
		url: 'https://bankly.com.br/',
	},
	{
		name: 'Lambda3',
		logo: '/img/portfolio/clients/lambda.png',
		url: 'https://www.lambda3.com.br/',
	},

	{
		name: 'Heineken',
		logo: '/img/portfolio/clients/heineken.png',
		url: 'https://www.heineken.com.br/',
	},
	{
		name: 'Zeeba',
		logo: '/img/portfolio/clients/zeeba.png',
		url: 'https://sitedozeeba.com.br/',
	},
]

export const ClientsContent = () => {
	const containerRef = useRef(null)

	useEffect(() => {
		const container = containerRef.current
		const instance = new Carousel(container, {
			Autoplay: {
				timeout: 5000,
				showProgress: false,
			},
			Dots: false,
		}, { Autoplay })

		return () => {
			instance.destroy()
		}
	}, [])

	return (
		<div className='expanded-content clients'>
			<div className='f-carousel' ref={containerRef}>
				{clients.map((client) => (
					<div className='f-carousel__slide' key={client.name}>
						<a href={client.url} target='_blank' rel='noreferrer'>
							<img src={client.logo} alt={client.name} />
						</a>
					</div>
				))}
			</div>
		</div>
	)
}