interface NextProjectProps {
	name: string
	imageUrl: string
	link: string
}

export const NextProject = ({ name, imageUrl, link }: NextProjectProps) => {
	return (
		<a href={link} className='project-next' data-scrolled-into-view='true'>
			<div className='project-image' style={{
				backgroundImage: `url(${imageUrl})`,
			}} />
			<div className='meta-project'>
				<span>conheça também:</span>
				<h1>{name}</h1>
			</div>
		</a>
	)
}
