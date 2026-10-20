import { useEffect, useState } from 'react'
import { prefersReducedMotion } from './prefersReducedMotion'

const easeOutCubic = (progress: number) => 1 - (1 - progress) ** 3

const clampProgress = (progress: number) => Math.min(Math.max(progress, 0), 1)

export const useCountUp = (target: number, durationMs: number, delayMs: number): number => {
	const [value, setValue] = useState(0)

	useEffect(() => {
		if (prefersReducedMotion()) {
			setValue(target)
			return
		}

		const startsAt = performance.now() + delayMs
		let frame = 0

		const tick = (now: number) => {
			const progress = clampProgress((now - startsAt) / durationMs)
			setValue(Math.round(target * easeOutCubic(progress)))
			if (progress < 1) frame = requestAnimationFrame(tick)
		}

		frame = requestAnimationFrame(tick)
		return () => cancelAnimationFrame(frame)
	}, [target, durationMs, delayMs])

	return value
}
