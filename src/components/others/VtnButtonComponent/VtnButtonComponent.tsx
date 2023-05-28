import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { VtnButtonComponentPros } from './VtnButtonComponentProps'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const VtnButtonComponent = (props: VtnButtonComponentPros) => {
	const classesNames = !props.isLink ? `btn ${props.classesNames}` : 'btn btn-link'
	let icon = props.icon ? props.icon : undefined
	icon = props.isLink ? faChevronRight : props.icon
	return (
		<a href={props.url} className={classesNames}>
			{icon && <FontAwesomeIcon icon={icon} />}
			{props.text}
		</a>
	)
}
