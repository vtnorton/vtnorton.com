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
		return (
			<div className='meta-categories'>
				{props.hashtags.map((hashtag: string, index: number) => {
					const link = `/tag/${hashtag}`
					if (props.hashtags.length - 1 == props.hashtags.indexOf(hashtag))
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

	return (
		<div className='blog-item col-lg-4 col-sm-6 col-xs-12'>
			{renderFeatureImage()}
			{renderCategories()}
			<a href={props.link}>
				<h3>{props.title}</h3>
			</a>
			<span className='blog-item-more'>leia mais</span>
		</div>
	)
}
