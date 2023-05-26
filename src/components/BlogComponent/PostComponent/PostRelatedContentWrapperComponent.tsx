import React from 'react'
import { BlogGrid } from '../BlogGrid/BlogGrid'
import { BlogGridItemProps } from '../BlogGridItem/BlogGridItemProps'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const PostRelatedContentWrapperComponent = ({ posts }: { posts: BlogGridItemProps[] }) => {
	return (
		<div className='post-related-list'>
			<div className='row'>
				<div className='col-md-10'>
					<h2>📰 Outras postagens</h2>
				</div>
			</div>
			<BlogGrid posts={posts} />

			<div className='row'>
				<div className='right'>
					<div className='space-long'></div>
					<a href='/blog' className='btn btn-primary'>
						<FontAwesomeIcon icon={faChevronRight} />
						ver_tudo;
					</a>
				</div>
			</div>
		</div>
	)
}
