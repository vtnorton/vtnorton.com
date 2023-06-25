import { faEdge } from '@fortawesome/free-brands-svg-icons'

import { VtnButtonComponentPros } from '../components'
import { SocialMedias } from '../interfaces'
import { GetProfile } from './SocialMedias'

export const primaryLinks: VtnButtonComponentPros[] = [
	{
		text: 'acessar site',
		url: 'https://vtnorton.com/?utm_source=instagramlinks&utm_campaign=fixed_link',
		icon: faEdge,
	},
	{
		text: 'live na twitch',
		url: GetProfile(SocialMedias.Twitch)?.url as string,
		icon: GetProfile(SocialMedias.Twitch)?.icon,
	},
	{
		text: '@vt_norton no twitter',
		url: GetProfile(SocialMedias.Twitter)?.url as string,
		icon: GetProfile(SocialMedias.Twitter)?.icon,
	},
	{
		text: 'canal no youtube',
		url: GetProfile(SocialMedias.YouTube)?.url as string,
		icon: GetProfile(SocialMedias.YouTube)?.icon,
	},
]

export const secondaryLinks: VtnButtonComponentPros[] = [
	{ text: 'formula app', url: 'https://vtnorton.com/formula?utm_source=instagramlinks&utm_campaign=fixed_link' },
	{ text: 'heartthrob', url: 'https://vtnorton.com/heartthrob?utm_source=instagramlinks&utm_campaign=fixed_link' },
	{ text: 'blog', url: 'https://vtnorton.com/blog?utm_source=instagramlinks&utm_campaign=fixed_link' },
	{ text: 'github', url: GetProfile(SocialMedias.GitHub)?.url as string },
	{ text: '@vt_norton', url: GetProfile(SocialMedias.Instagram)?.url as string },
	{ text: '@vtn_showcase', url: 'https://instagram.com/vtn_showcase' },
]
