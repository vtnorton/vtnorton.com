import { useEffect, useState } from 'react'
import { NumberSquare } from './NumberSquare'
import { AwardContent } from './Content/AwardContent'
import { ClientsContent } from './Content/ClientsContent'
import { TalksContent } from './Content/TalksContent'
import { PodcastsContent } from './Content/PodcastsContent'
import { VideoContent } from './Content/VideoContent'
import { FancyTableItems } from '../../../components/FancyTable'
import { Talk } from '../../../models/Talk'
import { PortfolioCounts } from '../../../types/PortfolioCounts'

interface NumbersProps {
	counts: PortfolioCounts
}

export const Numbers = ({ counts }: NumbersProps) => {
	const [activeIndex, setActiveIndex] = useState<string | null>(null)
	const [talkItems, setTalkItems] = useState<FancyTableItems[]>([])
	const firstRowIds = ['premios', 'clientes']
	const secondRowIds = ['palestras', 'videos', 'podcasts']

	useEffect(() => {
		const abortController = new AbortController()

		const loadTalks = async () => {
			try {
				const response = await fetch('/api/palestras', {
					signal: abortController.signal,
				})
				if (!response.ok) return

				const talks = (await response.json()) as Talk[]
				setTalkItems(
					talks.map((talk) => ({
						title: talk.title,
						description: talk.description ?? '',
						link: `/palestra/${talk.id}`,
						image: talk.cover || '/img/pages/palestras.jpg',
					})),
				)
			} catch {
				// ignore abort errors and network failures
			}
		}

		void loadTalks()
		return () => abortController.abort()
	}, [])

	const handleToggle = (id: string) => {
		setActiveIndex(activeIndex === id ? null : id)
	}

	const renderExpandedContent = (id: string, isMobileInline = false) => {
		if (activeIndex !== id) return null

		const content = {
			premios: <AwardContent />,
			clientes: <ClientsContent />,
			palestras: <TalksContent items={talkItems} />,
			videos: <VideoContent />,
			podcasts: <PodcastsContent />,
		}

		return (
			<div className={`number-square-expanded ${isMobileInline ? 'mobile-inline' : ''}`}>
				<div className='container'>
					{content[id as keyof typeof content]}
				</div>
			</div>
		)
	}

	return (
		<div className='numbers'>
			<div className='first-row'>
				<div className='container'>
					<NumberSquare
						id={'premios'}
						title={'prêmios'}
						number={'11x'}
						description={'Momentos em que o trabalho duro foi reconhecido externamente por experimentos internos.'}
						isActive={activeIndex === 'premios'}
						onClick={handleToggle}
					/>
					{renderExpandedContent('premios', true)}
					<NumberSquare
						id={'clientes'}
						title={'clientes'}
						number={'50+'}
						description={'Empresas que confiaram em ideias ainda sem forma e me deixaram testar e errar.'}
						isActive={activeIndex === 'clientes'}
						onClick={handleToggle}
					/>
					{renderExpandedContent('clientes', true)}
				</div>
			</div>
			{activeIndex && firstRowIds.includes(activeIndex) && renderExpandedContent(activeIndex)}
			<div className={`second-row ${activeIndex && firstRowIds.includes(activeIndex) ? 'first-row-active' : ''}`}>
				<div className='container'>
					<NumberSquare
						id={'palestras'}
						title={'palestras'}
						number={`${counts.talks}+`}
						description={'Conversas que começaram com "será que posso tentar explicar isso?".'}
						isActive={activeIndex === 'palestras'}
						onClick={handleToggle}
					/>
					{renderExpandedContent('palestras', true)}
					<NumberSquare
						id={'videos'}
						title={'videos'}
						number={`>${counts.videos}`}
						description={'Experimentos em vídeo: alguns planejados, outros nem tanto.'}
						isActive={activeIndex === 'videos'}
						onClick={handleToggle}
					/>
					{renderExpandedContent('videos', true)}
					<NumberSquare
						id={'podcasts'}
						title={'podcasts'}
						number={`${counts.podcasts}`}
						description={'Conversas gravadas sobre código, carreira, cotidiano e tentativas.'}
						isActive={activeIndex === 'podcasts'}
						onClick={handleToggle}
					/>
					{renderExpandedContent('podcasts', true)}
				</div>
			</div>
			{activeIndex && secondRowIds.includes(activeIndex) && renderExpandedContent(activeIndex)}
		</div>
	)
}
