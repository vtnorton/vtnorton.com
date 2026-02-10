import { ReactElement, ReactNode } from 'react'

export interface VerticalSteperProps {
	children: ReactNode[] | ReactElement;
	title: string;
	number: number;
}
