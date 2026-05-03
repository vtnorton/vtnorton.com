import { Post } from '../../../models/Post'
import { getDate } from '../../../utils/dateUtils'
import { useRouter } from 'next/router'
import { NoiseImage } from '../../../components/NoiseImage'

export const PostFeedItem = ({
	post,
	setSelectedTag,
}: {
	post: Post,
	setSelectedTag: (tag: string | null) => void
}) => {
	const router = useRouter()

	const selectTag = (tag: string) => {
		router.push({
			pathname: router.pathname,
			query: { ...router.query, tag },
		}, undefined, { shallow: true })
		setSelectedTag(tag)
	}

	return (
		<article className='feed-item'>
			<a href={post.slug} className='feed-item__image-link'>
				<NoiseImage src={post.cover} alt={post.title} className='feed-item__cover' />
			</a>
			<div className='feed-item__content'>
				<div className='feed-item__meta'>
					<span className='feed-item__date'>{getDate(post.date)}</span>
					{post.hashtags.length > 0 && (
						<>
							<span className='feed-item__separator'>/</span>
							<div className='feed-item__tags'>
								{post.hashtags.slice(0, 2).map((tag) => (
									<button
										key={tag}
										onClick={() => selectTag(tag)}
										className='feed-item__tag'
									>
										{tag}
									</button>
								))}
							</div>
						</>
					)}
				</div>
				<a href={post.slug} className='feed-item__title-link'>
					<h2 className='feed-item__title'>{post.title}</h2>
				</a>
				<p className='feed-item__abstract'>{post.abstract}</p>
				<a href={post.slug} className='feed-item__read-more'>
					Ler artigo
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
						<path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</a>
			</div>
		</article>
	)
}
