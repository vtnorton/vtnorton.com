import { PlaylistItem } from '../../../interfaces/YouTube/PlaylistItem'

export const BookClubVideoItemComponent = (props: PlaylistItem) => {
	return (
		<a href={props.link} target='_blank' className='video-item' rel='noopener noreferrer'>
			<h5>🔗 {props.title}</h5>
		</a>
	)
}
