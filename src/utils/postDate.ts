export const getDate = (date: string) => {
	const postDate = new Date(date)
	const currentDate = new Date()

	const diffTime = Math.abs(currentDate.getTime() - postDate.getTime())
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

	if (diffDays === 0) {
		return 'hoje'
	}
	if (diffDays === 1) {
		return 'ontem'
	}
	if (diffDays < 7) {
		return `há ${diffDays} dias`
	}
	if (diffDays < 30) {
		const weeks = Math.floor(diffDays / 7)
		return weeks === 1 ? 'há uma semana' : `há ${weeks} semanas`
	}

	const day = postDate.getDate()
	const month = postDate.toLocaleString('pt-BR', { month: 'long' })
	const year = postDate.getFullYear()

	return `em ${day} de ${month} de ${year}`
}