import { Event } from '../../interfaces/Event'
import { Button } from '@fluentui/react-components'
import { MicFilled } from '@fluentui/react-icons'

export const EventItem = ({ event }: { event: Event }) => {
  const date = new Date(event.date)
  const monthNumber = date.getMonth() + 1
  const formatedDate = `${(date.getDate() + 1).toString().padStart(2, '0')}/${monthNumber.toString().padStart(2, '0')}`

  const eventPlace = () => {
    if (!event.place?.includes(','))
      return <p>{event.place}</p>

    const place = event.place.split(',')
    return (<p>{place[0]}, <br /> {place[1]}</p>)
  }

  return (
    <div className="event">
      <h3 className='event-line'>
        <span>{formatedDate}</span>
        {event.link ? <div><a target='_blank' href={event.link} rel="noreferrer">{event.title}</a></div> : <div>{event.title}</div>}
      </h3>
      <div className="event-line">
        <div>
          <p>{event.talk}</p>
          <Button as='a' appearance='outline' shape='circular' size='small' href={event.link} icon={<MicFilled />} style={{
            margin: '8px 0',
          }}>SPEAKER</Button>
        </div>
        <div>
          {eventPlace()}
        </div>
      </div>

      <div className='event-separator'></div>
    </div>
  )
}
