import { productsItems } from '../../database/ProductShelfItems'
import { NextProjectComponent } from './NextProjectComponent'
import { ProjectPageComponentProps } from './ProjectPageComponentProps'

export const ProjectPageComponent = (props: ProjectPageComponentProps) => {
	const project = () => {
		const currentProject = productsItems.filter((x) => x.link == window.location.pathname)[0]
		const indexOfCurrentProject = productsItems.indexOf(currentProject)
		const indexOfNextProject = indexOfCurrentProject === productsItems.length - 1 ? 0 : indexOfCurrentProject + 1

		return productsItems[indexOfNextProject]
	}
	return (
		<section>
			<>
				{props.children}
				<NextProjectComponent item={project()} />
			</>
		</section>
	)
}
