import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { SocialProfiles } from '../../database/SocialMedias'
import { SocialProfile } from '../../interfaces'

export const FooterComponent = () => {
	const renderSocialMedia = () => {
		return (
			<div className='social'>
				{SocialProfiles.map((item: SocialProfile, index: number) => (
					<a key={index} href={item.url} target='_blank' rel='noopener noreferrer'>
						<FontAwesomeIcon icon={item.icon} />
					</a>
				))}
			</div>
		)
	}

	return (
		<footer className='container'>
			<div className='text-center showcase'>
				<a href='/'>
					<img src='/img/logo-color.png' alt='vtnorton' />
				</a>
				{renderSocialMedia()}
				<p>
					no downtime for hustle-as-a-service - <a href='mailto:contato@vtnorton.com'>contato@vtnorton.com</a> <br />
				</p>
				<p className='creative-commons'>
					Acesse a <a href='/termos/site'>política de privacidade e termos de uso do site</a>. <br />O conteúdo deste site é licenciado sob a licença{' '}
					<a href='http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1' target='_blank' rel='license noopener noreferrer'>
						Attribution-NonCommercial-ShareAlike 4.0 (CC BY-NC-SA 4.0) International
						<img src='https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1' alt='CC: Creative Commons' />
						<img src='https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1' alt='BY: Credit must be given to you, the creator.' />
						<img src='https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1' alt='NC: Only noncommercial use of your work is permitted.' />
						<img src='https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1' alt='SA: Adaptations must be shared under the same terms.' />
					</a>
				</p>
			</div>
		</footer>
	)
}
