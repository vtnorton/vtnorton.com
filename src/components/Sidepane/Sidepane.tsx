import { ReactNode, useRef } from 'react'
import { SocialMedias } from '../Socials'
import { SidePaneCard } from './SidePaneCard'
import { useLayout } from '../../providers/LayoutProvider'
import { IoChevronForwardCircleOutline, IoEllipsisVerticalSharp } from 'react-icons/io5'
import Lottie from 'lottie-react'
import logoAnimated from './../../assets/logo-coloful.json'
import sidebarLogo from './../../assets/sidebar-logo.json'

export const SidePane = ({
	children,
}: {
	children?: ReactNode
}) => {
	const { sidepane } = useLayout()
	const lottieRef = useRef<any>(null)

	const handleMouseEnter = () => {
		if (sidepane.state !== 'exploded') {
			sidepane.expand()
			lottieRef.current?.play()
		}
	}

	const handleMouseLeave = () => {
		if (sidepane.state !== 'exploded' && window.innerWidth >= 650) {
			sidepane.collapse()
			lottieRef.current?.stop()
		}
	}

	const handleMainClick = () => {
		if (window.innerWidth < 650) {
			sidepane.collapse()
		}
	}

	return (
		<div className='sidepane'>
			<div className='hamburguer-menu' onClick={() => sidepane.expand()}>
				<IoEllipsisVerticalSharp size={20} />
			</div>
			<nav
				className={sidepane.state}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className='logo'>
					<Lottie
						onClick={() => { window.location.href = '/' }}
						className='sidebar-logo'
						animationData={sidebarLogo}
						lottieRef={lottieRef}
						loop={false}
						autoplay={false}
					/>
					<Lottie
						className='exploded-logo'
						animationData={logoAnimated}
						loop={false}
					/>
				</div>
				<div className='cards'>
					<SidePaneCard image='blog' title={'Blog pessoal'} description={'Meu espaço sem compromisso na web, que talvez não devesse estar aqui'} link={'/blog'} />
				</div>
				<div className='expand-sidepane'>
					<IoChevronForwardCircleOutline size={32} />
				</div>
				<div className='footer'>
					<SocialMedias />
					<p><small>no downtime for hustle-as-a-service</small></p>
				</div>
			</nav>
			<main onClick={handleMainClick}>
				{children}
			</main>
		</div>)
}