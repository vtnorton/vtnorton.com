import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { BlogGrid } from '../BlogGrid/BlogGrid'
import { BlogGridItemProps } from '../BlogGridItem/BlogGridItemProps'

export const PostRelatedContentWrapperComponent = () => {
	const [posts, setPosts] = useState<BlogGridItemProps[]>([])

	useEffect(() => {
		if (posts.length === 0) {
			axios
				.get('/api/post', {
					params: {
						quantity: 42,
					},
				})
				.then((response) => {
					setPosts(response.data)
				})
				.catch((error) => {
					console.error('Erro ao obter os dados da API:', error)
				})
		}
	}, [])

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
