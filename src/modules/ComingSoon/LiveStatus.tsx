import { useElapsedTime } from './useElapsedTime'

type LiveStatusProps = {
	lastUpdatedAt: string
}

const timestampFormat = new Intl.DateTimeFormat('en-GB', {
	day: 'numeric',
	month: 'short',
	year: 'numeric',
	hour: '2-digit',
	minute: '2-digit',
	hourCycle: 'h23',
	timeZone: 'America/Sao_Paulo',
	timeZoneName: 'shortOffset',
})

export const LiveStatus = ({ lastUpdatedAt }: LiveStatusProps) => {
	const elapsed = useElapsedTime(lastUpdatedAt)

	return (
		<p className='live-status'>
			<span className='dot' aria-hidden='true' />
			<span>
				last updated <span className='elapsed'>{elapsed}</span> ago
			</span>
			<time className='timestamp' dateTime={lastUpdatedAt}>
				{timestampFormat.format(new Date(lastUpdatedAt))}
			</time>
		</p>
	)
}
