import React, { useEffect, useState } from 'react'
import { BlogGrid } from '../BlogGrid/BlogGrid'
import { BlogGridItemProps } from '../BlogGridItem/BlogGridItemProps'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { FluentProvider, Skeleton, SkeletonItem, webLightTheme } from '@fluentui/react-components'

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

		return (
			<FluentProvider theme={webLightTheme}>
				<Skeleton as='div' animation='wave' appearance='opaque'>
					<div className='row blog-grid'>
						<div className='col-lg-4 col-sm-6 col-xs-12'>
							<SkeletonItem size={128} />
							<SkeletonItem size={128} />
							<SkeletonItem size={128} />
						</div>
					</div>
				</Skeleton>
			</FluentProvider>
		)
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
