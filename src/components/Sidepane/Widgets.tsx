import { FiArrowUpRight } from 'react-icons/fi'
import { BookCall } from './Widgets/BookCall'
import { useLayout } from '../../providers/LayoutProvider'
import { HTMLAttributes, ReactNode } from 'react'

export const Widget = ({ primary = false, secondary = false }: { primary?: boolean, secondary?: boolean }) => {
	return (
		<>
			{!secondary && <BookCall usePrimary={true} />}
			{!primary && <BookCall usePrimary={false} />}
		</>
	)
}

export const WidgetPrimaryWrapper = ({ children }: { children: ReactNode }) => {
	const { sidepane } = useLayout()
	return (
		<div className='widget-primary' onMouseEnter={() => sidepane.setWidgetHovered(true)} onMouseLeave={() => sidepane.setWidgetHovered(false)}>
			<div className='widget-primary-content'>
				{children}
				<FiArrowUpRight size={20} color='#fff' />
			</div>
		</div>
	)
}

export const WidgetSecondaryWrapper = ({ children, ...props }: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className='widget-secondary' {...props}>
			{children}
		</div>
	)
}