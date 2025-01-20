import axios from 'axios'
import { useEffect, useState } from 'react'

import { BlogGrid } from '../BlogComponent/BlogGrid/BlogGrid'
import { News20Regular } from '@fluentui/react-icons'
import { Button } from '@fluentui/react-components'
import { Changelog } from '../../models/Changelog'

// TODO: Trocar o parâmetro productSlug e projectId só por Project
export const ChangelogComponent = ({ projectId, projectSlug }: { projectId: string, projectSlug: string }) => {
	const [posts, setPosts] = useState<Changelog[]>([])

	useEffect(() => {
		if (posts.length === 0) {
			axios
				.get('/api/changelog', {
					params: {
						quantity: 3,
						projectid: projectId,
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
						<Button as='a' href={`/changelogs/${projectSlug}`} icon={<News20Regular />} size='large' appearance='primary' shape='square'>ver_tudo();</Button>
					</div>
					<div className='clean'></div>
				</div>
			</section>
		</div>
	)
}
