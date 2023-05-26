import React, { useRef, useEffect } from 'react'

import { Fancybox as NativeFancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

function Fancybox(props: any) {
	const containerRef = useRef(null)

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
		<div className='row' ref={containerRef}>
			{props.children}
		</div>
	)
}

export default Fancybox
