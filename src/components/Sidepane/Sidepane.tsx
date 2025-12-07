import { ReactNode, useEffect, useRef, useState } from 'react'
import { useLayout } from '../../providers/LayoutProvider'
import { IoApps, IoClose } from 'react-icons/io5'
import { SidepaneContent } from './SidepaneContent'
import { Widget } from './Widgets'
import { Logo } from './Logo'

export const SidePane = ({
	children,
}: {
	children?: ReactNode
}) => {
	const { sidepane } = useLayout()
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
	const [isLargeScreen, setIsLargeScreen] = useState(false)
	const [windowWidth, setWindowWidth] = useState(0)

	useEffect(() => {
		const handleResize = () => {
			const large = window.innerWidth >= sidepane.autoExpandBreakpoint
			setWindowWidth(window.innerWidth)
			setIsLargeScreen(large)

			if (large) {
				if (sidepane.state !== 'expanded' && sidepane.state !== 'exploded') {
					sidepane.expand()
				}
			}
		}

		window.addEventListener('resize', handleResize)
		handleResize()

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [sidepane])

	const handleMouseEnter = () => {
		if (isLargeScreen) return

		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current)
			timeoutRef.current = null
		}

		if (sidepane.state !== 'exploded') {
			sidepane.expand()
		}
	}

	const handleMouseLeave = () => {
		if (isLargeScreen) return

		if (sidepane.state !== 'exploded' && !sidepane.isPinned) {
			timeoutRef.current = setTimeout(() => {
				sidepane.collapse()
			}, 100)
		}
	}

	const handleMainClick = () => {
		if (!isLargeScreen) {
			sidepane.unpin()
			sidepane.collapse()
		}
	}

	const handlePin = () => {
		sidepane.expand()
		sidepane.pin()
	}

	const handleUnpin = () => {
		sidepane.unpin()
		sidepane.collapse()
	}

	return (
		<div className={'sidepane break-point-' + sidepane.autoExpandBreakpoint}>
			<nav
				className={sidepane.state}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}>
				<div className={`photo ${sidepane.isWidgetHovered ? 'hovered' : ''}`}>

				</div>

				<div className='inner'>
					{windowWidth >= 650 ? (
						<Logo />
					) : (
						<Widget primary={true} />
					)}

					<div className='action' style={{ display: isLargeScreen || sidepane.state === 'exploded' ? 'none' : 'flex' }}>
						{!sidepane.isPinned ?
							<IoApps className='animate__animated animate__fadeIn' size={25} color='#162C44' onClick={handlePin} /> :
							<IoClose className='animate__animated animate__fadeIn' size={30} color='#162C44' onClick={handleUnpin} />
						}
					</div>
				</div>

			</nav>
			<SidepaneContent
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				windowWidth={windowWidth}
			/>
			<main className='panel' onClick={handleMainClick}>
				{children}
			</main>
		</div>)
}