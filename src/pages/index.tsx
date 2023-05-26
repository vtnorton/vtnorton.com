import React from 'react'
import { IndexBFFProps } from '../interfaces/bff/IndexBFFProps'
import { getBlogSectionPosts, getPodcasts } from '../services/notionServices'
import { getInstagramPosts } from '../services/instagramServices'
import { getClubeDoLivroEvents } from '../services/calendarServices'
import { getPlaylistsFromClubeDoLivro } from '../services/youtubeServices'
import {
	AthenaPromoComponent,
	BlogGridItemProps,
	BookClubComponent,
	BookClubComponentProps,
	CursoDevPromoComponent,
	CursoTechPromoComponent,
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
import { CalendarItem, InstagramItem, Playlist, PodcastEpisode } from '../interfaces'

export const getStaticProps = async () => {
	try {
		const posts: BlogGridItemProps[] = await getBlogSectionPosts()
		const instagramPhotos: InstagramItem[] = await getInstagramPosts()
		const podcasts: PodcastEpisode[] = await getPodcasts()
		const clubeDoLivroSchedule: CalendarItem[] = await getClubeDoLivroEvents()
		const playlists: Playlist[] = await getPlaylistsFromClubeDoLivro()

		const clubeDoLivroProps: BookClubComponentProps = {
			playlists: playlists,
			calendarItems: clubeDoLivroSchedule,
		}

		let props: IndexBFFProps = {
			blogItems: posts,
			instagramPhotos: instagramPhotos,
			clubeDoLivro: clubeDoLivroProps,
			podcasts: podcasts,
		}
		props = JSON.parse(JSON.stringify(props))
		return { props, revalidate: 60 * 60 * 1 }
	} catch (err) {
		throw err
	}
}

export default function Index(props: IndexBFFProps) {
	return (
		<>
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
			<BlogComponent posts={props.blogItems}></BlogComponent>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6'>
						<TilesComponent instagramPhotos={props.instagramPhotos} />
						<CursoDevPromoComponent half />
						<CursoTechPromoComponent half />
					</div>
					<div className='col-md-6'>
						<TwitchComponent />
						<BookClubComponent calendarItems={props.clubeDoLivro.calendarItems} playlists={props.clubeDoLivro.playlists} />
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

/* 
														Layout	Links
		-- FORMULA --	ATHENA - 		✅			🔃
		-- HEARTTHROB -------- 		✅			✅	
		-- BLOG -------------- 		✅			✅ // sem busca, e sem hashtags
		-- LINKS -- TWITCH ---  	✅			🔃
		-- MENTORIA -- CLUBE -   	✅			🔃 <- Alterar imagens dos cursos
		-- PODCAST -----------		✅			✅
		-- ESTANTE -----------		✅			✅
		-- XXXXX --- EVENTOS -		🕐		 🕐
		-- GITHUB ------------		🕐     🕐
		-- ABOUT -------------		✅			✅
		-- FOOTER ------------		✅			✅

		- COLOCAR LOGO	
		- PÁGINA DE PORTFÓLIO/PROJETOS - vtnorton.com/portfolio
*/
