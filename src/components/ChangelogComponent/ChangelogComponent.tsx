import axios from 'axios'
import { useEffect, useState } from 'react'

import { BlogGridItemProps } from '../BlogComponent'
import { BlogGrid } from '../BlogComponent/BlogGrid/BlogGrid'
import { News20Regular } from '@fluentui/react-icons'
import { Button } from '@fluentui/react-components'

export const ChangelogComponent = ({ productSlug }: { productSlug: string }) => {
	const [posts, setPosts] = useState<BlogGridItemProps[]>([])

	useEffect(() => {
		if (posts.length === 0) {
			axios
				.get('/api/changelog', {
					params: {
						quantity: 3,
						projectslug: productSlug,
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
		<div className='container'>
			<section className='section'>
				<div className='blog'>
					<h1>🚀 Últimas versões</h1>
					<BlogGrid posts={posts} />
					<div className='space-long'></div>
					<div className='aling-itens-to-right'>
						<Button as='a' href={`/changelogs/${productSlug}`} icon={<News20Regular />} size='large' appearance='primary' shape='square'>ver_tudo();</Button>
					</div>
					<div className='clean'></div>
				</div>
			</section>
		</div>
	)
}
