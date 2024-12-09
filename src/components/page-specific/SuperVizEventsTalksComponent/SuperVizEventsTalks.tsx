import { Button, Tag } from '@fluentui/react-components'
import { CalendarRegular, PinGlobeRegular, SlideTextPersonRegular, VideoPersonCallRegular } from '@fluentui/react-icons'

export const SuperVizEventsTalks = ({ date, talkTitle, onsite, id }: { date: string, talkTitle: string, onsite?: boolean, id: string }) => {
	return (
		<div className='superviz-events-talk'>
			<Button
				icon={<SlideTextPersonRegular />}
				as='a'
				href={`/portfolio/palestra/${id}`}
				appearance='outline'
				style={{
					marginRight: '.5rem',
				}}
				shape='circular'><strong>{talkTitle}</strong></Button>
			{onsite ?
				(<Tag
					icon={<PinGlobeRegular />}
					appearance='outline'
					style={{
						marginRight: '.5rem',
					}}
					shape='circular'>On-site</Tag>) :
				(<Tag
					icon={<VideoPersonCallRegular />}
					appearance='outline'
					style={{
						marginRight: '.5rem',
					}}
					shape='circular'>Remote</Tag>)}
			<Tag
				icon={<CalendarRegular />}
				appearance='outline'
				shape='circular'>{date}</Tag>
		</div>
	)
}