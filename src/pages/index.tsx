import Script from 'next/script'
import React from 'react'

import {
	AthenaPromoComponent,
	BlogComponent,
	BookClubComponent,
	FooterComponent,
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
import { SeoProps } from '../database/SEOProps'

export default function Index() {
	return (
		<>
			<SeoProps title='vítor norton | developer relations | 🤘🚀🥑' description='Lives na Twitch, clube do livro, desenvolvimento de apps e web, mitologia grega, música e séries de TV. Um compilado do que eu sou e do que eu faço, chega mais!' featureImage='/img/pages/404.jpg' />
			<PageHeroComponent title='vítor norton' description='Lives na Twitch, clube do livro, desenvolvimento de apps e web, mitologia grega, música e séries de TV. Um compilado do que eu sou e do que eu faço, chega mais!' backgroundUrl='/img/pages/404.jpg'>
				<BlogComponent></BlogComponent>
			</PageHeroComponent>

			
			<div className='container'>
				<div className='row'>
					<div className='col-md-6'>
						<TwitchComponent />
						<TilesComponent />
						{/* <CursoDevPromoComponent half /> */}
						{/* <CursoTechPromoComponent half /> */}
						<ForBusinessComponent />
					</div>
					<div className='col-md-6'>
						<BookClubComponent />
					</div>
				</div>
			</div>

			<PodcastsComponent />

			<div className='container'>
				<div className='row'>
						<div className='col-md-6 col-sm-12'>
							<FormulaPromoComponent half></FormulaPromoComponent>
						</div>
						<div className='col-md-6 col-sm-12'>
							<AthenaPromoComponent half></AthenaPromoComponent>
						</div>
				</div>
			</div>
			
			<ProductShelfComponent showBusinessCases={false} />

			<div className='container'>
				<HeartthrobPromoComponent></HeartthrobPromoComponent>
			</div>

			<ProfileComponent />

			<FooterComponent />
		</>
	)
}
