import { faGithub, faInstagram, faLinkedin, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
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
		media: SocialMedias.LinkedIn,
		icon: faLinkedin,
		url: 'https://linkedin.com/in/vtnorton',
	},
	{
		media: SocialMedias.RSS,
		icon: faRss,
		url: 'https://vtnorton.com/rss.xml',
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
]

export const GetProfile = (media: SocialMedias): SocialProfile | undefined => {
	return SocialProfiles.find((x) => x.media == media)
}
