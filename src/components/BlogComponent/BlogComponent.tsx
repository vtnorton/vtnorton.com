import axios from 'axios'
import * as React from 'react'
import { useEffect, useState } from 'react'

import { BlogGrid } from './BlogGrid/BlogGrid'
import { BlogGridItemProps } from './BlogGridItem/BlogGridItemProps'
import { Button } from '@fluentui/react-components'
import { News20Regular } from '@fluentui/react-icons'

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
		<section className='section'>
			<div className='blog'>
				<h1>📰 artigos do blog</h1>
				<BlogGrid posts={posts} />
				<div className='right'>
					<div className='space-long'></div>
					<Button as='a' href='/blog' icon={<News20Regular />} size='large' appearance='primary' shape='square'>ver_tudo();</Button>
				</div>
				<div className='clean'></div>
			</div>
		</section>
	)
}
