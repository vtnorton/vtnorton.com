export enum Medias {
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

export interface Profile {
	media: Medias
	url: string
}
