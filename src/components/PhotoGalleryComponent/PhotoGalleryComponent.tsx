import { Fancybox as NativeFancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import React, { useEffect, useRef } from 'react'

export const PhotoGallery = (props: any) => {
	const containerRef = useRef(null)
	const numberOfPhotos = props.children.length
	const photosPerRow = numberOfPhotos % 4 === 0 ? 4 : numberOfPhotos % 5 === 0 ? 5 : 10
	const className = photosPerRow === 10 ? '' : `row-photos-${photosPerRow}`


	useEffect(() => {
		const container = containerRef.current

		const delegate = props.delegate || '[data-fancybox]'
		const options = props.options || {}

		NativeFancybox.bind(container, delegate, options)

		return () => {
			NativeFancybox.unbind(container)
			NativeFancybox.close()
		}
	})

	return (
		<div className={'photo-gallery ' + className} ref={containerRef}>
			{props.children}
		</div>
	)
}