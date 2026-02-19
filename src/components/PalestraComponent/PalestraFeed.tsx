import { useCallback, useEffect, useState } from 'react'
import { Talk } from '../../models/Talk'
import { PostFeedItemLoader } from '../../modules/Blog/Feed/PostFeedItemLoader'
import { PalestraItem } from './PalestraItem'
export const PalestraFeed = () => {
	const [talks, setTalks] = useState<Talk[]>([])
	const [loading, setLoading] = useState(false)

	const loadPosts = useCallback(async () => {
		setLoading(true)
		try {
			const response = await fetch('/api/palestras')

			if (!response.ok) {
				throw new Error(`Erro ao obter os dados da API: ${response.status}`)
			}

			const data = await response.json() as Talk[]

			setTalks((prevTalks) => [...prevTalks, ...data])
		} catch (error) {
			console.error('Erro ao obter os dados da API:', error)
		} finally {
			setLoading(false)
		}
	}, [])

	useEffect(() => {
		// if (!isReady) return

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
		</>
	)
}