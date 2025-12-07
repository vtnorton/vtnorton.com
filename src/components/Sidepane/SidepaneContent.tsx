import { SocialMedias } from '../Socials'
import { Logo } from './Logo'
import { MenuLink } from './MenuLink'
import { Widget } from './Widgets'

interface SidepaneContentProps {
	onMouseEnter?: () => void
	onMouseLeave?: () => void
	windowWidth: number
}

const SidePaneInnerContent = ({ windowWidth }: { windowWidth: number }) => {
	return (
		<div className='sidepane-inner'>
			<Widget secondary={windowWidth <= 650} />
			<div className='menu'>
				<MenuLink title={'Home'} link={'/'} />
				{/* <MenuLink title={'Portfólio'} link={'/portfolio'} /> */}
				<MenuLink title={'Meu blog'} link={'/blog'} />
			</div>
			<div className='footer'>
				<img src='/img/other/barcode.png' alt='Barcode' className='barcode' />

				<div className='contact-info'>
					<a href='https://github.com/vtnorton' className='handle text'>@vt_norton</a>
					<a href='mailto:vitor@vtnorton.com' className='email'>vitor@vtnorton.com</a>
				</div>

				<div className='text'>
					<small>
						© 2025 vtnorton.
						<br />no downtime for hustle-as-a-service.
						<br /> All rights reserved.
					</small>
				</div>

				<SocialMedias size={20} />
			</div>
		</div>
	)
}

export const SidepaneContent = ({ onMouseEnter, onMouseLeave, windowWidth }: SidepaneContentProps) => {
	return (
		<div className='content' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			{windowWidth <= 650 ? (
				<div className='force-vertical'>
					<Logo />
					<SidePaneInnerContent windowWidth={windowWidth} />
				</div>
			) : (
				<SidePaneInnerContent windowWidth={windowWidth} />
			)}

		</div>
	)
}
