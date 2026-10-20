import { backlogAdapter } from '../adapters/backlogAdapter'
import { comingSoonKvAdapter } from '../adapters/comingSoonKvAdapter'
import { BACKLOG_PROJECT_PROPERTIES, type BacklogProject, toBacklogProject } from '../models/BacklogProject'
import { BACKLOG_TASK_PROPERTIES, type BacklogTask, toBacklogTask } from '../models/BacklogTask'
import { type ComingSoonStatus, type Progress, ProgressCategory } from '../types/ComingSoonStatus'

const PROJECT_TAG_OPTION_ID = '0041754c-e6f2-4e9b-b231-21a1f182f0e7'
const FRICTION_RELEASE_CLIENT_IDS = new Set([
	'18c35675-6ece-47c3-9bc3-19f3a852210d',
	'1ac4009b-7ca6-804a-b897-f95202fdc28b',
	'34b4009b-7ca6-803e-9548-f6d3b3db600b',
	'3524009b-7ca6-8101-93d2-f27f0e8d7253',
])
const COMPLETED_STATUSES = new Set(['Done', 'Deprecated', 'Fresh Memory', 'Flushed'])
const ANALYZING_KEY = 'coming-soon:analyzing'
const SETUP_KEY = 'coming-soon:setup'

const isCompleted = (task: BacklogTask): boolean => {
	return task.status !== null && COMPLETED_STATUSES.has(task.status)
}

const countProgress = (tasks: BacklogTask[]): Progress => {
	const completed = tasks.filter(isCompleted).length
	return { completed, total: tasks.length }
}

const mapClientIdsByProject = (projects: BacklogProject[]): Map<string, string[]> => {
	return new Map(projects.map((project) => [project.id, project.clientIds]))
}

const countsInFrictionRelease = (task: BacklogTask, clientIdsByProject: Map<string, string[]>): boolean => {
	const clientIds = task.projectIds.flatMap((projectId) => clientIdsByProject.get(projectId) ?? [])
	if (clientIds.length === 0) return true
	return clientIds.some((clientId) => FRICTION_RELEASE_CLIENT_IDS.has(clientId))
}

const countBacklogProgress = async () => {
	const [taskPages, projectPages] = await Promise.all([
		backlogAdapter.queryTaskPages(BACKLOG_TASK_PROPERTIES),
		backlogAdapter.queryProjectPages(BACKLOG_PROJECT_PROPERTIES),
	])
	const tasks = taskPages.map(toBacklogTask)
	const clientIdsByProject = mapClientIdsByProject(projectPages.map(toBacklogProject))

	const projectTasks = tasks.filter((task) => task.tagOptionId === PROJECT_TAG_OPTION_ID)
	const frictionReleaseTasks = tasks
		.filter((task) => task.tagOptionId !== PROJECT_TAG_OPTION_ID)
		.filter((task) => countsInFrictionRelease(task, clientIdsByProject))

	return {
		frictionRelease: countProgress(frictionReleaseTasks),
		creating: countProgress(projectTasks),
	}
}

const getComingSoonStatus = async (): Promise<ComingSoonStatus> => {
	const [backlog, analyzing, setup] = await Promise.all([
		countBacklogProgress(),
		comingSoonKvAdapter.readManualProgress(ANALYZING_KEY),
		comingSoonKvAdapter.readManualProgress(SETUP_KEY),
	])

	return {
		lastUpdatedAt: new Date().toISOString(),
		counters: [
			{ category: ProgressCategory.FrictionRelease, progress: backlog.frictionRelease },
			{ category: ProgressCategory.Analyzing, progress: analyzing },
			{ category: ProgressCategory.Setup, progress: setup },
			{ category: ProgressCategory.Creating, progress: backlog.creating },
			{ category: ProgressCategory.Launching, progress: null },
		],
	}
}

export const comingSoonStatusService = {
	getComingSoonStatus,
}
