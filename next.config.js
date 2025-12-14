/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: 'standalone',
	env: {
		notionToken: process.env.NOTION_TOKEN,
		notionSecret: process.env.NOTION_SECRET,
		devrelDb: process.env.DEVREL_DB,
		instagramAccessToken: process.env.INSTAGRAM_TOKEN,
		discordToken: process.env.DISCORD_TOKEN,
		youtubeKey: process.env.YOUTUBE_KEY,
		talksDb: process.env.TALKS_DB,
		host: process.env.HOST,
	},
	// webpack: (config) => {
	// 	config.optimization.minimize = false
	// 	return config
	// },
	images: {
		domains: ['mirrors.creativecommons.org'],
	},
	i18n: {
		locales: ['pt-BR'],
		defaultLocale: 'pt-BR',
	},
	sassOptions: {
		sourceMap: true,
		silenceDeprecations: ['legacy-js-api'],
	},
	async rewrites() {
		return [
			{
				source: '/rss',
				destination: '/api/rss.tsx',
			},
			{
				source: '/olawolff',
				destination: '/portfolio/ola-wolff.tsx',
			},
		]
	},
}

export default nextConfig
