/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		notionToken: process.env.NOTION_TOKEN,
		notionSecret: process.env.NOTION_SECRET,
		devrelDb: process.env.DEVREL_DB,
		instagramAccessToken: process.env.INSTAGRAM_TOKEN,
		discordToken: process.env.DISCORD_TOKEN,
		youtubeKey: process.env.YOUTUBE_KEY,
	},
}

module.exports = nextConfig
