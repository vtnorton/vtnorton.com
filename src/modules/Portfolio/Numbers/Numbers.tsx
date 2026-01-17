import { useState } from 'react'
import { NumberSquare } from './NumberSquare'
import { AwardContent } from './Content/AwardContent'
import { ClientsContent } from './Content/ClientsContent'
import { TalksContent } from './Content/TalksContent'
import { PodcastsContent } from './Content/PodcastsContent'
import { VideoContent } from './Content/VideoContent'

export const Numbers = () => {
	const [activeIndex, setActiveIndex] = useState<string | null>(null)

	const handleToggle = (id: string) => {
		setActiveIndex(activeIndex === id ? null : id)
	}

	const renderExpandedContent = (id: string) => {
		if (activeIndex !== id) return null

		const content = {
			premios: <AwardContent />,
			clientes: <ClientsContent />,
			palestras: <TalksContent />,
			videos: <VideoContent />,
			podcasts: <PodcastsContent />,
		}

		return (
			<div className='number-square-expanded'>
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
					<NumberSquare
						id={'clientes'}
						title={'clientes'}
						number={'50+'}
						description={'Empresas que confiaram em ideias ainda sem forma e me deixaram testar e errar.'}
						isActive={activeIndex === 'clientes'}
						onClick={handleToggle}
					/>
				</div>
			</div>
			{(activeIndex === 'premios' || activeIndex === 'clientes') && renderExpandedContent(activeIndex)}
			<div className='second-row' style={{
				borderTop: activeIndex === 'premios' || activeIndex === 'clientes' ? '1px solid var(--border-color)' : 'none',
			}}>
				<div className='container'>
					<NumberSquare
						id={'palestras'}
						title={'palestras'}
						number={'16+'}
						description={'Conversas que começaram com "será que posso tentar explicar isso?".'}
						isActive={activeIndex === 'palestras'}
						onClick={handleToggle}
					/>
					<NumberSquare
						id={'videos'}
						title={'videos'}
						number={'>15'}
						description={'Experimentos em vídeo: alguns planejados, outros nem tanto.'}
						isActive={activeIndex === 'videos'}
						onClick={handleToggle}
					/>
					<NumberSquare
						id={'podcasts'}
						title={'podcasts'}
						number={'12'}
						description={'Conversas gravadas sobre código, carreira, cotidiano e tentativas.'}
						isActive={activeIndex === 'podcasts'}
						onClick={handleToggle}
					/>
				</div>
			</div>
			{(activeIndex === 'palestras' || activeIndex === 'videos' || activeIndex === 'podcasts') && renderExpandedContent(activeIndex)}
		</div>
	)
}