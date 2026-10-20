import type { ProgressCounter } from '../../types/ComingSoonStatus'
import { ProgressCounterItem } from './ProgressCounterItem'

type ProgressCountersProps = {
	counters: ProgressCounter[]
}

export const ProgressCounters = ({ counters }: ProgressCountersProps) => {
	return (
		<ul className='counters'>
			{counters.map((counter, order) => (
				<ProgressCounterItem counter={counter} order={order} key={counter.category} />
			))}
		</ul>
	)
}
