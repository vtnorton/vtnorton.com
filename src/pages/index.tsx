import React from 'react'
import { useLayout } from '../providers/LayoutProvider'
import { ContentSEO } from '../database/seo'

export default function Index() {
	const { sidepane: sidebar } = useLayout()

	sidebar.explodeIt()

	return (
		<>
			<ContentSEO title='Vitor Norton | Developer Relations Engineer' />
			<div className='promo'>

			</div>
		</>
	)
}
