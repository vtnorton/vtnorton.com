import React, { useEffect, useState } from 'react'
import { BlogGrid } from '../BlogGrid/BlogGrid'
import { BlogGridItemProps } from '../BlogGridItem/BlogGridItemProps'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { BlogGridItemSkeleton } from '../BlogGrid/BlogGridItemSkeleton'

export const PostRelatedContentWrapperComponent = () => {
	const [posts, setPosts] = useState<BlogGridItemProps[]>([])

	useEffect(() => {
		if (posts.length === 0) {
			axios
				.get('/api/post')
				.then((response) => {
					// setPosts(response.data)
				})
				.catch((error) => {
					console.log('Erro ao obter os dados da API:', error)
				})
			console.log('bateu na api')
		}
	}, [])

	const renderPosts = () => {
		if (posts.length !== 0) return <BlogGrid posts={posts} />

		return <BlogGridItemSkeleton />
	}

	return (
		<div className='post-related-list'>
			<div className='row'>
				<div className='col-md-10'>
					<h2>📰 Outras postagens</h2>
				</div>
			</div>

			{renderPosts()}

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
