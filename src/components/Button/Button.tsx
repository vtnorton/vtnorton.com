import { ButtonProps, Button as FluentButton } from '@fluentui/react-components'
import { FiArrowUpRight } from 'react-icons/fi'

export const Button = (
	{
		onlyIcon,
		className,
		children,
		...props
	}:
		ButtonProps & { onlyIcon?: boolean },
) => {
	let classNames = 'vtn_button'

	if (className)
		classNames += ' ' + className

	if (props.appearance === 'transparent')
		classNames += ' transparent'

	if (onlyIcon)
		classNames += ' only-icon'

	return (
		<FluentButton className={classNames} {...props}>
			{children} <span className='arrow'><FiArrowUpRight size={20} /></span>
		</FluentButton>
	)
}