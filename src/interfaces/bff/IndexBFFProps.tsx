import { BlogGridItemProps, BookClubComponentProps } from '../../components'
import { InstagramItem } from '../InstagramItem'
import { PodcastEpisode } from '../PodcastEpisode'

export type IndexBFFProps = {
	instagramPhotos: InstagramItem[]
	clubeDoLivro: BookClubComponentProps
	podcasts: PodcastEpisode[]
}
