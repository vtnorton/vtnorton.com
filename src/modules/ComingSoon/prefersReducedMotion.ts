export const prefersReducedMotion = (): boolean => {
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
