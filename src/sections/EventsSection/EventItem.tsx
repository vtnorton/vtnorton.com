import { Event } from '../../interfaces/Event'
import { Button } from '@fluentui/react-components'
import { CalendarAddRegular } from '@fluentui/react-icons'

export const EventItem = ({ event }: { event: Event }) => {
  const date = new Date(event.date)
  const monthNumber = date.getMonth() + 1
  const formatedDate = `${(date.getDate() + 1).toString().padStart(2, '0')}/${monthNumber.toString().padStart(2, '0')}`
  console.log(event)
  return (
    <div className="event">
      <h3 className='event-line'>
        <span>{formatedDate}</span>
        <div>{event.title}</div>
      </h3>
      <div className="event-line">
        <p>{event.talk} </p>
        <div>
          <p>{event.place}</p>
          {event.link &&
            <Button as='a' appearance='outline' shape='square' href={event.link} size='small' icon={<CalendarAddRegular />}>registre_se();</Button>}
        </div>
      </div>

      <div className='event-separator'></div>
    </div>
  )
}
