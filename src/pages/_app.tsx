import type { AppProps } from 'next/app'
import Head from 'next/head'

import { LogoComponent } from '../components'
import { VtnortonContextProvider } from '../provider/VtnortonContextProvider'
import { BrandVariants, createLightTheme, FluentProvider, Theme } from '@fluentui/react-components'
import '../styles/heatthrob.scss'
import '../styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
	const myNewTheme: BrandVariants = {
		10: '#020206',
		20: '#121627',
		30: '#172447',
		40: '#1A2F61',
		50: '#193B7C',
		60: '#164899',
		70: '#0C54B6',
		80: '#2B61C5',
		90: '#496FCB',
		100: '#617CD1',
		110: '#768BD6',
		120: '#8999DC',
		130: '#9CA8E2',
		140: '#AEB7E7',
		150: '#C0C6ED',
		160: '#D2D6F2',
	}


	const lightTheme: Theme = {
		...createLightTheme(myNewTheme),
	}

	return (
		<>
			<Head>
				<meta name='theme-color' content='#3B509E'></meta>
				<link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png?v=10' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png?v=10' />
				<link rel='icon' type='image/png' sizes='194x194' href='/favicon/favicon-194x194.png?v=10' />
				<link rel='icon' type='image/png' sizes='192x192' href='/favicon/android-chrome-192x192.png?v=10' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png?v=10' />
				<link rel='manifest' href='/favicon/site.webmanifest?v=10' />
				<link rel='mask-icon' href='/favicon/safari-pinned-tab.svg?v=10' color='#5bbad5' />
				<link rel='shortcut icon' href='/favicon/favicon.ico?v=10' />
				<meta name='msapplication-TileColor' content='#2b5797' />
				<meta name='msapplication-TileImage' content='/favicon/mstile-144x144.png?v=10' />
				<meta name='msapplication-config' content='/favicon/browserconfig.xml?v=10' />
				<link rel='shortcut icon' href='/favicon/favicon-32x32.png' />
			</Head>

			<FluentProvider theme={lightTheme}>
				<VtnortonContextProvider>
					<LogoComponent componentName={Component.name} />
					<Component {...pageProps} />
				</VtnortonContextProvider>
			</FluentProvider>
		</>
	)
}
