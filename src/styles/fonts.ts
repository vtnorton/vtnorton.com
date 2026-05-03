import { IBM_Plex_Mono, Plus_Jakarta_Sans } from 'next/font/google'

export const bodyFont = Plus_Jakarta_Sans({
	subsets: ['latin'],
	variable: '--font-body',
	display: 'swap',
	weight: ['400', '500', '600'],
})

export const monoFont = IBM_Plex_Mono({
	subsets: ['latin'],
	variable: '--font-mono',
	weight: ['400', '500'],
	display: 'swap',
})
