import React from 'react'
import { VerticalSteperProps } from './VerticalSteperProps'
import { Step } from './Step'

export function VerticalSteper({ children, showNumber }: { children: React.ReactElement<VerticalSteperProps>[], showNumber?: boolean }) {
	return (
		<div className='vertical-steps'>
			{React.Children.map(children, (child, index) => {
				if (React.isValidElement(child) && child.type === Step)
					return showNumber ? React.cloneElement(child, { number: index + 1 }) : child

			})}
		</div>
	)
}


