import { Post } from '../../../models/Post'
import { IndividualPost } from '../../../modules/Blog'
import { postServices } from '../../../services/postsServices'
import { useLayout } from '../../../providers/LayoutProvider'
import { useLayoutEffect } from 'react'
import { ContentSEO } from '../../../database/seo'

const mountPath = (post: Post) => {
	const postDate = new Date(post.date)
	const monthNumber = postDate.getMonth() + 1
	const month = monthNumber.toString().padStart(2, '0')

	return {
		params: {
			slug: post.slug.split('/').pop() || post.slug,
			year: postDate.getFullYear().toString(),
			month: month,
		},
	}
}

export const getStaticPaths = async () => {
	const posts = await postServices.getPosts()
	return {
		paths: posts.map((post: Post) => mountPath(post)),
		fallback: true,
	}
}

export const getStaticProps = async (
	context: {
		params: {
			slug: string
			year: string
			month: string
		}
	},
) => {
	const { slug, year, month } = context.params

	const post = await postServices.getPostBySlug(`/${year}/${month}/${slug}`)
	const relatedPosts = post
		? await postServices.getRelatedPosts(post, 3)
		: []

	let props = {
		post: post,
		relatedPosts,
	}

	props = JSON.parse(JSON.stringify(props))
	return {
		props,
		revalidate: 60 * 60 * 1,
	}
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

	if (!post)
		return <div />

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
