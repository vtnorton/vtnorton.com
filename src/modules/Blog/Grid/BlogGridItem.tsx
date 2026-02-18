import { Post } from '../../../models/Post'
import { getDate } from '../../../utils/dateUtils'
import { FeatureImage } from './FeatureImage'

// TODO: acertar data, tá ficando um dia após o dia real da postagem
export const BlogGridItem = ({ item }: { item: Post }) => {
	return (
		<div className='blog-item'>
			<FeatureImage imageUrl={item.cover} link={item.slug} />
			{/* {'hashtags' in item && <Categories hashtags={item.hashtags} />} */}
			<a href={item.slug} aria-label={item.title}>
				<h3>{item.title}</h3>
				<p className='post-date'>Postado em: {getDate(item.date)}</p>
			</a>
			<span className='blog-item-more'>leia mais</span>
		</div>
	)
}
