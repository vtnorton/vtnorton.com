import React, { useContext } from 'react'
import { VtnortonContext } from '../../provider/VtnortonContextProvider'
import { LogoComponentProps } from './LogoComponentProps'

export const LogoComponent = (props: LogoComponentProps) => {
	const { relatedPostVisibility, isPostPage } = useContext(VtnortonContext)
	let classesName = props.componentName === 'PostDetail' ? 'logo-post' : 'container logo'
	const logoUrl = relatedPostVisibility ? '/img/logo-color-250.png' : '/img/logo-white-250.png'
	const postPageClass = isPostPage ? 'logo-on-post' : ''

	if (relatedPostVisibility) classesName += ' colorized'
	return (
		<a href='/' className={classesName}>
			<img src={logoUrl} className={postPageClass} alt='logo da vtnorton' />
		</a>
	)
}
