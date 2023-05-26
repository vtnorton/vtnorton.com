import React, { useState } from 'react'
import { Post } from '../../../interfaces/Post'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { HashtagListComponent } from './HashtagListComponent'
import { PostContentComponent } from './PostContentComponent'
import { PostRelatedContentWrapperComponent } from './PostRelatedContentWrapperComponent'
import { BlogGridItemProps } from '../BlogGridItem/BlogGridItemProps'

export const PostComponent = ({ post, posts }: { post: Post; posts: BlogGridItemProps[] }) => {
	const [isPostActive, setPostActive] = useState(true)
	const date = new Date(post.date)
	const formatedDate = `${date.getDate().toString().padStart(2, '0')}/${date.getMonth().toString().padStart(2, '0')} às ${date.getHours().toString().padStart(2, '0')}h${date.getMinutes().toString().padStart(2, '0')}`

	return (
		<>
			<PostRelatedContentWrapperComponent posts={posts} />
			<article key={`${post.id}_content`} className={isPostActive ? '' : 'is--pushed-right'}>
				<div className='header'>
					<img src={post.featureImage} alt={post.title} />
					<div className='overlay' />
					<div className='info'>
						<div onClick={() => setPostActive(!isPostActive)} className={isPostActive ? 'see-posts-button active' : 'see-posts-button'}>
							<FontAwesomeIcon icon={isPostActive ? faArrowLeft : faArrowRight} />
						</div>
						<div className='info-title'>
							<h1>{post.title}</h1>
							<HashtagListComponent hashtags={post.hashtags} />
							<div className='meta'>
								por vítor norton, em <span className='meta-date'>{formatedDate}</span>
							</div>
						</div>
					</div>
				</div>
				<PostContentComponent title={post.title} content={post.recordMap} hashtags={post.hashtags} />
			</article>
		</>
	)
}
