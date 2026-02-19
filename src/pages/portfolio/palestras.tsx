'use client'

import { PageHero } from '../../components/PageHero'
import { Section } from '../../components/Section'
import { ProfileSection } from '../../sections/Profile/Profile'
import { Footer } from '../../sections/Footer/Footer'
import { ContentSEO } from '../../database/seo'
import { Button } from '../../components/Button'
import { PalestraFeed } from '../../components/PalestraComponent'

export default function Palestras() {
	return (
		<>
			<ContentSEO
				title='Minhas palestras'
				description='Aqui você encontra todas as palestras que eu já dei, links para os vídeos e slides, e informações sobre como me chamar para palestrar.'
				featureImage='/img/pages/palestras.jpg' />
			<PageHero
				title='Minhas palestras'
				description='Aqui você encontra todas as palestras que eu já dei, links para os vídeos e slides, e informações sobre como me chamar para palestrar. Eu tenho palestras relativamente mais antigas, porém o material começou a ser colocado aqui a partir de Novembro de 2020.'
				backgroundUrl='/img/pages/palestras.jpg'>
				<div className='personal-blog'>
					<PalestraFeed />
				</div>
			</PageHero>

			<div className='container'>
				<Section paragraph>
					<h2>Me chame para palestrar 😉</h2>
					<p>
						Se você gostou de alguma das palestras que eu dei, ou se você tem um evento e gostaria de me chamar para palestrar, entre em contato comigo. Eu adoro compartilhar conhecimento e falar sobre tecnologia, acessibilidade, desenvolvimento web e outras coisas. Vamos conversar!
					</p>
					<br />
					<Button as='a' href='mailto:vitor@vtnorton.com' size='medium' appearance='primary' shape='square'>Entre em contato</Button>
				</Section>
				<ProfileSection />
			</div>


			<Footer />
		</>
	)
}