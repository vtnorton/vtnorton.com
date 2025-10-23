import { ReactNode } from 'react'
import { SocialMedias } from '../Socials'
import { SidePaneCard } from './SidePaneCard'
import { useLayout } from '../../providers/LayoutProvider'

export const SidePane = ({
	children,
}: {
	children?: ReactNode
}) => {
	const { sidepane } = useLayout()
	return (
		<div className='sidepane'>
			<nav
				className={sidepane.state}
				onMouseEnter={sidepane.expand}
				onMouseLeave={sidepane.collapse}
			>
				<div className='cards'>
					<SidePaneCard image='blog' title={'Blog pessoal'} description={'Meu espaço sem compromisso na web, que talvez não devesse estar aqui'} link={'/blog'} />
				</div>
				<div className='footer'>
					<SocialMedias />
					<p><small>no downtime for hustle-as-a-service</small></p>
				</div>
			</nav>
			<main>
				{children}
			</main>
		</div>)
}