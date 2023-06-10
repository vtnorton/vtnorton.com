import { BlogGridItemProps, FooterComponent, PageHeroComponent, ProfileComponent } from '../../components'
import { BlogGrid } from '../../components/BlogComponent/BlogGrid/BlogGrid'
import { SeoProps } from '../../database/SEOProps'
import { Hashtag } from '../../interfaces'
import { getBlogSectionItems, getHashtags } from '../../services/notionServices'

const mountPath = (tag: Hashtag) => {
	return {
		params: {
			tag: tag.name,
		},
	}
}

export const getStaticPaths = async () => {
	const tags: Hashtag[] = await getHashtags()
	console.log('tags', tags)
	return {
		paths: tags.map((tag: Hashtag) => mountPath(tag)),
		fallback: true,
	}
}

export const getStaticProps = async (context: any) => {
	const { tag } = context.params
	const posts: BlogGridItemProps[] = await getBlogSectionItems(100, tag)

	let props = {
		posts: posts,
		tag: tag,
	}

	props = JSON.parse(JSON.stringify(props))
	return {
		props,
		revalidate: 60 * 60 * 1,
	}
}

export default function PostDetail({ posts, tag }: { posts: BlogGridItemProps[]; tag: string }) {
	const pageTitle = 'Posts sobre ' + tag
	return (
		<>
			<SeoProps title={pageTitle} description={pageTitle} featureImage='/img/pages/blog.jpg' />
			<PageHeroComponent title={pageTitle} backgroundUrl='/img/pages/blog.jpg'>
				<section>
					<div className='blog'>
						<div className='row'>
							<div className='col-md-10'>
								<h2>📰 {pageTitle}</h2>
							</div>
						</div>
						<div className='space-low'></div>
						<BlogGrid posts={posts} />
					</div>
				</section>
			</PageHeroComponent>

			<ProfileComponent />
			<FooterComponent />
		</>
	)
}
