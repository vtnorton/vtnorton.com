export const CACHE_KEYS = {
	TECH_BLOG_POSTS: 'tech-blog-posts-all',
	PERSONAL_BLOG_POSTS: 'personal-blog-posts-all',
	ALL_BLOG_POSTS: 'all-blog-posts',
	PALESTRAS: 'palestras-all',
}

// Todas as chaves que guardam a lista de posts do blog. Mantê-las juntas
// garante que elas sejam invalidadas em conjunto e nunca fiquem inconsistentes.
export const BLOG_CACHE_KEYS = [CACHE_KEYS.ALL_BLOG_POSTS, CACHE_KEYS.TECH_BLOG_POSTS, CACHE_KEYS.PERSONAL_BLOG_POSTS]

// TTL padrão do cache de posts: 1 hora. Como o filtro de data agora é aplicado
// na leitura (e não fica congelado no snapshot), uma postagem publicada aparece
// no máximo em 1 hora mesmo sem invalidação manual.
export const CACHE_TTL_SECONDS = 60 * 60

export const getProjectChangelogsCacheKey = (projectSlug: string): string => {
	return `project-${projectSlug}-changelogs`
}
