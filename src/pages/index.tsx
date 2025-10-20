import React from 'react'
import { SidePaneCard } from '../modules/HomePage/SidePaneCard'

export default function Index() {
	return (
		<article className='homepage'>
			<div className='sidepane'>
				<div className='cards'>
					<SidePaneCard title={'Blog pessoal'} description={'Meu espaço sem compromisso na web, que talvez não devesse estar aqui'} link={'/blog'} />
				</div>
				<div className='socials'>

				</div>
			</div>
			<div className='promo'>

			</div>
		</article>
	)
}
