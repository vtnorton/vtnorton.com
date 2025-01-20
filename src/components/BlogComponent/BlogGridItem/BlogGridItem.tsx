import { Changelog } from '../../../models/Changelog'
import { Post } from '../../../models/Post'
import { getDate } from '../dateHelper'
import { Categories } from './Categories'
import { FeatureImage } from './FeatureImage'

export const BlogGridItem = ({ item }: { item: Post | Changelog }) => {

	// TODO: acertar data, tá ficando um dia após o dia real da postagem
	const renderDate = () => {
		if (item.date) {
			if (item.type === 'changelog')
				return <p className='post-date'>Lançado em: {getDate(item.date)}</p>
			else
				return <p className='post-date'>Postado em: {getDate(item.date)}</p>
		}
	}

	return (
		<div className='blog-item'>
			<FeatureImage imageUrl={item.featureImage} link={item.fullSlug} />
			{'hashtags' in item && <Categories hashtags={item.hashtags} />}
			<a href={item.fullSlug} aria-label={item.title}>
				<h3>{item.title}</h3>
				{renderDate()}
			</a>
			<span className='blog-item-more'>leia mais</span>
		</div>
	)
}
