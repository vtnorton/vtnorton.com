export const SidePaneCard = ({
	title,
	description,
	link,
	image,
}: {
	title: string
	description: string
	link: string
	image: string
}) => {
	return (
		<a href={link} className='card'>
			<div className='icon'>
				<img src={'/img/sidebar/' + image + '.jpg'} alt={title} />
			</div>
			<div className='details'>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
		</a>
	)
}