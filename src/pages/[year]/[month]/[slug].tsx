import { BlogGridItemProps, PostComponent } from '../../../components'
import { Post } from '../../../interfaces/Post'
import { getBlogSectionItems, getPostBySlug, getPosts } from '../../../services/notionServices'

const mountPath = (post: Post) => {
	const postDate = new Date(post.date)
	return {
		params: {
			slug: post.slug,
			year: postDate.getFullYear().toString(),
			month: postDate.getMonth().toString().padStart(2, '0'),
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

	const posts: BlogGridItemProps[] = await getBlogSectionItems(42)
	const post: any = await getPostBySlug(slug)

	let props = {
		post: post,
		posts: posts,
	}

	props = JSON.parse(JSON.stringify(props))
	return {
		props,
		revalidate: 60 * 60 * 1,
	}
}

export default function PostDetail({ post, posts }: { post: Post; posts: BlogGridItemProps[] }) {
	if (!post) {
		// TODO: adicionar página 404 aqui
		return <div />
	}

	return <PostComponent post={post} posts={posts} />
}
