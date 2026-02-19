import { Tag, TagGroup } from '@fluentui/react-components'
import { NumberSymbolRegular, Clock20Regular } from '@fluentui/react-icons'
import { Talk, TalkStatus } from '../../models/Talk'
import { Section } from '../Section'
import { NoiseImage } from '../NoiseImage'
import { Button } from '../Button'

interface PalestraComponentProps {
	talk: Talk
}

export const PalestraItem = ({ talk }: PalestraComponentProps) => {
	return (
		<Section>
			<div className='feed-item'>
				{talk.cover && <NoiseImage src={talk.cover} alt={talk.title} className='cover-image' />}
				<div className='intro' style={{
					marginTop: talk.cover ? '0' : '1.5rem',
				}}>
					<a href={`/portfolio/palestra/${talk.id}`}><h2>{talk.title}</h2></a>
					<TagGroup role='list' size='extra-small'>
						{talk.status === TalkStatus.Presented &&
							<Tag
								icon={<NumberSymbolRegular />}
								style={{ marginRight: '.5rem' }}
								appearance='outline'
								shape='circular'>{talk.presentations} apresentações</Tag>}

						{talk.lenght && <Tag
							icon={<Clock20Regular />}
							appearance='outline'
							shape='circular'>{talk.lenght}</Tag>}
					</TagGroup>
				</div>
			</div>

			{talk.status === TalkStatus.Call4Pappers &&
				<p>
					<strong>
						Esta palestra está sendo atualmente montada para ser apresentada em breve, fique ligado nos próximos eventos que estarei participando pois ela está vindo! 🚀
					</strong>
				</p>
			}
			<p>
				{talk.description ? talk.description : 'Em breve uma descrição aqui!'}
			</p>
			{talk.status === TalkStatus.SoonTM &&
				<p>
					<strong>
						Eu quero muito fazer essa palestra acontecer, estou só esperando algum evento ou meetup pra estar fazendo ela.
					</strong>
				</p>
			}

			{talk.status === TalkStatus.Presented && <Button as='a' href={`/portfolio/palestra/${talk.id}`} size='medium' appearance='transparent' shape='square'>Veja a apresentação</Button>}
		</Section>
	)
}