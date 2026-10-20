export const ProgressCategory = {
	FrictionRelease: 'friction release',
	Analyzing: 'analyzing',
	Setup: 'setup',
	Creating: 'creating',
	Launching: 'launching',
} as const

export type ProgressCategory = (typeof ProgressCategory)[keyof typeof ProgressCategory]

export type ProgressCounter = {
	category: ProgressCategory
	completed: number
	total: number
}

export type ComingSoonStatus = {
	lastUpdatedAt: string
	counters: ProgressCounter[]
	povSlotCount: number
}
