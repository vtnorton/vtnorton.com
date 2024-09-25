import axios from 'axios'
import { useEffect, useState } from 'react'

import { EventItem } from './EventItem'
import { Section } from '../../components/Section'
import { Event } from '../../interfaces/Event'

export const EventsSection = () => {
  const [items, setItems] = useState<Event[]>([])

  useEffect(() => {
    if (items.length === 0) {
      axios
        .get('/api/events')
        .then((response) => {
          setItems(response.data)
        })
        .catch((error) => {
          console.error('Erro ao obter os dados da API:', error)
        })
    }
  }, [])

  return (
    <Section className='events'>
      <h1>..:: EVENTS LINE UP ::..</h1>
      {items.map((item: Event, index: number) => {
        return (
          <EventItem
            key={index} event={item} />
        )
      })}
    </Section>
  )
}
