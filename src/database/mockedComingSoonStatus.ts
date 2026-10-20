import { type ComingSoonStatus, ProgressCategory } from '../types/ComingSoonStatus'

export const mockedComingSoonStatus: ComingSoonStatus = {
	lastUpdatedAt: '2026-10-20T06:00:00-03:00',
	counters: [
		{ category: ProgressCategory.FrictionRelease, completed: 214, total: 391 },
		{ category: ProgressCategory.Analyzing, completed: 2, total: 4 },
		{ category: ProgressCategory.Setup, completed: 3, total: 36 },
		{ category: ProgressCategory.Creating, completed: 17, total: 142 },
		{ category: ProgressCategory.Launching, completed: 11, total: 29 },
	],
	povSlotCount: 8,
}
