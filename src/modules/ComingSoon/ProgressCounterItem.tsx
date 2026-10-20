import type { ProgressCounter } from '../../types/ComingSoonStatus'
import { CountingProgress } from './CountingProgress'

type ProgressCounterItemProps = {
	counter: ProgressCounter
	order: number
}

export const ProgressCounterItem = ({ counter, order }: ProgressCounterItemProps) => {
	const { category, progress } = counter

	if (!progress) {
		return (
			<li className='counter is-pending'>
				<span className='label'>{category}</span>
				<span className='value'>soon</span>
				<span className='bar' aria-hidden='true' />
			</li>
		)
	}

	return (
		<li className='counter'>
			<span className='label'>{category}</span>
			<CountingProgress progress={progress} order={order} />
		</li>
	)
}
