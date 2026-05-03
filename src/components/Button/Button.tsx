import { type ButtonProps, Button as FluentButton } from '@fluentui/react-components'
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
	const classNames = []

	if (className)
		classNames.push(className)

	if (props.size === 'small')
		classNames.push('button-size-small')
	else if (props.size === 'large')
		classNames.push('button-size-large')
	else
		classNames.push('button-size-medium')

	if (props.appearance === 'transparent')
		classNames.push('transparent')

	if (onlyIcon)
		classNames.push('only-icon')

	return (
		<FluentButton className={classNames.join(' ')} {...props}>
			{children} <span className='arrow'><FiArrowUpRight size={20} /></span>
		</FluentButton>
	)
}
