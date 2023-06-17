import React, { useContext, useEffect, useState } from 'react'
import { Post } from '../../../interfaces/Post'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { HashtagListComponent } from './HashtagListComponent'
import { PostContentComponent } from './PostContentComponent'
import { PostRelatedContentWrapperComponent } from './PostRelatedContentWrapperComponent'
import { BlogGridItemProps } from '../BlogGridItem/BlogGridItemProps'
import { VtnortonContext } from '../../../provider/VtnortonContextProvider'
import { Changelog } from '../../../interfaces/Changelog'
import axios from 'axios'

export const PostComponent = ({ post, posts }: { post: Post | Changelog; posts: BlogGridItemProps[] }) => {
	const { relatedPostVisibility, setRelatedPostVisibility } = useContext(VtnortonContext)
	const date = new Date(post.date)
	const monthNumber = date.getMonth() + 1
	const month = monthNumber.toString().padStart(2, '0')
	const formatedDate = `${date.getDate().toString().padStart(2, '0')}/${month} às ${date.getHours().toString().padStart(2, '0')}h${date.getMinutes().toString().padStart(2, '0')}`
	setRelatedPostVisibility(true)

	const [ps, setps] = useState<BlogGridItemProps[]>([])

	useEffect(() => {
		axios
			.get('/api/post')
			.then((response) => {
				setps(response.data)
			})
			.catch((error) => {
				console.log('Erro ao obter os dados da API:', error)
			})
	}, [ps.length])

	return (
		<>
			<PostRelatedContentWrapperComponent posts={ps} />
			<article key={`${post.id}_content`} className={relatedPostVisibility ? 'is--pushed-right' : ''}>
				<div className='header'>
					<img src={post.featureImage} alt={post.title} />
					<div className='overlay' />
					<div className='info'>
						<div onClick={() => setRelatedPostVisibility(!relatedPostVisibility)} className={relatedPostVisibility ? 'see-posts-button active' : 'see-posts-button'}>
							<FontAwesomeIcon icon={relatedPostVisibility ? faArrowLeft : faArrowRight} />
						</div>
						<div className='info-title'>
							<h1>{post.title}</h1>
							{'hashtags' in post && <HashtagListComponent hashtags={post.hashtags} />}
							<div className='meta'>
								por vítor norton, em <span className='meta-date'>{formatedDate}</span>
							</div>
						</div>
					</div>
				</div>
				{'hashtags' in post && <PostContentComponent title={post.title} content={post.recordMap} hashtags={post.hashtags} />}
				{'projectSlug' in post && <PostContentComponent title={post.title} content={post.recordMap} />}
			</article>
		</>
	)
}
