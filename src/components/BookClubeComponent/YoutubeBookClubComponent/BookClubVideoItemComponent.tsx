import { PlaylistItem } from '../../../interfaces/YouTube/PlaylistItem'

export const BookClubVideoItemComponent = (props: PlaylistItem) => {
	return (
		<a href={props.link} target='_blank' className='video-item'>
			<h5>🔗 {props.title.replace('[Clube do livro]', '')}</h5>
		</a>
	)
}
