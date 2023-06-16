import { PodcastEpisode } from '../../interfaces/PodcastEpisode'

export const PodcastItem = (props: PodcastEpisode) => {
	const date = new Date(props.date)
	const monthNumber = date.getMonth() + 1
	const month = monthNumber.toString().padStart(2, '0')
	const formatedDate = `${date.getDate().toString().padStart(2, '0')}/${month}/${date.getFullYear()}`
	return (
		<div className='podcast-item'>
			<a href={props.link} target='_blank' rel='noreferrer'>
				<img src={props.coverURL} alt={props.title} />
				<h4>{props.title}</h4>
				<small>
					{formatedDate} @ {props.feedName}
				</small>
			</a>
		</div>
	)
}
