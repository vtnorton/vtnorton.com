import Image from 'next/image'
import React, { useContext } from 'react'

import colorfulLogo from '../../../public/img/logo-color-250.png'
import whiteLogo from '../../../public/img/logo-white-250.png'
import { VtnortonContext } from '../../provider/VtnortonContextProvider'
import { LogoComponentProps } from './LogoComponentProps'
import Link from 'next/link'

export const LogoComponent = (props: LogoComponentProps) => {
	const { relatedPostVisibility, showLogo } = useContext(VtnortonContext)

	if (!showLogo)
		return <></>
	let classesName = props.componentName === 'PostDetail' ? 'logo-post' : 'container logo'
	if (relatedPostVisibility)
		classesName = 'logo-post colorized'

	const logo = relatedPostVisibility ? colorfulLogo : whiteLogo
	return (
		<Link href='/' className={classesName}>
			<Image src={logo} alt='logo da vtnorton' />
		</Link>
	)
}
