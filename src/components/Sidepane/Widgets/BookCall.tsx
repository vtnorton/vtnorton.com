import { useState } from 'react'
import { WidgetPrimaryWrapper, WidgetSecondaryWrapper } from '../Widgets'

const PrimaryBookCall = () => {
	return (
		<WidgetPrimaryWrapper>
			<p>
				<span className='cta'>
					<span className='default'>Marque um chat</span>
					<span className='hover'>Pronto pra um meet?</span>
				</span>
				<span className='slash'>/</span>
				<small>com o Norton</small>
			</p>
		</WidgetPrimaryWrapper>
	)
}

const SecondaryBookCall = () => {
	const [isHovered, setIsHovered] = useState(false);
	const date = new Date();
	const month = date.toLocaleString('pt-BR', { month: '2-digit' });
	const year = date.getFullYear();

	const CalendarIcon = ({ moreColor }: { moreColor: boolean }) => {
		const color = '#0559C1'
		return (
			<svg viewBox="0 0 512 512" width="1.6rem" height="1.6rem">
				<rect width="416" height="384" x="48" y="80" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" rx="48" />
				<circle cx="296" cy="232" r="24" fill={color} />
				<circle cx="376" cy="232" r="24" fill={color} />
				<circle cx="296" cy="312" r="24" fill={moreColor ? color : "currentColor"} />
				<circle cx="376" cy="312" r="24" fill="currentColor" />
				<circle cx="136" cy="312" r="24" fill={color} />
				<circle cx="216" cy="312" r="24" fill={color} />
				<circle cx="136" cy="392" r="24" fill="currentColor" />
				<circle cx="216" cy="392" r="24" fill="currentColor" />
				<circle cx="296" cy="392" r="24" fill="currentColor" />
				<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M128 48v32m256-32v32" />
				<path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" d="M464 160H48" />
			</svg>
		)
	}

	return (
		<WidgetSecondaryWrapper onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<CalendarIcon moreColor={isHovered} />
			<p>
				<small>3<span className='hover'>(+1)</span>espaços na agenda <span className='date'>{month}/{year}</span></small>
			</p>
		</WidgetSecondaryWrapper>
	)
}


export const BookCall = ({ usePrimary }: { usePrimary: boolean }) => {
	return (
		<a className='bookcall' href='/' target='_blank' rel='noopener noreferrer'>
			{usePrimary ? <PrimaryBookCall /> : <SecondaryBookCall />}
		</a>
	)
}