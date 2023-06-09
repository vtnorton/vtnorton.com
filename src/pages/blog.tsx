import React from 'react'
import { getBlogSectionItems } from '../services/notionServices'
import { BlogGrid } from '../components/BlogComponent/BlogGrid/BlogGrid'
import { BlogGridItemProps, FooterComponent, PageHeroComponent, ProfileComponent } from '../components'
import { SeoProps } from '../database/SEOProps'

export const getStaticProps = async () => {
	try {
		let posts = await getBlogSectionItems(100)

		let props = { posts: posts }
		props = JSON.parse(JSON.stringify(props))

		return { props, revalidate: 60 * 60 * 1 }
	} catch (err) {
		throw err
	}
}

export default function BlogPage({ posts }: { posts: BlogGridItemProps[] }) {
	return (
		<>
			<SeoProps title='Blog' description='blog: artigos + informativos + releases' featureImage='/img/pages/blog.jpg' />
			<PageHeroComponent title='blog' description='blog: artigos + informativos + releases' backgroundUrl='/img/pages/blog.jpg'>
				<section>
					<div className='blog'>
						<div className='row'>
							<div className='col-md-10'>
								<h2>📰 Todos os posts</h2>
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
