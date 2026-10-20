import { type BrandVariants, createLightTheme, FluentProvider, type Theme } from '@fluentui/react-components'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import 'animate.css'

import '../styles/global.scss'
import { SidePane } from '../components/Sidepane/Sidepane'
import { LayoutProvider } from '../providers/LayoutProvider'
import { bodyFont, monoFont } from '../styles/fonts'

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()
	const isPostPage = router.pathname === '/[year]/[month]/[slug]'
	const isComingSoonPage = router.pathname === '/'
	const initialBreakpoint = isPostPage ? 2200 : 1500

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
				<title>Meu Blog</title>
			</Head>

			<div className={`${bodyFont.variable} ${monoFont.variable}`}>
				<FluentProvider theme={lightTheme}>
					{isComingSoonPage ? (
						<Component {...pageProps} />
					) : (
						<LayoutProvider initialBreakpoint={initialBreakpoint}>
							<SidePane>
								<Component {...pageProps} />
							</SidePane>
						</LayoutProvider>
					)}
				</FluentProvider>
			</div>
		</>
	)
}
