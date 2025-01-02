import { PostComponent } from '../../../components'
import { SeoProps } from '../../../database/SEOProps'
import { Post } from '../../../interfaces/Post'
import { getPostBySlug, getPosts } from '../../../services/notionServices'

const mountPath = (post: Post) => {
	const postDate = new Date(post.date)
	const monthNumber = postDate.getMonth() + 1
	const month = monthNumber.toString().padStart(2, '0')
	return {
		params: {
			slug: post.slug,
			year: postDate.getFullYear().toString(),
			month: month,
		},
	}
}

export const getStaticPaths = async () => {
	const posts: Post[] = await getPosts()
	return {
		paths: posts.map((post: Post) => mountPath(post)),
		fallback: true,
	}
}

export const getStaticProps = async (context: any) => {
	const { slug } = context.params

	const post: any = await getPostBySlug(slug)

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
			<SeoProps title={post.title} description={post.description} featureImage={post.featureImage} ogType='article' publishedTime={post.date} tags={post.hashtags} />
			<PostComponent post={post} />
		</>
	)
}
