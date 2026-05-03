import { Skeleton, SkeletonItem } from '@fluentui/react-components'
import { Section } from '../../../components/Section'

export const PostFeedItemLoader = () => {
	return (
		<Section>
			<Skeleton>
				<div className='feed-item'>
					<SkeletonItem size={128} className='cover-image' />
					<div className='intro'>
						<SkeletonItem size={16} style={{ width: '96px' }} />
						<SkeletonItem className='skeleton-title' size={32} />
						<SkeletonItem size={16} />
						<SkeletonItem size={16} />
						<SkeletonItem size={16} style={{ width: '75%' }} />
						<div className='feed-footer'>
							<div className='topic-list'>
								<SkeletonItem size={16} style={{ width: '58px' }} />
								<SkeletonItem size={16} style={{ width: '72px' }} />
							</div>
							<SkeletonItem size={16} style={{ width: '120px' }} />
						</div>
					</div>
				</div>
			</Skeleton>
		</Section>
	)
}
