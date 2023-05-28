import * as React from 'react'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BlogGrid } from './BlogGrid/BlogGrid'

export const BlogComponent = (props: any) => {
	return (
		<div className='container'>
			<section>
				<div className='blog'>
					<h1>📰 artigos do blog</h1>
					<BlogGrid posts={props.posts} />
					<div className='right'>
						<div className='space-long'></div>
						<a href='/blog' className='btn btn-primary'>
							<FontAwesomeIcon icon={faChevronRight} />
							ver_tudo;
						</a>
					</div>
					<div className='clean'></div>
				</div>
			</section>
		</div>
	)
}
