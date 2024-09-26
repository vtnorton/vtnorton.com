import { PodcastEpisode } from '../../interfaces/PodcastEpisode'
import { Button } from '@fluentui/react-components'
import { SoundSource20Regular } from '@fluentui/react-icons'

export const PodcastItem = (props: PodcastEpisode) => {
  const date = new Date(props.date)
  const monthNumber = date.getMonth() + 1
  const month = monthNumber.toString().padStart(2, '0')
  const formatedDate = `${date.getDate().toString().padStart(2, '0')}/${month}/${date.getFullYear()}`

  return (
    <>
      <div className="podcast-item">
        <div className="podcast-item-cover">
          <img src={props.coverURL} alt={props.title} />
        </div>
        <div className="podcast-item-detail">
          <h3>{props.title}</h3>
          <small>
            {formatedDate} @ {props.feedName}
          </small>
          <Button as='a' href={props.link} size='small' shape='square' icon={<SoundSource20Regular />} >ouça_agora();</Button>
        </div>
      </div>
    </>
  )
}
