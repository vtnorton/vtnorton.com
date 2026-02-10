import { InteractionTag, InteractionTagPrimary, TagGroup } from '@fluentui/react-components'
import { Section } from '../../../components/Section'
import { Post } from '../../../models/Post'
import { getDate } from '../../../utils/postDate'
import { useRouter } from 'next/router'
import { Button } from '../../../components/Button'
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
			query: { tag },
		}, undefined, { shallow: true })
		setSelectedTag(tag)
	}

	return (
		<Section>
			<div className='feed-item'>
				<NoiseImage src={post.cover} alt={post.title} className='cover-image' />
				<div className='intro'>
					<a href={post.slug}><h2>{post.title}</h2></a>
					<p className='metadata'>Publicado {getDate(post.date)}</p>
					<TagGroup role='list' size='extra-small'>
						{post.hashtags.map((tag) => (
							<InteractionTag onClick={() => selectTag(tag)} role='listitem' shape='circular' appearance='outline' key={tag}>
								<InteractionTagPrimary>#{tag}</InteractionTagPrimary>
							</InteractionTag>
						))}
					</TagGroup>
				</div>
			</div>

			<p>{post.abstract}</p>

			<Button as='a' href={post.slug} appearance='transparent' shape='square' size='medium'>Continuar lendo</Button>
		</Section>
	)
}