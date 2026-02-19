import { GetStaticProps } from 'next'
import { PageHero } from '../components/PageHero'
import { ContentSEO } from '../database/seo'
import { Numbers } from '../modules/Portfolio/Numbers/Numbers'
import { PortfolioItem } from '../modules/Portfolio/PortfolioItem/PortfolioItem'
import { Footer } from '../sections/Footer/Footer'
import { ProfileSection } from '../sections/Profile/Profile'
import { palestrasServices } from '../services/palestrasServices'
import { PortfolioCounts } from '../types/PortfolioCounts'
import { podcastServices } from '../services/podcastServices'
import { youtubeService } from '../services/youtubeService'

interface PortfolioProps {
	counts: PortfolioCounts
}

export const getStaticProps: GetStaticProps<PortfolioProps> = async () => {
	const talks = await palestrasServices.getAllTalks()
	const videos = await youtubeService.getVideosCount()
	const podcasts = await podcastServices.getAllPodcasts()

	return {
		props: {
			counts: {
				talks: talks.length,
				videos: videos,
				podcasts: podcasts.length,
			},
		},
		revalidate: 60 * 60 * 24, // 24 hours
	}
}

export default function Portfolio({ counts }: PortfolioProps) {
	const pageTitle = 'Portfólio: código & criação'
	const pageDescription = 'Minha jornada é em temporadas: experimentos, tentativas e erros feios, e eu conto essa história com código. Este espaço reúne o que já publiquei: talks, apps, ideias que recusei ignorar e projetos, dos primeiros em 2015 até os que continuo construindo.'
	return (
		<article className='portfolio'>
			<ContentSEO title={pageTitle} description={pageDescription} ogType='portfolio' />
			<PageHero
				title={'Portfólio: código & criação'}
				description={`${pageDescription} Role, explore com calma — fique à vontade!`}
				backgroundClass='bg-porfolio' />

			<Numbers counts={counts} />
			{
				/* 2025 -> Bozo Preso */
			}

			<PortfolioItem
				year={2024}
				background={'/img/portfolio/superviz.jpg'}
				logo={'/img/portfolio/logo/superviz.png'}
				url={'/portfolio/superviz'}
				description={'Encabecei uma sequência estratégica de eventos que colocaram a SuperViz no radar tech brasileiro: palestras, stands criativos e um jogo viciante.'} />

			{
				/* PROJETINHOS */
				/* BLOG */

				/* 2019 - Heartthrob */
			}

			<PortfolioItem
				year={2018}
				background={'/img/portfolio/ola-wolff.jpg'}
				logo={'/img/portfolio/logo/wolff.png'}
				url={'/portfolio/ola-wolff'}
				description={'Criei um chatbot que abriu empresas em menos de 24h – anos antes do bum da IA. Conversa simples, UX incrível, burocracia zero, impacto real.'} />

			{
				/* 2017 - Formula */

				/* INFOS (MVP, etc) */

				/* 2016 - Um app por semana */
				/* 2015 - Vida de Freelancer (sites) */

				/* GITHUB            // SKILLS / RADAR TECH */
			}

			<div className='container' style={{
				marginTop: '5rem',
			}}>
				<ProfileSection />
			</div>

			<Footer />
		</article>
	)
}