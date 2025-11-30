import { ReactNode, useRef } from 'react'
import { useLayout } from '../../providers/LayoutProvider'
import { IoApps, IoClose, IoEllipsisVerticalSharp, IoExit } from 'react-icons/io5'
import { SidepaneContent } from './SidepaneContent'

export const SidePane = ({
	children,
}: {
	children?: ReactNode
}) => {
	const { sidepane } = useLayout()
	const timeoutRef = useRef<NodeJS.Timeout | null>(null)

	const handleMouseEnter = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current)
			timeoutRef.current = null
		}

		if (sidepane.state !== 'exploded') {
			sidepane.expand()
		}
	}

	const handleMouseLeave = () => {
		if (sidepane.state !== 'exploded' && window.innerWidth >= 650) {
			timeoutRef.current = setTimeout(() => {
				sidepane.collapse()
			}, 100)
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
				<div className='photo'>

				</div>

				<div className='inner'>
					<div className='logo'>
						<img src='/img/logo/logo-colorful.svg' alt='Vitor Norton Logo' />
					</div>

					<div className='action'>
						{sidepane.state === 'collapsed' ?
							<IoApps className='animate__animated animate__fadeIn' size={25} color='#162C44' /> :
							<IoClose className='animate__animated animate__fadeIn' size={30} color='#162C44' onClick={() => sidepane.collapse()} />
						}
					</div>
				</div>

			</nav>
			<SidepaneContent onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
			<main className='panel' onClick={handleMainClick}>
				{children}
			</main>
		</div>)
}