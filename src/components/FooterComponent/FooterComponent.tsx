import { SocialProfiles } from '../../database/SocialMedias'
import { SocialProfile } from '../../interfaces'
import Link from 'next/link'
import Image from 'next/image'

export const FooterComponent = () => {
	const renderSocialMedia = () => {
		return (
			<div className='social'>
				{SocialProfiles.map((item: SocialProfile, index: number) => (
					<a key={index} href={item.url} aria-label={item.media.toString()} target='_blank' rel='noopener noreferrer'>
						<Image height={24} width={24} src={`/img/icons/social/${item.media.toLowerCase()}.svg`} alt={item.media} />
						<p className='hide'>Ir para {item.media}</p>
					</a>
				))}
			</div>
		)
	}

	return (
		<footer className='container'>
			<div className='text-center showcase'>
				<Link href='/'>
					<img src='/img/logo-color.png' alt='vtnorton' />
				</Link>
				{renderSocialMedia()}

				<p>
					no downtime for hustle-as-a-service - <a href='mailto:contato@vtnorton.com'>contato@vtnorton.com</a> <br />
				</p>
				<p className='creative-commons'>
					Para melhorar a UX do site, utilizo Microsoft Clarity para entender como você navega aqui. Ao usar o site você concorda que eu e a Microsoft Podemos coletar alguns dados (anônimos). Sua privacidade é real importante pra mim, veja a <Link href='/termos/site'>política de privacidade</Link>. <br />O conteúdo deste site é licenciado sob a licença:{' '}
					<a href='http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1' target='_blank' rel='license noopener noreferrer'>
						<br />(CC BY-NC-SA 4.0)<br />
						<Image height={22} width={22} unoptimized src='https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1' alt='CC: Creative Commons' />
						<Image height={22} width={22} unoptimized src='https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1' alt='BY: Credit must be given to you, the creator.' />
						<Image height={22} width={22} unoptimized src='https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1' alt='NC: Only noncommercial use of your work is permitted.' />
						<Image height={22} width={22} unoptimized src='https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1' alt='SA: Adaptations must be shared under the same terms.' />
					</a>
				</p>
			</div>
		</footer>
	)
}
