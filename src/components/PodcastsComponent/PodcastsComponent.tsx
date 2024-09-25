import axios from 'axios'
import { useEffect, useState } from 'react'

import { PodcastEpisode } from '../../interfaces/PodcastEpisode'
import { PodcastItem } from './PodcastItem'

export const PodcastsComponent = () => {
  const [items, setItems] = useState<PodcastEpisode[]>([])

  useEffect(() => {
    if (items.length === 0) {
      axios
        .get('/api/podcast')
        .then((response) => {
          setItems(response.data)
        })
        .catch((error) => {
          console.error('Erro ao obter os dados da API:', error)
        })
    }
  }, [])

  return (
    <section className="podcast section">
      <h2>🎙️ Podcasts</h2>
      <p>
        Ocasionalmente eu acabo participando de algum cast, na grande maioria
        pra falar de tech, mas rola de tudo, bora bater um papo? [ou pros que
        estão na interwebs a mais tempo, qr tc?]
      </p>

      <div className="podcast-list sc-full-width">
        {items.map((item: PodcastEpisode, index: number) => {
          return (
            <PodcastItem
              key={index}
              title={item.title}
              link={item.link}
              coverURL={item.coverURL}
              date={item.date}
              id={item.id}
              feedName={item.feedName} />
          )
        })}
      </div>
    </section>
  )
}
