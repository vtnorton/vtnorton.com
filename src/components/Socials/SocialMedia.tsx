import { profiles } from './socialProfiles'
import Image from 'next/image'

export const SocialMedias = () => {
	return (
		<div className='social'>
			{profiles.map((item, index) => (
				<a key={index} href={item.url} aria-label={item.media.toString()} target='_blank' rel='noopener noreferrer'>
					<Image height={16} width={16} src={`/img/icons/social/${item.media.toLowerCase()}.svg`} alt={item.media} />
					<p>Ir para {item.media}</p>
				</a>
			))}
		</div>
	)
}