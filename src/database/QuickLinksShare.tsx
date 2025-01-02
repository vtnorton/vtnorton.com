import { SocialMedias } from '../interfaces'
import { GetProfile } from './SocialMedias'

export const primaryLinks = [
	{
		text: 'acessar site',
		url: 'https://vtnorton.com/?utm_source=instagramlinks&utm_campaign=fixed_link',
	},
	{
		text: 'live na twitch',
		url: GetProfile(SocialMedias.Twitch)?.url as string,
	},
	{
		text: 'server no discord',
		url: GetProfile(SocialMedias.Discord)?.url as string,
	},
	{
		text: '@vt_norton no bsky',
		url: GetProfile(SocialMedias.BlueSky)?.url as string,
	},
	{
		text: 'canal no youtube',
		url: GetProfile(SocialMedias.YouTube)?.url as string,
	},
]

export const secondaryLinks = [
	{ text: 'formula app', url: 'https://vtnorton.com/formula?utm_source=instagramlinks&utm_campaign=fixed_link' },
	{ text: 'heartthrob', url: 'https://vtnorton.com/heartthrob?utm_source=instagramlinks&utm_campaign=fixed_link' },
	{ text: 'blog', url: 'https://vtnorton.com/blog?utm_source=instagramlinks&utm_campaign=fixed_link' },
	{ text: 'github', url: GetProfile(SocialMedias.GitHub)?.url as string },
	{ text: '@vt_norton', url: GetProfile(SocialMedias.Instagram)?.url as string },
	{ text: '@vtn_showcase', url: 'https://instagram.com/vtn_showcase' },
]
