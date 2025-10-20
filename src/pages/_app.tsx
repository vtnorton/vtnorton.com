import type { AppProps } from 'next/app'
import Head from 'next/head'
import { FluentProvider, Theme, webLightTheme } from '@fluentui/react-components'

import '../styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
	const customLightTheme: Theme = {
		...webLightTheme,
	}


	return (
		<>
			<Head>
				<title>Meu Blog Pessoal</title>
			</Head>

			<FluentProvider theme={customLightTheme}>
				<Component {...pageProps} />
			</FluentProvider>
		</>
	)
}
