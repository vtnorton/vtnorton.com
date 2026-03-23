import type { GetServerSidePropsContext } from 'next'
import { Post } from '../../../models/Post'
import { IndividualPost } from '../../../modules/Blog'
import { postServices } from '../../../services/postsServices'
import { useLayout } from '../../../providers/LayoutProvider'
import { useLayoutEffect } from 'react'
import { ContentSEO } from '../../../database/seo'

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
	const { slug, year, month } = context.params as { slug: string; year: string; month: string }
	const requestedSlug = `/${year}/${month}/${slug}`

	// Busca direto do Notion, sem passar por cache
	const allPosts = await postServices.getPosts()

	console.log('[PostDetail] requestedSlug:', requestedSlug)
	console.log('[PostDetail] total posts from Notion:', allPosts.length)
	console.log('[PostDetail] all slugs:', allPosts.map((p) => p.slug))

	const post = allPosts.find((p) => p.slug === requestedSlug)

	if (!post) {
		console.log('[PostDetail] POST NOT FOUND for slug:', requestedSlug)
		return { notFound: true }
	}

	const relatedPosts = await postServices.getRelatedPosts(post, 3)

	let props = {
		post,
		relatedPosts,
	}

	props = JSON.parse(JSON.stringify(props))

	return { props }
}

export default function PostDetail({ post, relatedPosts }: { post: Post; relatedPosts: Post[] }) {
	const { sidepane } = useLayout()

	useLayoutEffect(() => {
		sidepane.setAutoExpandBreakpoint(2200)
		if (window.innerWidth < 2200) {
			sidepane.collapse()
		}

		return () => {
			sidepane.setAutoExpandBreakpoint(1500)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<ContentSEO
				featureImage={post.cover}
				title={post.title}
				description={post.abstract}
				date={post.date}
				tags={post.hashtags}
				ogType='article' />
			<IndividualPost post={post} relatedPosts={relatedPosts} />
		</>
	)
}
