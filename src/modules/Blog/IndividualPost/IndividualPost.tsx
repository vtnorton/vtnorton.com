import React, { useEffect, useRef, useState } from 'react'
import { getDate } from '../../../utils/postDate'
import { Post } from '../../../models/Post'
import { NotionPostContent } from './NotionPostContent'
import { InteractionTag, InteractionTagPrimary, TagGroup } from '@fluentui/react-components'
import { RelatedPosts } from './RelatedPosts'
import { useRouter } from 'next/router'
import { NoiseImage } from '../../../components/NoiseImage'

export const IndividualPost = ({ post, relatedPosts }: { post: Post; relatedPosts: Post[] }) => {
	const [showRelatedPosts, setShowRelatedPosts] = useState(false)
	const contentRef = useRef<HTMLDivElement>(null)
	const router = useRouter()

	useEffect(() => {
		if (!contentRef.current) return

		const content = contentRef.current
		let trigger: HTMLDivElement | null = null
		let observer: IntersectionObserver | null = null

		const setupTimeout = setTimeout(() => {
			const notionMain = content.querySelector('main.notion') as HTMLElement

			if (!notionMain) {
				console.warn('main.notion não encontrado')
				return
			}

			const notionTexts = notionMain.querySelectorAll('.notion-text')

			if (notionTexts.length === 0) {
				console.log('Nenhum .notion-text encontrado')
				return
			}

			const lastNotionText = notionTexts[notionTexts.length - 1] as HTMLElement
			const lastTextPosition = lastNotionText.offsetTop + lastNotionText.offsetHeight
			const triggerPoint = lastTextPosition * 0.8

			if (lastTextPosition < 1200) return

			trigger = document.createElement('div')
			trigger.style.position = 'absolute'
			trigger.style.top = `${triggerPoint}px`
			trigger.style.height = '1px'
			trigger.style.width = '100%'
			trigger.style.pointerEvents = 'none'

			notionMain.style.position = 'relative'
			notionMain.appendChild(trigger)

			observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						setShowRelatedPosts(true)
					}
				},
				{
					threshold: 0,
					rootMargin: '0px',
				},
			)

			observer.observe(trigger)
		}, 1500)

		return () => {
			clearTimeout(setupTimeout)
			if (observer) {
				observer.disconnect()
			}
			if (trigger && trigger.parentNode) {
				trigger.parentNode.removeChild(trigger)
			}
		}
	}, [])

	const selectTag = (tag: string) => {
		router.push(`/blog?tag=${tag}`)
	}

	return (
		<article className='post' key={`${post.id}_content`} >
			<div className='header'>
				<NoiseImage src={post.cover} alt={post.title} />
				<div className='overlay' />
				<div className='info'>
					<div className='info-title'>
						<h1>{post.title}</h1>
						<div className='meta'>
							Postado <span className='meta-date'>{getDate(post.date)}</span>
						</div>

						<TagGroup role='list' size='medium'>
							{post.hashtags.map((tag) => (
								<InteractionTag onClick={() => selectTag(tag)} role='listitem' shape='circular' appearance='outline'>
									<InteractionTagPrimary>#{tag}</InteractionTagPrimary>
								</InteractionTag>
							))}
						</TagGroup>
					</div>

					<div className={`related-posts ${showRelatedPosts ? 'visible' : ''}`}>
						<h4>Mais posts</h4>
						<RelatedPosts posts={relatedPosts} />
					</div>
				</div>
			</div>
			<NotionPostContent ref={contentRef} content={post.content} />

			<div className='related-posts mobile'>
				<h4>Mais posts</h4>
				<RelatedPosts posts={relatedPosts} />
			</div>
		</article>
	)
}
