import type { Post } from '../../../models/Post'
import { BlogGridItem } from './BlogGridItem'
import { BlogGridItemSkeleton } from './BlogGridItemSkeleton'

export const BlogGrid = ({ posts }: { posts: Post[] }) => {
	if (posts.length === 0)
		return <BlogGridItemSkeleton />

	return (
		<div className='blog-grid'>
			{posts.map((post) => (
				<BlogGridItem key={post.id} item={post} />
			))}
		</div>
	)
}
