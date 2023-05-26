import React from 'react'
import { BlogGridItemProps } from '../BlogGridItem/BlogGridItemProps'
import { BlogGridItem } from '../BlogGridItem/BlogGridItem'

export const BlogGrid = ({ posts }: { posts: BlogGridItemProps[] }) => {
	return (
		<div className='blog-grid row'>
			{posts.map((post: BlogGridItemProps) => (
				<BlogGridItem key={post.id} id={post.id} title={post.title} image={post.image} link={post.link} hashtags={post.hashtags} />
			))}
		</div>
	)
}
