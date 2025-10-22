import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Post } from '../../../models/Post'
import { PostFeedItem } from './PostFeedItem'

export default function BlogFeed() {
	const [posts, setPosts] = useState<Post[]>([])

	useEffect(() => {
		if (posts.length === 0) {
			axios
				.get('/api/personal-blog', {
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
		<div className='blog-feed'>
			{posts.map((post) => (
				<PostFeedItem key={post.id} post={post} />
			))}
		</div>
	)
}
