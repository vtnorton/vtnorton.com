import React from 'react'
import { PageHero } from '../components/PageHero'
import BlogFeed from '../modules/Blog/Feed/BlogFeed'
import { Footer } from '../sections/Footer/Footer'

export default function Blog() {

	return (
		<main>
			<PageHero
				title={'Blog pessoal'}
				description='Cinéfilo, político, blogger old-school. Meu espaço sem compromisso na web, que talvez não devesse estar aqui, mas meu ímpeto de escrever sobre tudo me faz manter.'
				backgroundUrl='/img/pages/blog.jpg'>
				<div className='personal-blog'>
					<BlogFeed />
					<div className='widgets'>
						<p>Algo interessante vai entrar aqui...</p>
					</div>
				</div>
			</PageHero>

			<Footer />
		</main>
	)
}
