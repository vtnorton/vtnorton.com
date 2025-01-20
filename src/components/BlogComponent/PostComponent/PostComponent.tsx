import React, { useContext } from 'react'

import { VtnortonContext } from '../../../provider/VtnortonContextProvider'
import { PostContentComponent } from './PostContentComponent'
import { PostRelatedContentWrapperComponent } from './PostRelatedContentWrapperComponent'
import { ArrowLeft32Regular, ArrowRight32Regular } from '@fluentui/react-icons'
import { Post } from '../../../models/Post'
import { Changelog } from '../../../models/Changelog'
import { getDate } from '../dateHelper'

export const PostComponent = ({ post }: { post: Post | Changelog }) => {
	const { relatedPostVisibility, setRelatedPostVisibility } = useContext(VtnortonContext)
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
							<div className='meta'>
								por vítor norton, em <span className='meta-date'>{getDate(post.date)}</span>
							</div>
						</div>
					</div>
				</div>
				{'hashtags' in post && <PostContentComponent title={post.title} content={post.recordMap} hashtags={post.hashtags} />}
				{'version' in post && <PostContentComponent title={post.title} content={post.recordMap} />}
			</article>
		</>
	)
}
