import Head from 'next/head'
import { useRouter } from 'next/router'
import { ArticleJsonLd, CreativeWorkJsonLd, ProfilePageJsonLd } from 'next-seo'

import { Medias as SocialMedias } from '../components/Socials/Socials'
import { GetProfile } from '../components/Socials/socialProfiles'

interface Props {
	title: string
	description?: string
	featureImage?: string // TODO: criar imagem automaticamente
	ogType?: 'website' | 'article' | 'profile' | 'portfolio'
	tags?: string[]
	date?: string
	category?: string
}

const SITE_URL = 'https://vtnorton.com'

export const ContentSEO = (props: Props) => {
	const router = useRouter()
	const pageUrl = `${SITE_URL}${router.asPath}`
	const title = `${props.title} | Vitor Norton`
	const rawTitle = props.title
	const description = props.description || 'Desenvolvedor e Developer Advocate com mais de 10 anos conectando código, comunidades e pessoas. Portfólio público desde 2015: posts, talks, experimentos e projetos que recusei ignorar e começaram como tentativas e viraram impacto real.'

	const images: { url: string; alt: string; width: number; height: number }[] = []
	if (props.featureImage) {
		images.push({
			url: props.featureImage.startsWith('http') ? props.featureImage : `${SITE_URL}/${props.featureImage}`,
			alt: rawTitle,
			width: 1200,
			height: 630,
		})
	} else {
		images.push({
			url: `${SITE_URL}/img/other/og/fallback.png`,
			width: 1200,
			height: 630,
			alt: 'Vitor Norton',
		})
	}

	const metaOgType = props.ogType === 'portfolio' ? 'website' : (props.ogType || 'website')
	const publishedTime = props.date || new Date().toISOString()

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#0559C1' />
				<meta name='robots' content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />

				<meta property='og:url' content={pageUrl} />
				<meta property='og:type' content={metaOgType} />
				<meta property='og:title' content={title} />
				<meta property='og:description' content={description} />
				<meta property='og:locale' content='pt_BR' />
				<meta property='og:site_name' content='Vitor Norton' />

				{images.map((img, i) => (
					<meta key={`og-img-${i}`} property='og:image' content={img.url} />
				))}
				{images.map((img, i) => (
					<meta key={`og-img-w-${i}`} property='og:image:width' content={img.width.toString()} />
				))}
				{images.map((img, i) => (
					<meta key={`og-img-h-${i}`} property='og:image:height' content={img.height.toString()} />
				))}
				{images.map((img, i) => (
					<meta key={`og-img-alt-${i}`} property='og:image:alt' content={img.alt} />
				))}

				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:site' content='@vt_norton' />
				<meta name='twitter:creator' content='@vt_norton' />

				{props.ogType === 'article' && props.date && (
					<>
						<meta property='article:published_time' content={props.date} />
						<meta property='article:modified_time' content={props.date} />
						<meta property='article:author' content='Vitor Norton' />
						{props.category && <meta property='article:section' content={props.category} />}
						{props.tags && props.tags.map((tag, i) => (
							<meta key={`tag-${i}`} property='article:tag' content={tag} />
						))}
					</>
				)}

				{props.ogType === 'profile' && (
					<meta property='profile:username' content='vtnorton' />
				)}
			</Head>

			{props.ogType === 'portfolio' && (
				<CreativeWorkJsonLd
					name={rawTitle}
					description={description}
					url={pageUrl}
					image={images.map((i) => i.url)}
					author={[{ name: 'Vitor Norton', url: SITE_URL }]}
					datePublished={props.date}
				/>
			)}

			{props.ogType === 'article' && (
				<ArticleJsonLd
					url={pageUrl}
					headline={rawTitle}
					image={images.map((i) => i.url)}
					datePublished={publishedTime}
					dateModified={publishedTime}
					author={[{ name: 'Vitor Norton', url: SITE_URL }]}
					description={description}
					isAccessibleForFree={true}
				/>
			)}

			{props.ogType === 'profile' && (
				<ProfilePageJsonLd
					mainEntity={{
						'@type': 'Person',
						name: 'Vitor Norton',
						alternateName: 'vtnorton',
						description: description,
						image: images[0]?.url,
						sameAs: [
							GetProfile(SocialMedias.GitHub)?.url,
							GetProfile(SocialMedias.LinkedIn)?.url,
						].filter(Boolean) as string[],
					}}
					dateCreated={publishedTime}
					dateModified={publishedTime}
				/>
			)}
		</>
	)
}
