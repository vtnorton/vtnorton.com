import { PlaylistItem } from './PlaylistItem'

export interface Playlist {
	id: string
	title: string
	description: string
	thumbnailUrl: string
	items: PlaylistItem[]
}
