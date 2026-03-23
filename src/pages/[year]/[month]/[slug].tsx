import type { GetServerSidePropsContext } from 'next'
import { Post } from '../../../models/Post'
import { IndividualPost } from '../../../modules/Blog'
import { postServices } from '../../../services/postsServices'
import { useLayout } from '../../../providers/LayoutProvider'
import { useLayoutEffect } from 'react'
import { ContentSEO } from '../../../database/seo'

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
	const { slug, year, month } = context.params as { slug: string; year: string; month: string }

	const post = await postServices.getPostBySlug(`/${year}/${month}/${slug}`)

	if (!post) {
		return { notFound: true }
	}

	const relatedPosts = await postServices.getRelatedPosts(post, 3)

	let props = {
		post,
		relatedPosts,
	}

	props = JSON.parse(JSON.stringify(props))

	context.res.setHeader(
		'Cache-Control',
		'public, s-maxage=3600, stale-while-revalidate=59',
	)

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
