import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BlogGrid } from '../BlogComponent/BlogGrid/BlogGrid'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { BlogGridItemProps } from '../BlogComponent'

export const ChangelogComponent = ({ posts, productSlug }: { posts: BlogGridItemProps[]; productSlug: string }) => {
	return (
		<div className='container'>
			<section>
				<div className='blog'>
					<h1>🚀 Últimas versões</h1>
					<BlogGrid posts={posts} />
					<div className='right'>
						<div className='space-long'></div>
						<a href={`/changelogs/${productSlug}`} className='btn btn-primary'>
							<FontAwesomeIcon icon={faChevronRight} />
							ver_tudo;
						</a>
					</div>
					<div className='clean'></div>
				</div>
			</section>
		</div>
	)
}
