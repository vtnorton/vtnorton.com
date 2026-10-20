export const ProgressCategory = {
	FrictionRelease: 'friction release',
	Analyzing: 'analyzing',
	Setup: 'setup',
	Creating: 'creating',
	Launching: 'launching',
} as const

export type ProgressCategory = (typeof ProgressCategory)[keyof typeof ProgressCategory]

export type Progress = {
	completed: number
	total: number
}

export type ProgressCounter = {
	category: ProgressCategory
	progress: Progress | null
}

export type ComingSoonStatus = {
	lastUpdatedAt: string
	counters: ProgressCounter[]
}
