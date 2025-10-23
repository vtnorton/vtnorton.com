import { ReactNode } from 'react'
import { SocialMedias } from '../Socials'
import { SidePaneCard } from './SidePaneCard'
import { useLayout } from '../../providers/LayoutProvider'
import { IoMenuSharp } from 'react-icons/io5'

export const SidePane = ({
	children,
}: {
	children?: ReactNode
}) => {
	const { sidepane } = useLayout()

	const handleMouseEnter = () => {
		if (sidepane.state !== 'exploded') {
			sidepane.expand()
		}
	}

	const handleMouseLeave = () => {
		if (sidepane.state !== 'exploded' && window.innerWidth >= 650) {
			sidepane.collapse()
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
				<IoMenuSharp size={30} />
			</div>
			<nav
				className={sidepane.state}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className='cards'>
					<SidePaneCard image='blog' title={'Blog pessoal'} description={'Meu espaço sem compromisso na web, que talvez não devesse estar aqui'} link={'/blog'} />
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