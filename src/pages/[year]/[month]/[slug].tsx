import { Post } from '../../../models/Post'
import { IndividualPost } from '../../../modules/Blog'
import { postServices } from '../../../services/postsServices'

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
	const posts = await postServices.getAllPosts()
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

	let props = {
		post: post,
	}

	props = JSON.parse(JSON.stringify(props))
	return {
		props,
		revalidate: 60 * 60 * 1,
	}
}

export default function PostDetail({ post }: { post: Post }) {
	if (!post)
		return <div />

	return (
		<>
			{/* <SeoProps title={post.title} description={''} featureImage={post.featureImage} ogType='article' publishedTime={post.date} tags={post.hashtags} /> */}
			<IndividualPost post={post} />
		</>
	)
}
