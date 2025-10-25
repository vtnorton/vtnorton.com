import React from 'react'
import { getDate } from '../../../utils/postDate'
import { Post } from '../../../models/Post'
import { NotionPostContent } from './NotionPostContent'
import { Tag, TagGroup } from '@fluentui/react-components'

export const IndividualPost = ({ post }: { post: Post }) => {
	// const { relatedPostVisibility, setRelatedPostVisibility } = useContext(VtnortonContext)
	return (
		<>
			{/* <PostRelatedContentWrapperComponent /> */}
			<article key={`${post.id}_content`} > {/* className={relatedPostVisibility ? 'is--pushed-right' : ''} */}
				<div className='header'>
					<img src={post.cover} alt={post.title} />
					<div className='overlay' />
					<div className='info'>
						{/* <div onClick={() => setRelatedPostVisibility(!relatedPostVisibility)} className={relatedPostVisibility ? 'see-posts-button active' : 'see-posts-button'}>
							{relatedPostVisibility ? <ArrowLeft32Regular /> : <ArrowRight32Regular />}
						</div> */}
						<div className='info-title'>
							<h1>{post.title}</h1>
							<div className='meta'>
								Postado <span className='meta-date'>{getDate(post.date)}</span>
							</div>

							<TagGroup role='list' size='medium'>
								{post.hashtags.map((tag) => (
									<Tag onClick={() => { }} role='listitem' shape='circular' appearance='outline'>
										#{tag}
									</Tag>
								))}
							</TagGroup>
						</div>
					</div>
				</div>
				<NotionPostContent content={post.content} />
				{/* {'version' in post && <PostContentComponent title={post.title} content={post.recordMap} />} */}
			</article>
		</>
	)
}
