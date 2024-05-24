import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import * as React from 'react'
import { useEffect, useState } from 'react'

import { BlogGrid } from './BlogGrid/BlogGrid'
import { BlogGridItemProps } from './BlogGridItem/BlogGridItemProps'

export const BlogComponent = () => {
	const [posts, setPosts] = useState<BlogGridItemProps[]>([])

	useEffect(() => {
		if (posts.length === 0) {
			axios
				.get('/api/post', {
					params: {
						quantity: 12,
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
		<section>
			<div className='blog'>
				<h1>📰 artigos do blog</h1>
				<BlogGrid posts={posts} />
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
	)
}
