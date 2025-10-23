import React from 'react'
import { useLayout } from '../providers/LayoutProvider'

export default function Index() {
	const { sidepane: sidebar } = useLayout()

	sidebar.explodeIt()

	return (
		<div className='promo'>

		</div>
	)
}
