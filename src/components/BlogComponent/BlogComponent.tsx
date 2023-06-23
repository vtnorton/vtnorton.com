import * as React from 'react'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BlogGrid } from './BlogGrid/BlogGrid'
import { useEffect, useState } from 'react'
import { BlogGridItemProps } from './BlogGridItem/BlogGridItemProps'
import axios from 'axios'
import { BlogGridItemSkeleton } from './BlogGrid/BlogGridItemSkeleton'

export const BlogComponent = () => {
	const [posts, setPosts] = useState<BlogGridItemProps[]>([])

	useEffect(() => {
		if (posts.length === 0) {
			axios
				.get('/api/post', {
					headers: {
						vtnPostQuantity: 12,
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

	const renderPosts = () => {
		if (posts.length !== 0) return <BlogGrid posts={posts} />

		return <BlogGridItemSkeleton />
	}

	return (
		<div className='container'>
			<section>
				<div className='blog'>
					<h1>📰 artigos do blog</h1>
					{renderPosts()}
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
