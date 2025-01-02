export enum SocialMedias {
	Twitch = 'Twitch',
	YouTube = 'YouTube',
	Instagram = 'Instagram',
	GitHub = 'GitHub',
	RSS = 'RSS',
	LinkedIn = 'LinkedIn',
	BlueSky = 'BlueSky',
	Discord = 'Discord',
	Dev = 'Dev.to',
}

export interface SocialProfile {
	media: SocialMedias
	url: string
}
