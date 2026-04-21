import { getDate } from '../../../utils/dateUtils'
import { NotionPostContent } from './NotionPostContent'
import { NoiseImage } from '../../../components/NoiseImage'
import { Changelog } from '../../../models/Changelog'

export const IndividualChangelog = ({ changelog }: { changelog: Changelog }) => {
	return (
		<article className='post' key={`${changelog.id}_content`} >
			<div className='header'>
				<NoiseImage src={changelog.cover} alt={changelog.title} />
				<div className='overlay' />
				<div className='info'>
					<div className='info-title'>
						<h1>{changelog.title}</h1>
						<div className='meta'>
							Lançado <span className='meta-date'>{getDate(changelog.date)}</span>
						</div>
					</div>
				</div>
			</div>
			<NotionPostContent content={changelog.content} />
		</article>
	)
}
