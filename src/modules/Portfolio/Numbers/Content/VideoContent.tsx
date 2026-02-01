import { FancyTable, FancyTableItems } from '../../../../components/FancyTable'

export const VideoContent = () => {
	const playlists: FancyTableItems[] = [
		{
			title: 'Entendendo Algoritmos',
			description: 'Uma série de vídeos explicando os principais algoritmos de forma simples e didática.',
			link: 'https://www.youtube.com/playlist?list=PLAlgoritmos',
			image: 'algorithms.jpg',
		},
		{
			title: 'Kubernetes',
			description: 'Tutoriais e explicações sobre Kubernetes, desde o básico até tópicos avançados.',
			link: 'https://www.youtube.com/playlist?list=PLKubernetes',
			image: 'kubernetes.jpg',
		},
		{
			title: 'I\'m in',
			description: 'Série de vídeos sobre minha jornada e experiências na indústria de tecnologia.',
			link: 'https://www.youtube.com/playlist?list=PLImIn',
			image: 'imin.jpg',
		},
	]

	return (
		<div className='expanded-content'>
			<FancyTable items={playlists} columns={{
				descriptionTitle: 'Descrição',
				mainTitle: 'Playlist',
			}} />
		</div>
	)
}