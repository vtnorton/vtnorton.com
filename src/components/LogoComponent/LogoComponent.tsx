import React, { useContext } from 'react'

import { VtnortonContext } from '../../provider/VtnortonContextProvider'
import { LogoComponentProps } from './LogoComponentProps'

export const LogoComponent = (props: LogoComponentProps) => {
	const { relatedPostVisibility, showLogo } = useContext(VtnortonContext)

	if (!showLogo) return <></>
	let classesName = props.componentName === 'PostDetail' ? 'logo-post' : 'container logo'
	if (relatedPostVisibility) classesName = 'logo-post colorized'

	const logoUrl = relatedPostVisibility ? '/img/logo-color-250.png' : '/img/logo-white-250.png'
	return (
		<a href='/' className={classesName}>
			<img src={logoUrl} alt='logo da vtnorton' />
		</a>
	)
}
