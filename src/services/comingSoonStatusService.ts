import { comingSoonKvAdapter } from '../adapters/comingSoonKvAdapter'
import { type ComingSoonStatus, ProgressCategory } from '../types/ComingSoonStatus'

const FRICTION_RELEASE_KEY = 'coming-soon:friction-release'
const ANALYZING_KEY = 'coming-soon:analyzing'
const SETUP_KEY = 'coming-soon:setup'
const CREATING_KEY = 'coming-soon:creating'

const getComingSoonStatus = async (): Promise<ComingSoonStatus> => {
	const [frictionRelease, analyzing, setup, creating] = await Promise.all([
		comingSoonKvAdapter.readProgress(FRICTION_RELEASE_KEY),
		comingSoonKvAdapter.readProgress(ANALYZING_KEY),
		comingSoonKvAdapter.readProgress(SETUP_KEY),
		comingSoonKvAdapter.readProgress(CREATING_KEY),
	])

	return {
		lastUpdatedAt: new Date().toISOString(),
		counters: [
			{ category: ProgressCategory.FrictionRelease, progress: frictionRelease },
			{ category: ProgressCategory.Analyzing, progress: analyzing },
			{ category: ProgressCategory.Setup, progress: setup },
			{ category: ProgressCategory.Creating, progress: creating },
			{ category: ProgressCategory.Launching, progress: null },
		],
	}
}

export const comingSoonStatusService = {
	getComingSoonStatus,
}
