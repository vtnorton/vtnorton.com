import { productsItems } from '../../database/ProductShelfItems'

export const NextProjectComponent = ({ path }: { path: string }) => {
	const getProduct = () => {
		const currentProject = productsItems.filter((x) => x.link == path)[0]
		const indexOfCurrentProject = productsItems.indexOf(currentProject)
		const indexOfNextProject = indexOfCurrentProject === productsItems.length - 1 ? 0 : indexOfCurrentProject + 1
		return productsItems[indexOfNextProject]
	}

	const project = getProduct()
	const altDescription = `Logo do projeto ${project.name}`

	return (
		<a href={project.link} className='project-next' data-scrolled-into-view='true'>
			<img src={project.imageUrl} alt={altDescription} />
			<div className='meta-project'>
				<span>conheça também:</span>
				<h1>{project.name}</h1>
			</div>
		</a>
	)
}
