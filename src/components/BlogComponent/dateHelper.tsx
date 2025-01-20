export const getDate = (date: string): string => {
	const options: Intl.DateTimeFormatOptions = {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		timeZone: 'UTC',
	}

	const formatedDate = new Date(date).toLocaleString('pt-BR', options).replace(',', ' às')

	return formatedDate
}