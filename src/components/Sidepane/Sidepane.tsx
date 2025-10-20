import { SocialMedias } from '../Socials'
import { SidePaneCard } from './SidePaneCard'

export const SidePane = () => {
	return (
		<div className='sidepane'>
			<div className='cards'>
				<SidePaneCard image='blog' title={'Blog pessoal'} description={'Meu espaço sem compromisso na web, que talvez não devesse estar aqui'} link={'/blog'} />
			</div>
			<div className='footer'>
				<SocialMedias />
				<p><small>no downtime for hustle-as-a-service</small></p>
			</div>
		</div>)
}