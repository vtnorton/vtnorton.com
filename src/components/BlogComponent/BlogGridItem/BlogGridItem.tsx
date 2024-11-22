import { PostType } from '../../../interfaces'
import { BlogGridItemProps } from './BlogGridItemProps'

export const BlogGridItem = (props: BlogGridItemProps) => {
	function renderFeatureImage() {
		return (
			<a href={props.link}>
				<figure className='post-img'>
					{props.image && <img src={props.image} />}
					<div className='overlay-img'></div>
				</figure>
			</a>
		)
	}

	function renderCategories() {
		if (props.hashtags)
			return (
				<div className='meta-categories'>
					{props.hashtags.map((hashtag: string, index: number) => {
						const link = `/hashtag/${hashtag}`
						if (props.hashtags && props.hashtags.length - 1 == props.hashtags.indexOf(hashtag))
							return (
								<a key={index} href={link}>
									{hashtag}{' '}
								</a>
							)
						else
							return (
								<a key={index} href={link}>
									{hashtag},{' '}
								</a>
							)
					})}
				</div>
			)
	}

	const renderDate = () => {
		if (props.date) {
			const date = new Date(props.date)

			const monthNumber = date.getMonth() + 1
			const month = monthNumber.toString().padStart(2, '0')
			const formatedDate = `${date.getDate().toString().padStart(2, '0')}/${month}`

			if (props.type == PostType.Post)
				return <p className='post-date'>Postado em: {formatedDate}</p>
			if (props.type == PostType.Changelog)
				return <p className='post-date'>Lançado em: {formatedDate}</p>
		}
	}

	return (
		<div className='blog-item'>
			{renderFeatureImage()}
			{renderCategories()}
			<a href={props.link} aria-label={props.title}>
				<h3>{props.title}</h3>
				{renderDate()}
			</a>
			<span className='blog-item-more'>leia mais</span>
		</div>
	)
}
