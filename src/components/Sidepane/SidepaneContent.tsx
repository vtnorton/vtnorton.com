import { SocialMedias } from '../Socials'
import { MenuLink } from './MenuLink'
import { FiArrowUpRight } from "react-icons/fi";

interface SidepaneContentProps {
	onMouseEnter?: () => void
	onMouseLeave?: () => void
}

export const SidepaneContent = ({ onMouseEnter, onMouseLeave }: SidepaneContentProps) => {
	return (
		<div className='content' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			<a className='intro'>
				<div className='intro-content'>
					Vitor Norton
					<FiArrowUpRight size={20} color='#fff' />
				</div>
			</a>
			<div className='cta'>
				<p>Blah</p>
			</div>
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
