import { Section } from '../SectionComponent'
import { BookClubCalendarComponent } from './BookClubCalendar/BookClubCalendarComponent'
import { BookClubLatestVideos } from './YoutubeBookClubComponent/BookClubLatestVideos'

export const BookClubComponent = () => {
	return (
		<Section removePaddingButton full removePaddingTop>
			<div className='escape-padding'>
				<h2>📖 Bora ler </h2>
				<p>Uma das melhores maneira de aprender algo novo, principalmente em tech, é com livros técnicos. E querendo sempre melhorar o meu conhecimento, começei um clube do livro com o nome "Bora ler".</p>
				<p>
					O projeto consiste em juntar uma galera que quer aprender determinado conteudo, como kubernetes, ou algoritmos, e uma vez com o livro em mãos, estudarmos ele em live (que sempre fica salva no YouTube) e também trocar conhecimendo pelo <a href='https://discord.gg/hY3pTjMxmG' target='_blank' rel="noreferrer">servidor do Discord</a>.
				</p>
			</div>
			<BookClubCalendarComponent />
			<BookClubLatestVideos />
		</Section>
	)
}
