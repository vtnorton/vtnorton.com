import { faDiscord, faGithub, faInstagram, faLinkedin, faTwitch, faTwitter, faYoutube, faDev } from '@fortawesome/free-brands-svg-icons'
import { faRss } from '@fortawesome/free-solid-svg-icons'

import { SocialMedias, SocialProfile } from '../interfaces'

export const SocialProfiles: SocialProfile[] = [
	{
		media: SocialMedias.GitHub,
		icon: faGithub,
		url: 'https://github.com/vtnorton',
	},
	{
		media: SocialMedias.Instagram,
		icon: faInstagram,
		url: 'https://instagram.com/vt_norton',
	},
	{
		media: SocialMedias.Discord,
		icon: faDiscord,
		url: 'https://discord.gg/hY3pTjMxmG',
	},
	{
		media: SocialMedias.LinkedIn,
		icon: faLinkedin,
		url: 'https://linkedin.com/in/vtnorton',
	},
	{
		media: SocialMedias.RSS,
		icon: faRss,
		url: 'https://vtnorton.com/rss',
	},
	{
		media: SocialMedias.Twitch,
		icon: faTwitch,
		url: 'https://twitch.tv/vt_norton',
	},
	{
		media: SocialMedias.Twitter,
		icon: faTwitter,
		url: 'https://twitter.com/vt_norton',
	},
	{
		media: SocialMedias.YouTube,
		icon: faYoutube,
		url: 'https://www.youtube.com/channel/UCMM0acsrwNvI0tEML8-vAjw',
	},
	{
		media: SocialMedias.Dev,
		icon: faDev,
		url: 'https://dev.to/vtnorton',
	},
]

export const GetProfile = (media: SocialMedias): SocialProfile | undefined => {
	return SocialProfiles.find((x) => x.media == media)
}
