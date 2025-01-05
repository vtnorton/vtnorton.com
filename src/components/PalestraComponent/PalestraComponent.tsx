import { Button, Tag } from '@fluentui/react-components'
import { NumberSymbolRegular, Clock20Regular, ChevronRight20Regular } from '@fluentui/react-icons'
import { ImageBlur, Section } from '../SectionComponent'
import { TalkStatus } from '../../interfaces/Talk'
import { Talk } from '../../models/Talk'

interface PalestraComponentProps {
	talk: Talk
}

export const PalestraComponent = ({ talk }: PalestraComponentProps) => {
	let solidColor = '#2B61C5'
	if (talk.status === TalkStatus.Call4Pappers)
		solidColor = '#E09E36'
	if (talk.status === TalkStatus.SoonTM)
		solidColor = '#ccc'

	const image: ImageBlur = {
		imageURL: talk.featureImage ? talk.featureImage : '/img/projects/palestras/soon.jpg',
		solidColor: solidColor,
		imageAlt: talk.title,
	}

	return (
		<Section half image={image}>
			<h2>{talk.title}</h2>
			<div>
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
			{talk.status === TalkStatus.Presented && <Button as='a' href={`/portfolio/palestra/${talk.id}`} icon={<ChevronRight20Regular />} size='large' appearance='primary' shape='square'>veja mais detalhes();</Button>}
		</Section>

	)

}