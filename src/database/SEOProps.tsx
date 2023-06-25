import { NextSeo, NextSeoProps } from 'next-seo'
import { useRouter } from 'next/router'

import { SocialMedias } from '../interfaces'
import { GetProfile } from './SocialMedias'

interface Props {
	title: string
	description: string
	featureImage: string
	locale?: string
	ogType?: string
	tags?: string[]
	publishedTime?: string
}

export const SEOMetaData: NextSeoProps = {
	titleTemplate: '%s | vítor norton 🤘🚀🥑',
	defaultTitle: 'vítor norton | developer relations | 🤘🚀🥑',
	description: 'Lives na Twitch, clube do livro, desenvolvimento de apps e web, mitologia grega, música e séries de TV. Um compilado do que eu sou e do que eu faço, chega mais!',
	robotsProps: {
		nosnippet: false,
		notranslate: false,
		noimageindex: false,
		noarchive: false,
		maxSnippet: -1,
		maxImagePreview: 'none',
		maxVideoPreview: -1,
	},
	themeColor: '#0078d7',
	twitter: {
		cardType: 'summary_large_image',
		site: GetProfile(SocialMedias.Twitter)?.url,
		handle: GetProfile(SocialMedias.Twitter)?.url,
	},
}

export const SeoProps = (props: Props) => {
	const router = useRouter()
	const pageUrl = `https://vtnorton.com${router.pathname}`
	const nextSeoProps: NextSeoProps = {
		...SEOMetaData,
		title: props.title,
		description: props.description,
		canonical: pageUrl,
		openGraph: {
			type: props.ogType ? props.ogType : 'website',
			url: pageUrl,
			description: props.description,
			locale: props.locale ? props.locale : 'pt-BR',
			siteName: 'vtnorton',
			profile: {
				firstName: 'Vítor',
				lastName: 'Norton',
				username: GetProfile(SocialMedias.Twitter)?.url,
				gender: 'male',
			},
			article:
				props.ogType == 'article'
					? {
							tags: props.tags,
							section: 'blog',
							authors: ['Vítor Norton'],
							publishedTime: props.publishedTime,
					  }
					: undefined,
			images: [
				{
					url: props.featureImage,
					width: 800,
					height: 600,
					alt: props.title,
				},
			],
		},
	}
	return <NextSeo {...nextSeoProps} />
}
