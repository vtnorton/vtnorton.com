import { SocialMedias, SocialProfile } from '../interfaces'

export const SocialProfiles: SocialProfile[] = [
	{
		media: SocialMedias.GitHub,
		url: 'https://github.com/vtnorton',
	},
	{
		media: SocialMedias.Instagram,
		url: 'https://instagram.com/vt_norton',
	},
	{
		media: SocialMedias.Discord,
		url: 'https://discord.gg/hY3pTjMxmG',
	},
	{
		media: SocialMedias.LinkedIn,
		url: 'https://linkedin.com/in/vtnorton',
	},
	{
		media: SocialMedias.RSS,
		url: 'https://vtnorton.com/rss',
	},
	{
		media: SocialMedias.Twitch,
		url: 'https://twitch.tv/vt_norton',
	},
	{
		media: SocialMedias.BlueSky,
		url: 'https://bsky.app/profile/vtnorton.bsky.social',
	},
	{
		media: SocialMedias.YouTube,
		url: 'https://www.youtube.com/channel/UCMM0acsrwNvI0tEML8-vAjw',
	},
	{
		media: SocialMedias.Dev,
		url: 'https://dev.to/vtnorton',
	},
]

export const GetProfile = (media: SocialMedias): SocialProfile | undefined => {
	return SocialProfiles.find((x) => x.media == media)
}
