import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { BlogGridItemProps, FooterComponent, PageHeroComponent, ProfileComponent } from '../components'
import { BlogGrid } from '../components/BlogComponent/BlogGrid/BlogGrid'
import { SeoProps } from '../database/SEOProps'

export default function BlogPage() {
	const [posts, setPosts] = useState<BlogGridItemProps[]>([])

	useEffect(() => {
		if (posts.length === 0) {
			axios
				.get('/api/post', {
					params: {
						quantity: 150,
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
		<>
			<SeoProps title='Blog' description='blog: artigos + informativos + releases' featureImage='/img/pages/blog.jpg' />
			<PageHeroComponent title='blog' description='blog: artigos + informativos + releases' backgroundUrl='/img/pages/blog.jpg'>
				<section>
					<div className='blog'>
						<div className='row'>
							<div className='col-md-10'>
								<h2>📰 Todos os posts</h2>
							</div>
						</div>
						<div className='space-low'></div>
						<BlogGrid posts={posts} />
					</div>
				</section>
			</PageHeroComponent>

			<ProfileComponent />
			<FooterComponent />
		</>
	)
}
