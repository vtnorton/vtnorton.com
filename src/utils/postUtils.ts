import { Post } from '../models/Post'

export const shufflePosts = (posts: Post[]): Post[] => {
	const shuffledPosts = [...posts]

	for (let index = shuffledPosts.length - 1; index > 0; index--) {
		const randomIndex = Math.floor(Math.random() * (index + 1));
		[shuffledPosts[index], shuffledPosts[randomIndex]] = [shuffledPosts[randomIndex], shuffledPosts[index]]
	}

	return shuffledPosts
}

export const hasSameCategory = (referencePost: Post, candidatePost: Post): boolean => {
	if (!referencePost.categories || referencePost.categories.length === 0)
		return false

	return candidatePost.categories?.some((category) => referencePost.categories.includes(category)) || false
}

export const isAlreadySelected = (selectedPosts: Post[], candidatePost: Post): boolean => {
	return selectedPosts.some((post) => post.id === candidatePost.id)
}

export const selectPostsByTagOrder = (
	referencePost: Post,
	candidatePosts: Post[],
	selectedPosts: Post[],
	maxPosts: number,
): Post[] => {
	let selected = [...selectedPosts]

	for (const tag of referencePost.hashtags) {
		if (selected.length >= maxPosts)
			break

		const postsForTag = shufflePosts(candidatePosts).filter((candidatePost) => {
			if (isAlreadySelected(selected, candidatePost))
				return false

			return candidatePost.hashtags?.includes(tag)
		})

		selected = [
			...selected,
			...postsForTag.slice(0, maxPosts - selected.length),
		]
	}

	return selected
}

export const completeWithRandomPosts = (
	candidatePosts: Post[],
	selectedPosts: Post[],
	maxPosts: number,
): Post[] => {
	if (selectedPosts.length >= maxPosts)
		return selectedPosts

	const randomCandidates = shufflePosts(candidatePosts).filter(
		(candidatePost) => !isAlreadySelected(selectedPosts, candidatePost),
	)

	return [
		...selectedPosts,
		...randomCandidates.slice(0, maxPosts - selectedPosts.length),
	]
}