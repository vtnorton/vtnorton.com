import { Skeleton, SkeletonItem } from '@fluentui/react-components'
import { Section } from '../../../components/Section'

export const PostFeedItemLoader = () => {
	return (
		<Section>
			<Skeleton>
				<>
					<div className='feed-item'>
						<SkeletonItem size={128} className='cover-image' />
						<div className='intro'>
							<SkeletonItem className='skeleton-title' size={32} />
							<p className='metadata'><SkeletonItem size={16} /></p>
							<div className='tag-group'>
								<SkeletonItem size={20} />
								<SkeletonItem size={20} />
								<SkeletonItem size={20} />
							</div>
						</div>
					</div>

					<p>
						<SkeletonItem size={16} />
						<SkeletonItem size={16} />
						<SkeletonItem size={16} />
						<SkeletonItem size={16} />
					</p>
				</>
			</Skeleton>
		</Section>
	)
}