import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { VtnButtonComponentPros } from './VtnButtonComponentProps'

export const VtnButtonComponent = (props: VtnButtonComponentPros) => {
	const classesNames = `btn ${props.classesNames}`
	return (
		<a href={props.url} className={classesNames}>
			{props.icon && <FontAwesomeIcon icon={props.icon} />}
			{props.text}
		</a>
	)
}
