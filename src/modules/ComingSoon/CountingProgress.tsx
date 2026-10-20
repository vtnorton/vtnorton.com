import type { Progress } from '../../types/ComingSoonStatus'
import { useCountUp } from './useCountUp'

type CountingProgressProps = {
	progress: Progress
	order: number
}

const TOTAL_COUNT_MS = 1400
const COMPLETED_COUNT_MS = 3200
const STAGGER_MS = 150
const MIN_DIGITS = 3

const padCount = (value: number, digits: number) => String(value).padStart(digits, '0')

const fillWidth = (completed: number, total: number) => {
	if (total === 0) return '0%'
	return `${(completed / total) * 100}%`
}

export const CountingProgress = ({ progress, order }: CountingProgressProps) => {
	const delayMs = order * STAGGER_MS
	const completed = useCountUp(progress.completed, COMPLETED_COUNT_MS, delayMs)
	const total = useCountUp(progress.total, TOTAL_COUNT_MS, delayMs)
	const digits = Math.max(MIN_DIGITS, String(progress.total).length)

	return (
		<>
			<span className='value'>
				<span className='visually-hidden'>{`${progress.completed} / ${progress.total}`}</span>
				<span aria-hidden='true'>
					<span className='completed'>{padCount(completed, digits)}</span>{' '}
					<span className='total'>/ {padCount(total, digits)}</span>
				</span>
			</span>
			<span className='bar' aria-hidden='true'>
				<span className='fill' style={{ width: fillWidth(completed, progress.total) }} />
			</span>
		</>
	)
}
