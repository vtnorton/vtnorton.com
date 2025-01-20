import React from 'react'

import { BlogGridItem } from '../BlogGridItem/BlogGridItem'
import { BlogGridItemSkeleton } from './BlogGridItemSkeleton'
import { Changelog } from '../../../models/Changelog'
import { Post } from '../../../models/Post'

export const BlogGrid = ({ posts }: { posts: Array<Post | Changelog> }) => {
	if (posts.length === 0)
		return <BlogGridItemSkeleton />

	return (
		<div className='blog-grid'>
			{posts.map((post: Post | Changelog) => (
				<BlogGridItem key={post.id} item={post} />
			))}
		</div>
	)
}
