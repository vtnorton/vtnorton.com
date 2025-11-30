import { ButtonProps, Button as FluentButton } from '@fluentui/react-components'
import * as React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

export const Button = ({ className, children, ...props }: ButtonProps) => {
	let classNames = ('vtn_button ' + className).trim()

	if (props.appearance === 'transparent')
		classNames += ' transparent'

	return (
		<FluentButton className={classNames} {...props}>
			{children} <span className='arrow'><FiArrowUpRight size={20} /></span>
		</FluentButton>
	)
}