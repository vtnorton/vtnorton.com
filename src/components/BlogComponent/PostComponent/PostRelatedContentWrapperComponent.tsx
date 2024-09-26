import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { BlogGrid } from '../BlogGrid/BlogGrid'
import { BlogGridItemProps } from '../BlogGridItem/BlogGridItemProps'
import { News20Regular } from '@fluentui/react-icons'
import { Button } from '@fluentui/react-components'

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
			<h2>📰 Outras postagens</h2>

			<BlogGrid posts={posts} />

			<div className='space-long'></div>
			<div className='aling-itens-to-right'>
				<Button as='a' href='/blog' icon={<News20Regular />} size='large' appearance='primary' shape='square'>ver_tudo();</Button>
			</div>
		</div>
	)
}
