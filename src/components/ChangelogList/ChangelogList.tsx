import { Tag } from '@fluentui/react-components'
import { Button } from '../Button'
import type { Changelog } from '../../models/Changelog'
import { getDate } from '../../utils/dateUtils'

export const ChangelogList = ({ changelogs }: { changelogs: Changelog[] }) => {
	if (changelogs.length === 0) return null

	return (
		<ul className='changelog-list'>
			{changelogs.map((item) => (
				<li key={item.id} className='item'>
					<div className='changelog-content'>
						<span className='version'>
							{item.isPreview && <Tag size='small' shape='circular' appearance='outline'>preview</Tag>}
							{item.version}
						</span>
						<span className='meta'>
							<span className='date'>{getDate(item.date)}</span>
						</span>
					</div>

					<Button
						as='a'
						href={item.fullSlug}
						className='action'
						size='small'
						appearance='secondary'
						shape='square'
					>
						Ver detalhes
					</Button>
				</li>
			))}
		</ul>
	)
}
