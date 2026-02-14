import { Post } from '../../../models/Post'
import { BlogGridItem } from '../Grid/BlogGridItem'

export const RelatedPosts = ({ posts }: { posts: Post[] }) => {
	if (!posts || posts.length === 0)
		return null

	return (
		<div className='blog-grid-3'>
			{posts.map((post) => (
				<BlogGridItem key={post.slug} item={post} />
			))}
		</div>
	)
}
