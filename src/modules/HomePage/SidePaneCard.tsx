export const SidePaneCard = ({
	title,
	description,
	link,
}: {
	title: string
	description: string
	link: string
}) => {
	return (
		<a href={link} className='card'>
			<div className='icon'>

			</div>
			<div className='details'>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
		</a>
	)
}