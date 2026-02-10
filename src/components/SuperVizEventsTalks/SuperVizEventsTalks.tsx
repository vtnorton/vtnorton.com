import { Tag } from '@fluentui/react-components'
import { CalendarRegular, PinGlobeRegular, VideoPersonCallRegular } from '@fluentui/react-icons'
import { Button } from '../Button'

export const SuperVizEventsTalks = ({ date, talkTitle, onsite, id }: { date: string, talkTitle: string, onsite?: boolean, id: string }) => {
	return (
		<>
			<div className='superviz-events-talk'>
				{onsite ?
					(<Tag
						icon={<PinGlobeRegular />}
						appearance='outline'
						size='small'
						style={{
							marginRight: '.5rem',
						}}
						shape='circular'>On-site</Tag>) :
					(<Tag
						icon={<VideoPersonCallRegular />}
						appearance='outline'
						size='small'
						style={{
							marginRight: '.5rem',
						}}
						shape='circular'>Remote</Tag>)}
				<Tag
					icon={<CalendarRegular />}
					appearance='outline'
					size='small'
					shape='circular'>{date}</Tag>

			</div>
			<Button as='a' href={`/palestra/${id}`} size='small' appearance='secondary' shape='square'
				style={{
					marginRight: '.5rem',
				}}><strong>{talkTitle}</strong></Button>
		</>
	)
}