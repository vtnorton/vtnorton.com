import React from 'react'

import {
  BlogComponent,
  BookClubComponent,
  FooterComponent,
  ForBusinessComponent,
  PageHeroComponent,
  PodcastsComponent,
  ProductShelfComponent,
  TilesComponent,
  TwitchComponent,
} from '../components'
import { SeoProps } from '../database/SEOProps'
import { AthenaPromoSection, HeartthrobSection, PostMortemSection, ProfileSection } from '../sections'

export default function Index() {
  return (
    <>
      <SeoProps
        title="vítor norton | developer relations | 🤘🚀🥑"
        description="Lives na Twitch, clube do livro, desenvolvimento de apps e web, mitologia grega, música e séries de TV. Um compilado do que eu sou e do que eu faço, chega mais!"
        featureImage="/img/pages/404.jpg" />
      <PageHeroComponent
        title="vítor norton"
        description="Lives na Twitch, clube do livro, desenvolvimento de apps e web, mitologia grega, música e séries de TV. Um compilado do que eu sou e do que eu faço, chega mais!"
        backgroundUrl="/img/pages/404.jpg">
        <BlogComponent></BlogComponent>
      </PageHeroComponent>

      <div className="container">
        <div className="flex">
          <div>
            <TwitchComponent />
            {/* <EventsSection /> */}
            <TilesComponent />
          </div>
          <div>
            <BookClubComponent />
            <PodcastsComponent />
          </div>
        </div>
      </div>

      <ProductShelfComponent />

      <div className="container">
        <PostMortemSection />

        <div className="flex">
          <div>
            <ForBusinessComponent />
          </div>
          <div>
            <AthenaPromoSection half />
          </div>
        </div>

        <HeartthrobSection />

        <ProfileSection />
      </div>


      <FooterComponent />
    </>
  )
}
