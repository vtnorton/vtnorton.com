export const CACHE_KEYS = {
	TECH_BLOG_POSTS: 'tech-blog-posts-all',
	PERSONAL_BLOG_POSTS: 'personal-blog-posts-all',
	ALL_BLOG_POSTS: 'all-blog-posts',
	PALESTRAS: 'palestras-all',
}

export const BLOG_CACHE_KEYS = [CACHE_KEYS.ALL_BLOG_POSTS, CACHE_KEYS.TECH_BLOG_POSTS, CACHE_KEYS.PERSONAL_BLOG_POSTS]

export const CACHE_TTL_SECONDS = 60 * 60

export const getProjectChangelogsCacheKey = (projectSlug: string): string => {
	return `project-${projectSlug}-changelogs`
}
