import { FancyTable, FancyTableItems } from '../../../../components/FancyTable'

export const VideoContent = () => {
	const playlists: FancyTableItems[] = [
		{
			title: 'Entendendo Algoritmos',
			description: 'Lendo e estudando "Entendendo Algoritmos" (Aditya Y. Bhargava) em live, junto a Mônica Craveiro e quem mais apareceu aprender comigo. Porque estudar sozinho é meio chato.',
			link: 'https://www.youtube.com/watch?v=JK-qdZw-Xv8&list=PLb8JMQUc7_RiwRxJVvdVcYTr7kJgolhz1',
			image: 'img/portfolio/playlists/algoritmos.jpg',
		},
		{
			title: 'Kubernetes',
			description: 'Estudando, em público, orquestração de contêineres com o livro do Lucas Santos. Dockers, microsserviços, deploys e tentativas ao vivo.',
			link: 'https://www.youtube.com/watch?v=D9FoNulVToI&list=PLb8JMQUc7_RiA9oIFH-mdwwkPkDzJTXXk',
			image: 'img/portfolio/playlists/kubernetes.jpg',
		},
		{
			title: 'I\'m in',
			description: 'Aparições em outros canais: podcasts, palestras e conversas onde fui convidado. Tudo reunido aqui pra quem quiser acompanhar onde mais eu andei falando. ',
			link: 'https://www.youtube.com/watch?v=j74ityF5gNU&list=PLb8JMQUc7_RjPXMX8Z7GpNwxW2EAHdpuA',
			image: 'img/pages/blog.jpg',
		},
		{
			title: 'Cortes das lives na Twitch',
			description: 'Os melhores (e mais caóticos) momentos das transmissões ao vivo na Twitch. Puro improviso, reações reais e zero planejamento.',
			link: 'https://www.youtube.com/watch?v=6SKDDDRtSEc&list=PLb8JMQUc7_Rj6VYLNQuVRYJ5Ty2FmwGwO',
			image: 'img/portfolio/playlists/cortes.jpg',
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