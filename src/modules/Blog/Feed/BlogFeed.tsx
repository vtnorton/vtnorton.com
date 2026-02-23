import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Post } from '../../../models/Post'
import { PostFeedItem } from './PostFeedItem'
import { PaginatedResponse } from '../../../types/PaginatedResponse'
import { PostFeedItemLoader } from './PostFeedItemLoader'

const POSTS_PER_PAGE = 10

export default function BlogFeed({
	endpoint,
	selectedTag,
	setSelectedTag,
	isReady = true,
}: {
	endpoint: string,
	selectedTag: string | null,
	setSelectedTag: (tag: string | null) => void,
	isReady?: boolean
}) {
	const [posts, setPosts] = useState<Post[]>([])
	const [loading, setLoading] = useState(false)

	const pageRef = useRef(1)
	const hasMoreRef = useRef(true)
	const loadingRef = useRef(false)
	const abortControllerRef = useRef<AbortController | null>(null)
	const lastPostRef = useRef<HTMLDivElement>(null)

	const loadPosts = useCallback(async (pageNumber: number) => {
		if (loadingRef.current) return

		if (abortControllerRef.current) {
			abortControllerRef.current.abort()
		}
		const controller = new AbortController()
		abortControllerRef.current = controller

		loadingRef.current = true
		setLoading(true)

		try {
			const params = new URLSearchParams({
				page: String(pageNumber),
				limit: String(POSTS_PER_PAGE),
			})

			if (selectedTag) {
				params.set('tag', selectedTag)
			}

			const separator = endpoint.includes('?') ? '&' : '?'
			const response = await fetch(`${endpoint}${separator}${params.toString()}`, {
				signal: controller.signal,
			})

			if (!response.ok) {
				throw new Error(`Erro ao obter os dados da API: ${response.status}`)
			}

			const data = await response.json() as PaginatedResponse<Post>
			const { content: newPosts, pagination } = data

			pageRef.current = pageNumber
			hasMoreRef.current = pagination.hasMore

			if (pageNumber === 1) {
				setPosts(newPosts)
			} else {
				setPosts((prevPosts) => [...prevPosts, ...newPosts])
			}
		} catch (error) {
			if ((error as Error).name !== 'AbortError') {
				console.error('Erro ao obter os dados da API:', error)
			}
		} finally {
			loadingRef.current = false
			setLoading(false)
		}
	}, [endpoint, selectedTag])

	useEffect(() => {
		if (!isReady) return

		pageRef.current = 1
		hasMoreRef.current = true
		setPosts([])
		loadPosts(1)

		return () => {
			if (abortControllerRef.current) {
				abortControllerRef.current.abort()
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [endpoint, selectedTag, isReady])

	const handleObserver = useCallback(
		(entries: IntersectionObserverEntry[]) => {
			const [target] = entries
			if (target.isIntersecting && hasMoreRef.current && !loadingRef.current) {
				loadPosts(pageRef.current + 1)
			}
		},
		[loadPosts],
	)

	useEffect(() => {
		const element = lastPostRef.current
		const option = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5,
		}

		const observer = new IntersectionObserver(handleObserver, option)
		if (element) observer.observe(element)

		return () => {
			if (element) observer.unobserve(element)
		}
	}, [handleObserver, posts])

	return (
		<>
			<div className='blog-feed'>
				{posts.map((post, index) => (
					<div key={`post-${post.id}`} ref={index === posts.length - 1 ? lastPostRef : null}>
						<PostFeedItem post={post} setSelectedTag={setSelectedTag} />
					</div>
				))}

				{loading && <>
					<PostFeedItemLoader />
					<PostFeedItemLoader />
					<PostFeedItemLoader />
				</>}
			</div>
		</>
	)
}
