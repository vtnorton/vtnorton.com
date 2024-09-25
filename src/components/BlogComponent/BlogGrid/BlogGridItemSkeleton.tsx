import { Skeleton, SkeletonItem } from '@fluentui/react-components'

export const BlogGridItemSkeleton = () => {
	return (
		<div className='row'>
			<div className='col-md-12'>
				<Skeleton as='div' animation='pulse' appearance='translucent' className='skeleton'>
					<SkeletonItem size={128} />
					<SkeletonItem size={128} />
					<SkeletonItem size={128} />
					<SkeletonItem size={128} />
					<SkeletonItem size={128} />
					<SkeletonItem size={128} />
					<SkeletonItem size={128} />
					<SkeletonItem size={128} />
					<SkeletonItem size={128} />
					<SkeletonItem size={128} />
					<SkeletonItem size={128} />
					<SkeletonItem size={128} />
				</Skeleton>
			</div>
		</div>
	)
}
