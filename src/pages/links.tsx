import { useContext } from 'react'

import { VtnButtonComponent, VtnButtonComponentPros } from '../components'
import { primaryLinks, secondaryLinks } from '../database/QuickLinksShare'
import { VtnortonContext } from '../provider/VtnortonContextProvider'

export default function Links() {
	const { showLogo, setShowLogo } = useContext(VtnortonContext)
	setShowLogo(false)
	return (
		<div className='links'>
			<div className='overlay'></div>
			<div className='links-wrapper'>
				{primaryLinks.map((item: VtnButtonComponentPros, index: number) => {
					return <VtnButtonComponent key={index} text={item.text} icon={item.icon} url={item.url} />
				})}

				<div className='space-long'></div>
				<div className='row'>
					{secondaryLinks.map((item: VtnButtonComponentPros, index: number) => {
						return (
							<div key={index} className='col-xs-6'>
								<VtnButtonComponent text={item.text} icon={item.icon} url={item.url} />
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
