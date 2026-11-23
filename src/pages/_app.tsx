import { type BrandVariants, createLightTheme, FluentProvider, type Theme } from '@fluentui/react-components'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
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

			<Script src='https://www.googletagmanager.com/gtm.js?id=GTM-WWXS9F3Z' strategy='afterInteractive' />
			<Script id='google-tag-manager' strategy='afterInteractive'>
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
				`}
			</Script>

			<Script id='clarity-script' strategy='afterInteractive'>
				{`
					(function(c,l,a,r,i,t,y){
						c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
						t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
						y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
					})(window, document, "clarity", "script", "pbhdsjcylq");
				`}
			</Script>

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
