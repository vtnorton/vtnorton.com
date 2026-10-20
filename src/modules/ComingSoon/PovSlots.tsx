import { LockIcon } from './LockIcon'

type PovSlotsProps = {
	count: number
}

export const PovSlots = ({ count }: PovSlotsProps) => {
	const positions = Array.from({ length: count }, (_, index) => index + 1)

	return (
		<ol className='pov-slots'>
			{positions.map((position) => (
				<li className='pov-slot' key={position}>
					<span className='head'>
						<span className='position'>{String(position).padStart(2, '0')}</span>
						<LockIcon />
					</span>
					{/* <span className='condition'>unlocks at —</span> */}
					<span className='condition'>soon</span>
				</li>
			))}
		</ol>
	)
}
