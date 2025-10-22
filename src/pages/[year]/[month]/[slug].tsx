import { Post } from '../../../models/Post'

// TODO: usar o que já está no post
const mountPath = (post: Post) => {
	return {
		params: {
			slug: post.slug,
		},
	}
}

// export const getStaticPaths = async () => {
// 	const result = await getPosts()
// 	const posts = result.filter((post): post is Post => post instanceof Post)
// 	return {
// 		paths: posts.map((post: Post) => mountPath(post)),
// 		fallback: true,
// 	}
// }

// export const getStaticProps = async (context: any) => {
// 	const { slug } = context.params

// 	const post: any = await getPostBySlug(slug)

// 	let props = {
// 		post: post,
// 	}

// 	props = JSON.parse(JSON.stringify(props))
// 	return {
// 		props,
// 		revalidate: 60 * 60 * 1,
// 	}
// }

export default function PostDetail({ post }: { post: Post }) {
	if (!post)
		return <div />

	return (
		<>
			{/* <SeoProps title={post.title} description={''} featureImage={post.featureImage} ogType='article' publishedTime={post.date} tags={post.hashtags} /> */}
			{/* <PostComponent post={post} /> */}
		</>
	)
}
