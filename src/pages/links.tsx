import { useContext } from 'react'

import { primaryLinks, secondaryLinks } from '../database/QuickLinksShare'
import { VtnortonContext } from '../provider/VtnortonContextProvider'
import { Button } from '@fluentui/react-components'

export default function Links() {
	const { setShowLogo } = useContext(VtnortonContext)
	setShowLogo(false)
	return (
		<div className='links'>
			<div className='overlay'></div>
			<div className='links-wrapper'>
				{primaryLinks.map((item: any, index: number) => {
					return <Button as='a' key={index} href={item.url} size='large' appearance='primary' shape='square'>{item.text}</Button>
				})}

				<div className='space-long'></div>
				<div className='row'>
					{secondaryLinks.map((item: any, index: number) => {
						return (
							<div key={index} className='col-xs-6'>
								<Button as='a' href={item.url} size='large' appearance='primary' shape='square'>{item.text}</Button>
							</div>
						)
					})}
				</div>
				<div className='logo'>
					<img src='/img/logo-white.png' alt='logo da empresa vtnorton' />
				</div>
			</div>
		</div>
	)
}
