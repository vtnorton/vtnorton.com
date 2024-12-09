import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
	return (
		<Html>
			<Head></Head>
			<Script strategy='beforeInteractive' async src='https://www.googletagmanager.com/gtag/js?id=G-3GCRXEKYLS' />

			<Script strategy='beforeInteractive' id='google-analytics'>
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments)}
					gtag('js', new Date());

					gtag('config', 'G-3GCRXEKYLS');
				`}
			</Script>
			<Script id="clarity-script" strategy="afterInteractive">
				{`
            (function(c,l,a,r,i,t,y){
								c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
								t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
								y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
						})(window, document, "clarity", "script", "pbhdsjcylq");
          `}
			</Script>
			<Main />
			<NextScript />
		</Html>
	)
}
