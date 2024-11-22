import { Tag } from '@fluentui/react-components'
import { CalendarRegular, PinGlobeRegular, SlideTextPersonRegular, VideoPersonCallRegular } from '@fluentui/react-icons'

export const SuperVizEventsTalks = ({ date, talkTitle, onsite }: { date: string, talkTitle: string, onsite?: boolean }) => {
	return (
		<div>
			<Tag
				icon={<SlideTextPersonRegular />}
				appearance='outline'
				style={{
					marginRight: '.5rem',
				}}
				shape='circular'><strong>{talkTitle}</strong></Tag>
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