import { differenceInCalendarDays, format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const isLessThanOneWeekOld = (dateString: string): boolean => {
	if (!dateString) return false

	const itemDate = parseISO(dateString)
	const now = new Date()
	const diffDays = differenceInCalendarDays(now, itemDate)

	return diffDays >= 0 && diffDays < 7
}

export const getDate = (date: string) => {
	const postDate = parseISO(date)
	const currentDate = new Date()

	const diffDays = differenceInCalendarDays(currentDate, postDate)

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

	return format(postDate, '\'em\' d \'de\' MMMM \'de\' yyyy', { locale: ptBR })
}
