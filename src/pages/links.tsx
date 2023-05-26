import { VtnButtonComponent, VtnButtonComponentPros } from '../components'
import { primaryLinks, secondaryLinks } from '../database/QuickLinksShare'

export default function Links() {
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
							<div className='col-xs-6'>
								<VtnButtonComponent key={index} text={item.text} icon={item.icon} url={item.url} />
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
