import { type CSSProperties, Fragment, useEffect, useState } from 'react'
import { subtitleSentences } from './subtitleSentences'

type SentenceWord = {
	text: string
	position: number
	startsNewLine: boolean
}

type RotatingSentence = {
	text: string
	words: SentenceWord[]
	displayMs: number
}

type WordStyle = CSSProperties & {
	'--word-index': number
}

const BASE_DISPLAY_MS = 3000
const DISPLAY_MS_PER_WORD = 280

const splitLineIntoWords = (line: string, lineIndex: number) => {
	return line.split(' ').map((text, indexInLine) => {
		const startsNewLine = lineIndex > 0 && indexInLine === 0
		return { text, startsNewLine }
	})
}

const splitIntoWords = (sentence: string): SentenceWord[] => {
	const words = sentence.split('\n').flatMap(splitLineIntoWords)
	return words.map((word, position) => ({ ...word, position }))
}

const toRotatingSentence = (text: string): RotatingSentence => {
	const words = splitIntoWords(text)
	const displayMs = BASE_DISPLAY_MS + words.length * DISPLAY_MS_PER_WORD
	return { text, words, displayMs }
}

const rotatingSentences = subtitleSentences.map(toRotatingSentence)

const prefersReducedMotion = (): boolean => {
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export const RotatingSubtitle = () => {
	const [activeIndex, setActiveIndex] = useState(0)

	useEffect(() => {
		if (prefersReducedMotion()) return

		const timeout = setTimeout(() => {
			setActiveIndex((index) => (index + 1) % rotatingSentences.length)
		}, rotatingSentences[activeIndex].displayMs)

		return () => clearTimeout(timeout)
	}, [activeIndex])

	return (
		<p className='subtitle'>
			{rotatingSentences.map((sentence, index) => (
				<span className={index === activeIndex ? 'sentence is-active' : 'sentence'} key={sentence.text}>
					{sentence.words.map((word) => {
						const style: WordStyle = { '--word-index': word.position }
						return (
							<Fragment key={word.position}>
								{word.startsNewLine && <br />}
								<span className='word' style={style}>
									{word.text}
								</span>{' '}
							</Fragment>
						)
					})}
				</span>
			))}
		</p>
	)
}
