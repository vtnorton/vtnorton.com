import { useEffect, useState } from 'react'

const secondsPerDay = 86400
const secondsPerHour = 3600
const secondsPerMinute = 60

const padTwo = (value: number) => String(value).padStart(2, '0')

const formatElapsed = (elapsedMilliseconds: number) => {
	const totalSeconds = Math.floor(elapsedMilliseconds / 1000)
	const days = Math.floor(totalSeconds / secondsPerDay)
	const hours = Math.floor((totalSeconds % secondsPerDay) / secondsPerHour)
	const minutes = Math.floor((totalSeconds % secondsPerHour) / secondsPerMinute)
	const seconds = totalSeconds % secondsPerMinute
	const clock = `${padTwo(hours)}h ${padTwo(minutes)}m ${padTwo(seconds)}s`
	if (days === 0) return clock
	return `${days}d ${clock}`
}

export const useElapsedTime = (since: string) => {
	const [elapsed, setElapsed] = useState<string | null>(null)

	useEffect(() => {
		const sinceTime = new Date(since).getTime()
		const updateElapsed = () => {
			setElapsed(formatElapsed(Date.now() - sinceTime))
		}

		updateElapsed()
		const intervalId = setInterval(updateElapsed, 1000)
		return () => clearInterval(intervalId)
	}, [since])

	return elapsed
}
