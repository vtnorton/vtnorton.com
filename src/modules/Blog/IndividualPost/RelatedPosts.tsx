import { Post } from '../../../models/Post'
import { BlogGridItem } from '../Grid/BlogGridItem'

export const RelatedPosts = ({ post }: { post: Post }) => {
	return (
		<div className='blog-grid-3'>
			<BlogGridItem item={post} />
			<BlogGridItem item={post} />
			<BlogGridItem item={post} />
		</div>
	)
}