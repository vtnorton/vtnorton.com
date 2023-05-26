import { BookClubCalendarComponent } from './BookClubCalendar/BookClubCalendarComponent'
import { BookClubComponentProps } from './BookClubComponentProps'
import { BookClubLatestVideosProps } from './YoutubeBookClubComponent/BookClubLatestVideosProps'

export const BookClubComponent = (props: BookClubComponentProps) => {
	return (
		<section>
			<div className='clube-livro'>
				<h2>📖 Clube do livro</h2>
				<p>Uma das melhores maneira de aprender algo novo, principalmente em tech, é com livros técnicos. E querendo sempre melhorar o meu conhecimento, começei o clube do livro.</p>
				<p>
					O clube consiste em juntar uma galera que quer aprender determinado conteudo, como kubernetes, ou algoritmos, e uma vez com o livro em mãos, estudarmos ele em live (que sempre fica salva no YouTube) e também trocar conhecimendo pelo{' '}
					<a href='https://discord.gg/hY3pTjMxmG' target='_blank'>
						servidor do Discord
					</a>
					.
				</p>
				<BookClubCalendarComponent calendarItems={props.calendarItems} />
				<BookClubLatestVideosProps playlists={props.playlists} />
			</div>
		</section>
	)
}
