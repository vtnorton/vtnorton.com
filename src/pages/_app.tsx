import type { AppProps } from 'next/app'
import Head from 'next/head'
import { BrandVariants, createLightTheme, FluentProvider, Theme } from '@fluentui/react-components'

import '../styles/global.scss'
import { LayoutProvider } from '../providers/LayoutProvider'
import { SidePane } from '../components/Sidepane/Sidepane'

export default function App({ Component, pageProps }: AppProps) {
	const myNewTheme: BrandVariants = {
		10: '#020206',
		20: '#121627',
		30: '#162C44',
		40: '#1A2F61',
		50: '#193B7C',
		60: '#164899',
		70: '#0559C1',
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
				<title>Meu Blog Pessoal</title>
			</Head>

			<FluentProvider theme={lightTheme}>
				<LayoutProvider>
					<SidePane>
						<Component {...pageProps} />
					</SidePane>
				</LayoutProvider>
			</FluentProvider>
		</>
	)
}
