import { Skeleton, SkeletonItem } from '@fluentui/react-components'

export const BlogGridItemSkeleton = () => {
	return (
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
	)
}
