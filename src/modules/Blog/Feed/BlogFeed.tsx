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
	const [page, setPage] = useState(1)
	const [loading, setLoading] = useState(false)
	const [hasMore, setHasMore] = useState(true)
	const lastPostRef = useRef<HTMLDivElement>(null)

	const loadPosts = useCallback(async (pageNumber: number) => {
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
			const response = await fetch(`${endpoint}${separator}${params.toString()}`)

			if (!response.ok) {
				throw new Error(`Erro ao obter os dados da API: ${response.status}`)
			}

			const data = await response.json() as PaginatedResponse<Post>
			const { content: newPosts, pagination } = data

			if (pageNumber === 1) {
				setPosts(newPosts)
			} else {
				setPosts((prevPosts) => [...prevPosts, ...newPosts])
			}
			setHasMore(pagination.hasMore)
		} catch (error) {
			console.error('Erro ao obter os dados da API:', error)
		} finally {
			setLoading(false)
		}
	}, [endpoint, selectedTag])

	useEffect(() => {
		if (!isReady) return

		setPosts([])
		setPage(1)
		setHasMore(true)
		loadPosts(1)
	}, [selectedTag, isReady, loadPosts])

	useEffect(() => {
		if (page > 1) {
			loadPosts(page)
		}
	}, [page, loadPosts])

	const handleObserver = useCallback(
		(entries: IntersectionObserverEntry[]) => {
			const [target] = entries
			if (target.isIntersecting && hasMore && !loading) {
				setPage((prev) => prev + 1)
			}
		},
		[hasMore, loading],
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
