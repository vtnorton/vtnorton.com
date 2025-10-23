import { Button, InteractionTag, InteractionTagPrimary, TagGroup } from '@fluentui/react-components'
import { Section } from '../../../components/Section'
import { Post } from '../../../models/Post'
import { getDate } from '../../../utils/postDate'
import { IoChevronForwardOutline } from 'react-icons/io5'

export const PostFeedItem = ({ post }: {
	post: Post
}) => {
	const selectTag = (tag: string) => {
		window.location.href = `/hashtag/${tag}`
	}

	return (
		<Section>
			<div className='feed-item'>
				<img src={post.cover} alt={post.title} className='cover-image' />
				<div className='intro'>
					<h2>{post.title}</h2>
					<p className='metadata'>Publicado {getDate(post.date)}</p>
					<TagGroup role='list' size='extra-small'>
						{post.hashtags.map((tag) => (
							<InteractionTag onClick={() => selectTag(tag)} role='listitem' shape='circular' appearance='outline'>
								<InteractionTagPrimary>#{tag}</InteractionTagPrimary>
							</InteractionTag>
						))}
					</TagGroup>
				</div>
			</div>

			<p>{post.abstract}</p>

			<Button as='a' href={post.slug} appearance='primary' shape='square' size='large'><IoChevronForwardOutline /> Continuar lendo</Button>
		</Section>
	)
}