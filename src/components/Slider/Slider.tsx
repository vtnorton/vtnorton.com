import { Fancybox as NativeFancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { useEffect, useRef, useState } from 'react'

import type { SliderProps } from './Slider.types'

const DEFAULT_AUTOPLAY_INTERVAL = 7000

export const Slider = ({
	items,
	ariaLabel = 'Galeria de imagens',
	fancyboxGroupName,
}: SliderProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const [activeIndex, setActiveIndex] = useState(0)

	useEffect(() => {
		const container = containerRef.current

		if (!container) {
			return
		}

		NativeFancybox.bind(container, '[data-fancybox]', {
			mainClass: 'slider-lightbox',
			Carousel: {
				infinite: false,
			},
		})

		return () => {
			NativeFancybox.unbind(container)
			NativeFancybox.close()
		}
	}, [])

	useEffect(() => {
		if (items.length < 2) {
			return
		}

		const intervalId = window.setInterval(() => {
			setActiveIndex((currentIndex) => (currentIndex + 1) % items.length)
		}, DEFAULT_AUTOPLAY_INTERVAL)

		return () => {
			window.clearInterval(intervalId)
		}
	}, [items.length])

	if (items.length === 0) {
		return null
	}

	return (
		<div className='slider' ref={containerRef} aria-label={ariaLabel}>
			<div className='viewport'>
				<div className='track' style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
					{items.map((item, index) => (
						<div className='slide' key={item.imageUrl}>
							<div className='item'>
								<a
									href={item.imageUrl}
									data-fancybox={fancyboxGroupName}
									data-caption={item.imageCaption || item.imageAlt}
									aria-label={`Abrir captura ${index + 1} da galeria`}>
									<img src={item.imageUrl} alt={item.imageAlt} />
								</a>
							</div>
						</div>
					))}
				</div>
			</div>

			{items.length > 1 ? (
				<div className='dots' aria-label='Selecionar item da galeria'>
					{items.map((item, index) => (
						<button
							key={item.imageUrl}
							type='button'
							className={activeIndex === index ? 'active' : undefined}
							onClick={() => setActiveIndex(index)}
							aria-current={activeIndex === index ? 'true' : undefined}
							aria-label={`Ver item ${index + 1}`}
						/>
					))}
				</div>
			) : null}
		</div>
	)
}

