import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { VtnButtonComponentPros } from './VtnButtonComponentProps'

/**
 * @deprecated This component is deprecated and will be removed in future versions. 
 * Please use the Fluent UI instead.
 */
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
