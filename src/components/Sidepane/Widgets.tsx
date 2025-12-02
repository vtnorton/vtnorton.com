import { FiArrowUpRight } from 'react-icons/fi'
import { BookCall } from './Widgets/BookCall'
import { useLayout } from '../../providers/LayoutProvider'

export const Widget = () => {
	return (
		<>
			<BookCall usePrimary={true} />
			<BookCall usePrimary={false} />
		</>
	)
}

export const WidgetPrimaryWrapper = ({ children }: { children: React.ReactNode }) => {
	const { sidepane } = useLayout();
	return (
		<div className='widget-primary' onMouseEnter={() => sidepane.setWidgetHovered(true)} onMouseLeave={() => sidepane.setWidgetHovered(false)}>
			<div className='widget-primary-content'>
				{children}
				<FiArrowUpRight size={20} color='#fff' />
			</div>
		</div>
	)
}

export const WidgetSecondaryWrapper = ({ children, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className='widget-secondary' {...props}>
			{children}
		</div>
	)
}