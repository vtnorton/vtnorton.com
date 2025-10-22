export interface PaginatedResponse<T> {
	content: T[]
	pagination: {
		page: number
		limit: number
		total: number
		totalPages: number
		hasMore: boolean
	}
}
