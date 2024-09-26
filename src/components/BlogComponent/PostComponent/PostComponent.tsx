import React, { useContext } from 'react'

import { Changelog } from '../../../interfaces/Changelog'
import { Post } from '../../../interfaces/Post'
import { VtnortonContext } from '../../../provider/VtnortonContextProvider'
import { HashtagListComponent } from './HashtagListComponent'
import { PostContentComponent } from './PostContentComponent'
import { PostRelatedContentWrapperComponent } from './PostRelatedContentWrapperComponent'
import { ArrowLeft32Regular, ArrowRight32Regular } from '@fluentui/react-icons'

export const PostComponent = ({ post }: { post: Post | Changelog }) => {
	const { relatedPostVisibility, setRelatedPostVisibility } = useContext(VtnortonContext)
	const date = new Date(post.date)
	const monthNumber = date.getMonth() + 1
	const month = monthNumber.toString().padStart(2, '0')
	const formatedDate = `${date.getDate().toString().padStart(2, '0')}/${month} às ${date.getHours().toString().padStart(2, '0')}h${date.getMinutes().toString().padStart(2, '0')}`

	return (
		<>
			<PostRelatedContentWrapperComponent />
			<article key={`${post.id}_content`} className={relatedPostVisibility ? 'is--pushed-right' : ''}>
				<div className='header'>
					<img src={post.featureImage} alt={post.title} />
					<div className='overlay' />
					<div className='info'>
						<div onClick={() => setRelatedPostVisibility(!relatedPostVisibility)} className={relatedPostVisibility ? 'see-posts-button active' : 'see-posts-button'}>
							{relatedPostVisibility ? <ArrowLeft32Regular /> : <ArrowRight32Regular />}
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
