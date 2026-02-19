import { useCallback, useEffect, useState } from 'react'
import { Talk, TalkStatus } from '../../models/Talk'
import { PostFeedItemLoader } from '../../modules/Blog/Feed/PostFeedItemLoader'
import { PalestraItem } from './PalestraItem'
import { Button } from '../Button'
export const PalestraFeed = () => {
	const [talks, setTalks] = useState<Talk[]>([])
	const [talksToPresent, setTalksToPresent] = useState<Talk[]>([])
	const [loading, setLoading] = useState(false)

	const loadPosts = useCallback(async () => {
		setLoading(true)
		try {
			const response = await fetch('/api/palestras')

			if (!response.ok) {
				throw new Error(`Erro ao obter os dados da API: ${response.status}`)
			}

			const data = await response.json() as Talk[]

			const presentedTalks = data.filter((talk) => talk.status === TalkStatus.Presented)
			const soonTMTalks = data.filter((talk) => talk.status === TalkStatus.SoonTM)
			const call4PappersTalks = data.filter((talk) => talk.status === TalkStatus.Call4Pappers)

			setTalksToPresent(soonTMTalks)
			setTalks([presentedTalks, call4PappersTalks].flat())
		} catch (error) {
			console.error('Erro ao obter os dados da API:', error)
		} finally {
			setLoading(false)
		}
	}, [])

	useEffect(() => {
		setTalks([])
		loadPosts()
	}, [loadPosts])


	return (
		<>
			<div className='blog-feed'>
				{talks.map((talk) => (
					<div key={`talk-${talk.id}`}>
						<PalestraItem talk={talk} />
					</div>
				))}

				{loading && <>
					<PostFeedItemLoader />
					<PostFeedItemLoader />
					<PostFeedItemLoader />
				</>}
			</div>
			<div>
				{talksToPresent.length > 0 && (
					<div className='widgets'>
						<div className='to-present-talk'>
							<h3>Palestras que quero fazer acontecer</h3>
							<br />
							<small>Tenho vontade de apresentar estes temas, esperando o convite certo. Se alguma te interessar, me chama. Se quiser um tema específico, estou aberto a sugestões também, mas preciso tirar essas do meu to-do list antes que elas virem promessas que nunca saem do papel.</small>
							<br /><br />
							<ul>
								{talksToPresent.map((talk) => (
									<li key={`soon-tm-talk-${talk.id}`}>/{talk.title}</li>
								))}
							</ul>
							<br />
							<Button as='a' href='mailto:vitor@vtnorton.com' size='small' appearance='outline' shape='square'>Me chame para palestrar</Button>
						</div>
					</div>
				)}
			</div>

		</>
	)
}