import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { useEffect, useState } from 'react'

import { BlogGridItemProps } from '../BlogComponent'
import { BlogGrid } from '../BlogComponent/BlogGrid/BlogGrid'
import { BlogGridItemSkeleton } from '../BlogComponent/BlogGrid/BlogGridItemSkeleton'

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
			<section>
				<div className='blog'>
					<h1>🚀 Últimas versões</h1>
					<BlogGrid posts={posts} />
					<div className='right'>
						<div className='space-long'></div>
						<a href={`/changelogs/${productSlug}`} className='btn btn-primary'>
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
