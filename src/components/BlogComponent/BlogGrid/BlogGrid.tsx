import React from 'react'
import { BlogGridItemProps } from '../BlogGridItem/BlogGridItemProps'
import { BlogGridItem } from '../BlogGridItem/BlogGridItem'

export const BlogGrid = ({ posts }: { posts: BlogGridItemProps[] }) => {
	return (
		<div className='blog-grid row'>
			{posts.map((post: BlogGridItemProps) => (
				<div key={post.id}>
					<BlogGridItem id={post.id} title={post.title} image={post.image} link={post.link} hashtags={post.hashtags} />
				</div>
			))}
		</div>
	)
}
