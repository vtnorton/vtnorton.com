import React from 'react'
import { IndexBFFProps } from '../interfaces/bff/IndexBFFProps'
import { getPodcasts } from '../services/notionServices'
import { getInstagramPosts } from '../services/instagramServices'
import { getPlaylistsFromClubeDoLivro } from '../services/youtubeServices'
import {
	AthenaPromoComponent,
	BookClubComponent,
	BookClubComponentProps,
	FooterComponent,
	BlogComponent,
	ForBusinessComponent,
	FormulaPromoComponent,
	HeartthrobPromoComponent,
	PageHeroComponent,
	PodcastsComponent,
	ProductShelfComponent,
	ProfileComponent,
	TilesComponent,
	TwitchComponent,
} from '../components'
import { InstagramItem, Playlist, PodcastEpisode } from '../interfaces'
import { SeoProps } from '../database/SEOProps'

export const getStaticProps = async () => {
	try {
		const instagramPhotos: InstagramItem[] = await getInstagramPosts()
		const podcasts: PodcastEpisode[] = await getPodcasts()
		const playlists: Playlist[] = await getPlaylistsFromClubeDoLivro()

		const clubeDoLivroProps: BookClubComponentProps = {
			playlists: playlists,
		}

		let props: IndexBFFProps = {
			instagramPhotos: instagramPhotos,
			clubeDoLivro: clubeDoLivroProps,
			podcasts: podcasts,
		}
		props = JSON.parse(JSON.stringify(props))
		return { props, revalidate: 1 }
	} catch (err) {
		throw err
	}
}

export default function Index(props: IndexBFFProps) {
	return (
		<>
			<SeoProps title='vítor norton | developer relations | 🤘🚀🥑' description='Lives na Twitch, clube do livro, desenvolvimento de apps e web, mitologia grega, música e séries de TV. Um compilado do que eu sou e do que eu faço, chega mais!' featureImage='/img/pages/404.jpg' />
			<PageHeroComponent title='vítor norton' description='Lives na Twitch, clube do livro, desenvolvimento de apps e web, mitologia grega, música e séries de TV. Um compilado do que eu sou e do que eu faço, chega mais!' backgroundUrl='/img/pages/404.jpg'>
				<div className='row'>
					<div className='col-md-6 col-sm-12'>
						<FormulaPromoComponent half></FormulaPromoComponent>
					</div>
					<div className='col-md-6 col-sm-12'>
						<AthenaPromoComponent half></AthenaPromoComponent>
					</div>
				</div>
			</PageHeroComponent>
			<div className='container'>
				<HeartthrobPromoComponent></HeartthrobPromoComponent>
			</div>
			<BlogComponent></BlogComponent>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6'>
						<TilesComponent instagramPhotos={props.instagramPhotos} />
						{/* <CursoDevPromoComponent half /> */}
						{/* <CursoTechPromoComponent half /> */}
					</div>
					<div className='col-md-6'>
						<TwitchComponent />
						<BookClubComponent playlists={props.clubeDoLivro.playlists} />
						<ForBusinessComponent />
					</div>
				</div>
			</div>

			<PodcastsComponent items={props.podcasts} />

			<ProductShelfComponent showBusinessCases={false} />

			<ProfileComponent />

			<FooterComponent />
		</>
	)
}
