import type { ComingSoonStatus } from '../../types/ComingSoonStatus'
import { LiveStatus } from './LiveStatus'
import { PovSlots } from './PovSlots'
import { ProgressCounters } from './ProgressCounters'
import { RotatingSubtitle } from './RotatingSubtitle'
import { SectionRule } from './SectionRule'

type ComingSoonProps = {
	status: ComingSoonStatus
}

export const ComingSoon = ({ status }: ComingSoonProps) => {
	return (
		<main className='coming-soon'>
			<header className='masthead'>
				<LiveStatus lastUpdatedAt={status.lastUpdatedAt} />
			</header>

			<div className='cover'>
				<span className='folio'>/001/</span>
				<h1 className='phrase'>
					<span>AT FULL</span> <span>DRAW</span>
				</h1>
				<RotatingSubtitle />
			</div>

			<div>
				<SectionRule folio='/002/' />
				<ProgressCounters counters={status.counters} />
			</div>

			<div>
				<SectionRule folio='/003/' />
				<PovSlots count={status.povSlotCount} />
			</div>
		</main>
	)
}
