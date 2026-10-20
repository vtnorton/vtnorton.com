import type { ProgressCounter } from '../../types/ComingSoonStatus'

type ProgressCountersProps = {
	counters: ProgressCounter[]
}

const padCount = (value: number) => String(value).padStart(3, '0')

const progressWidth = (counter: ProgressCounter) => `${(counter.completed / counter.total) * 100}%`

export const ProgressCounters = ({ counters }: ProgressCountersProps) => {
	return (
		<ul className='counters'>
			{counters.map((counter) => (
				<li className='counter' key={counter.category}>
					<span className='label'>{counter.category}</span>
					<span className='value'>
						<span className='completed'>{padCount(counter.completed)}</span>{' '}
						<span className='total'>/ {padCount(counter.total)}</span>
					</span>
					<span className='bar' aria-hidden='true'>
						<span className='fill' style={{ width: progressWidth(counter) }} />
					</span>
				</li>
			))}
		</ul>
	)
}
