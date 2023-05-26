import { NextProjectComponentProps } from './NextProjectComponentProps'

export const NextProjectComponent = (props: NextProjectComponentProps) => {
	const altDescription = `Logo do projeto ${props.item.name}`
	return (
		<a href={props.item.link} className='project-next' data-scrolled-into-view='true'>
			<img src={props.item.imageUrl} alt={altDescription} />
			<div className='meta-project'>
				<span>conheça também:</span>
				<h1>{props.item.name}</h1>
			</div>
		</a>
	)
}
