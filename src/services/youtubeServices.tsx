import { YoutubeDataAPI } from 'youtube-v3-api'
import { Playlist } from '../interfaces/YouTube/Playlist'
import { PlaylistItem } from '../interfaces/YouTube/PlaylistItem'

const youtubeKey = process.env.youtubeKey || ''
const youtubeService = new YoutubeDataAPI(youtubeKey)
const channelId = 'UCMM0acsrwNvI0tEML8-vAjw'

async function getPlaylistItems(playlistId: string): Promise<PlaylistItem[]> {
	const playlistItems: PlaylistItem[] = []
	const youtubePlaylistItems = (await youtubeService.searchPlaylistItems(playlistId, 30)) as any
	const youtubePlaylistPublicItems = youtubePlaylistItems.items.filter((item: any) => !item.snippet.title.includes('Private video'))
	youtubePlaylistPublicItems.map((item: any) => {
		const playlistItem: PlaylistItem = {
			title: item.snippet.title,
			thumbnailUrl: item.snippet.thumbnails.default.url,
			link: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
		}
		playlistItems.push(playlistItem)
	})

	return playlistItems
}

export async function getPlaylistsFromClubeDoLivro(): Promise<Playlist[]> {
	const playlists: Playlist[] = []
	const youtubePlaylistsResult = (await youtubeService.searchPlaylist(channelId, 10)) as any
	const youtubePlaylistsFromClubeDoLivro = youtubePlaylistsResult.items.filter((playlist: any) => playlist.snippet.title.includes('CLUBE DO LIVRO'))

	for (const item in youtubePlaylistsFromClubeDoLivro) {
		const playlistItems = await getPlaylistItems(youtubePlaylistsFromClubeDoLivro[item].id)

		const playlist: Playlist = {
			id: youtubePlaylistsFromClubeDoLivro[item].id,
			title: youtubePlaylistsFromClubeDoLivro[item].snippet.title,
			description: youtubePlaylistsFromClubeDoLivro[item].snippet.description,
			thumbnailUrl: youtubePlaylistsFromClubeDoLivro[item].snippet.thumbnails.medium.url,
			items: playlistItems,
		}
		playlists.push(playlist)
	}

	return playlists
}
