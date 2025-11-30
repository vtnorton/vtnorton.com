import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { PageHero } from '../components/PageHero'
import BlogFeed from '../modules/Blog/Feed/BlogFeed'
import { Footer } from '../sections/Footer/Footer'
import { InteractionTag, InteractionTagPrimary, InteractionTagSecondary, TagGroup } from '@fluentui/react-components'

export default function Blog() {
	const router = useRouter()
	const [selectedTag, setSelectedTag] = useState<string | null>(null)

	useEffect(() => {
		if (router.isReady && router.query.tag) {
			setSelectedTag(router.query.tag as string)
		}
	}, [router.isReady, router.query.tag])

	const handleTagDismiss = () => {
		router.push({
			pathname: router.pathname,
			query: {},
		}, undefined, { shallow: true })
		setSelectedTag(null)
	}

	return (
		<>
			<PageHero
				title={'Meu blog'}
				description='Este é meu espaço pra escrever sobre cinema, política, meu trampo como dev — postagens técnicas ou não — enfim, um blog old-school. Meu espaço sem compromisso na web, que talvez não devesse estar aqui, mas meu ímpeto de escrever sobre tudo me faz manter.'
				innerComponent={selectedTag ?
					<TagGroup onDismiss={handleTagDismiss} aria-label='Descelecionar tag' style={{ margin: '1rem 0 0' }}>
						<InteractionTag value={selectedTag} shape='circular' appearance='brand' size='medium' >
							<InteractionTagPrimary hasSecondaryAction>#{selectedTag}</InteractionTagPrimary>
							<InteractionTagSecondary aria-label='Deselecionar tag' />
						</InteractionTag>
					</TagGroup>
					: undefined
				}
				backgroundUrl='/img/pages/blog.jpg'>
				<div className='personal-blog'>
					<BlogFeed
						endpoint='/api/personal-blog'
						selectedTag={selectedTag}
						setSelectedTag={setSelectedTag}
						isReady={router.isReady} />
					<div className='widgets'>
						<p>Em breve, algo aqui...</p>
					</div>
				</div>
			</PageHero>

			<Footer />
		</>
	)
}
