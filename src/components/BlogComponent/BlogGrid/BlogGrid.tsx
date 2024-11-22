import React from 'react'

import { BlogGridItem } from '../BlogGridItem/BlogGridItem'
import { BlogGridItemProps } from '../BlogGridItem/BlogGridItemProps'
import { BlogGridItemSkeleton } from './BlogGridItemSkeleton'

export const BlogGrid = ({ posts }: { posts: BlogGridItemProps[] }) => {
	if (posts.length === 0)
		return <BlogGridItemSkeleton />

	return (
		<div className='blog-grid'>
			{posts.map((post: BlogGridItemProps) => (
				<BlogGridItem key={post.id} id={post.id} title={post.title} image={post.image} link={post.link} hashtags={post.hashtags} date={post.date} type={post.type} />
			))}
		</div>
	)
}
