import { Medias, Profile } from './Socials'

export const profiles: Profile[] = [
	{
		media: Medias.GitHub,
		url: 'https://github.com/vtnorton',
	},
	{
		media: Medias.Twitch,
		url: 'https://twitch.tv/vt_norton',
	},
	{
		media: Medias.Instagram,
		url: 'https://instagram.com/vt_norton',
	},
	{
		media: Medias.BlueSky,
		url: 'https://bsky.app/profile/vtnorton.com',
	},
	{
		media: Medias.Dev,
		url: 'https://dev.to/vtnorton',
	},
	{
		media: Medias.LinkedIn,
		url: 'https://linkedin.com/in/vtnorton',
	},
	{
		media: Medias.YouTube,
		url: 'https://www.youtube.com/channel/UCMM0acsrwNvI0tEML8-vAjw',
	},
	{
		media: Medias.Discord,
		url: 'https://discord.gg/hY3pTjMxmG',
	},
]

export const GetProfile = (media: Medias): Profile | undefined => {
	return profiles.find((x) => x.media == media)
}
