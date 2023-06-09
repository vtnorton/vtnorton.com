import { IconProp } from '@fortawesome/fontawesome-svg-core'

export enum SocialMedias {
	Twitch,
	YouTube,
	Instagram,
	GitHub,
	RSS,
	LinkedIn,
	Twitter,
}

export interface SocialProfile {
	icon: IconProp
	media: SocialMedias
	url: string
}
