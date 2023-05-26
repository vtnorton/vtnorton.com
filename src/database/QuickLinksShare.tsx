import { fa1 } from '@fortawesome/free-solid-svg-icons'
import { VtnButtonComponentPros } from '../components'
import { faEdge, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

export const primaryLinks: VtnButtonComponentPros[] = [
	{
		text: 'acessar site',
		url: 'https://vtnorton.com/?utm_source=instagramlinks&utm_campaign=fixed_link',
		icon: faEdge,
	},
	{
		text: 'live na twitch',
		url: 'https://twitch.tv/vt_norton',
		icon: faTwitch,
	},
	{
		text: '@vt_norton no twitter',
		url: 'https://twitter.com/vt_norton',
		icon: faTwitter,
	},
	{
		text: 'canal no youtube',
		url: 'https://www.youtube.com/channel/UCMM0acsrwNvI0tEML8-vAjw',
		icon: faYoutube,
	},
]

export const secondaryLinks: VtnButtonComponentPros[] = [
	{ text: 'formula app', url: 'https://vtnorton.com/formula?utm_source=instagramlinks&utm_campaign=fixed_link' },
	{ text: 'heartthrob', url: 'https://vtnorton.com/heartthrob?utm_source=instagramlinks&utm_campaign=fixed_link' },
	{ text: 'blog', url: 'https://vtnorton.com/blog?utm_source=instagramlinks&utm_campaign=fixed_link' },
	{ text: 'portfolio', url: 'https://vtnorton.com/portfolio' },
	{ text: '@vt_norton', url: 'https://instagram.com/vt_norton' },
	{ text: '@vtn_showcase', url: 'https://instagram.com/vtn_showcase' },
]
