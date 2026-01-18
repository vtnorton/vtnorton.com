'use client'
import { Tag } from '@fluentui/react-components'
import { ArrowDownloadFilled, Clock20Regular, NumberSymbolRegular, ShareRegular, SlidePlayRegular, VideoRegular } from '@fluentui/react-icons'
import { PageHero } from '../../components/PageHero'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { ProfileSection } from '../../sections/Profile/Profile'
import { Footer } from '../../sections/Footer/Footer'
import { Talk } from '../../models/Talk'
import { talkServices } from '../../services/talkServices'
import { NextProject } from '../../components/NextProject/NextProject'
import { ContentSEO } from '../../database/seo'

const mountPath = (talk: Talk) => {
	return {
		params: {
			id: talk.id,
		},
	}
}

export const getStaticPaths = async () => {
	const talks: Talk[] = await talkServices.getAllTalks()
	return {
		paths: talks.map((talk: Talk) => mountPath(talk)),
		fallback: true,
	}
}

export const getStaticProps = async (context: { params: { id: string } }) => {
	const { id } = context.params

	const { talk, nextTalk } = await talkServices.getTalk(id)

	let props = {
		talk: talk,
		nextTalk: nextTalk,
	}

	props = JSON.parse(JSON.stringify(props))
	return {
		props,
		revalidate: 60 * 60 * 3,
	}
}

export default function Palestra({ talk, nextTalk }: { talk: Talk, nextTalk: Talk }) {
	if (!talk)
		return <div />


	const handleShare = async () => {
		if (navigator.share) {
			try {
				await navigator.share({
					title: `Palestra: ${talk.title} - Vitor Norton`,
					text: talk.description,
					url: window.location.href,
				})
			} catch (error) {
				console.error('Error sharing:', error)
			}
		} else
			alert('Sharing is not supported in this browser.')

	}

	const videoId = (videoURL: string) => {
		let embedLink = videoURL?.split('?v=')[1] || videoURL?.split('live/=')[1] || videoURL?.split('live/')[1]

		if (embedLink?.includes('t='))
			embedLink = embedLink.replace('&t=', '?&start=')

		return embedLink
	}

	const slideLink = (link: string) => {
		if (!link.includes('figma'))
			return link

		const presentationId = link.split('deck/')[1].split('?')[0]
		return `https://embed.figma.com/slides/${presentationId}?node-id=1-255&embed-host=share`
	}

	return (
		<>
			<ContentSEO
				featureImage={talk.cover}
				title={talk.title}
				description={talk.description}
				date={talk.date}
				tags={['palestra']}
				category='talks'
				ogType='article' />
			<PageHero
				title={talk.title}
				description=''
				backgroundUrl='/img/pages/palestras.jpg'>
				<Section className='talk' removePaddingButton>

					<div className='description'>
						<div>
							{talk.video?.includes('youtube') && <iframe src={`https://www.youtube.com/embed/${videoId(talk.video)}`} title='YouTube video player' allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerPolicy='strict-origin-when-cross-origin' allowFullScreen></iframe>}
							<h2>{talk.title}</h2>
							<div>
								<Tag
									icon={<NumberSymbolRegular />}
									style={{ marginRight: '.5rem' }}
									size='medium'
									appearance='outline'
									shape='circular'>{talk.presentations} apresentações</Tag>
								<Tag
									icon={<Clock20Regular />}
									appearance='outline'
									shape='circular'>{talk.lenght}</Tag>
							</div>
							<p>
								{talk.description}
							</p>
						</div>
						<div className='metadata'>
							{talk.video && <Button as='a' href={talk.video} target='_blank' icon={<VideoRegular />} shape='square' size='large'>Assistir</Button>}
							<Button as='a' href='#slide' icon={<SlidePlayRegular />} shape='square' size='large'>Ver slides</Button>
							<Button as='a' href={talk.slides} target='_blank' icon={<ArrowDownloadFilled />} shape='square' size='large'>Baixar slides</Button>
							<Button onClick={handleShare} target='_blank' icon={<ShareRegular />} shape='square' size='large'>Compartilhar</Button>
						</div>
					</div>
					<NextProject name={nextTalk.title} imageUrl={nextTalk.cover || ''} link={`/palestra/${nextTalk.id}`} />
				</Section>
			</PageHero>

			<div className='container talk'>
				{talk.slides && <iframe id='slide' frameBorder={0} scrolling='no' src={slideLink(talk.slides)} />}
				<ProfileSection />
			</div>


			<Footer />
		</>
	)
}