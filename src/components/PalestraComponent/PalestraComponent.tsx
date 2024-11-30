import { Tag } from '@fluentui/react-components'
import { NumberSymbolRegular, Clock20Regular } from '@fluentui/react-icons'
import { ImageBlur, Section } from '../SectionComponent'
import { Talk } from '../../interfaces/Talk'

interface PalestraComponentProps {
	talk: Talk
}

export const PalestraComponent = ({ talk }: PalestraComponentProps) => {
	const image: ImageBlur = {
		imageURL: talk.featureImage,
		solidColor: '#2B61C5',
		imageAlt: talk.title,
	}

	return (
		<Section half image={image}>
			<h2>{talk.title}</h2>
			<div>
				<Tag
					icon={<NumberSymbolRegular />}
					style={{ marginRight: '.5rem' }}
					appearance='outline'
					shape='circular'>{talk.presentations} apresentações</Tag>

				{talk.duration && <Tag
					icon={<Clock20Regular />}
					appearance='outline'
					shape='circular'>{talk.duration}</Tag>}
			</div>
			<p>
				{talk.description}
			</p>
			{/* <Button as='a' href={`/palestra/${talk.id}`} icon={<ChevronRight20Regular />} size='large' appearance='primary' shape='square'>veja mais detalhes();</Button> */}
		</Section>

	)

}