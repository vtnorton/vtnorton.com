'use client'

import { FooterComponent, PageHeroComponent, PalestraComponent } from '../../components'
import { Section } from '../../components/SectionComponent'
import { ProfileSection } from '../../sections'
import { SeoProps } from '../../database/SEOProps'
import { Button } from '@fluentui/react-components'
import { ChevronRight20Regular } from '@fluentui/react-icons'
import { useEffect, useState } from 'react'
import { Talk } from '../../interfaces/Talk'
import axios from 'axios'

export default function Consultoria() {
	const [talks, setTalks] = useState<Talk[]>([])

	useEffect(() => {
		if (talks.length === 0) {
			axios
				.get('/api/talks')
				.then((response) => {
					setTalks(response.data)
				})
				.catch((error) => {
					console.error('Erro ao obter os dados da API:', error)
				})
		}
	}, [])

	return (
		<>
			<SeoProps
				title='Brand Awareness da SuperViz, através de eventos'
				description='Durante o segundo semestre de 2024, encabecei na SuperViz a estratégia de participação em eventos de tecnologia, com o objetivo de aumentar o reconhecimento da marca e gerar leads qualificados.'
				featureImage='/img/pages/palestras.jpg' />
			<PageHeroComponent
				title='Minhas palestras'
				description='Aqui você encontra todas as palestras que eu já dei, links para os vídeos e slides, e informações sobre como me chamar para palestrar. Pode ser que você encontre palestras relativamente antigas aqui, porém o material começou a ser colocado aqui a partir de Novembro de 2020.'
				backgroundUrl='/img/pages/palestras.jpg'>
				<div className='flex grid'>
					{talks.map((talk) => (
						<PalestraComponent talk={talk} key={talk.id} />
					))}
				</div>
			</PageHeroComponent>

			<div className='container'>
				<Section>
					<h2>Me chame para palestrar 😉</h2>
					<div className='text-60-percent-wrap'>
						<p>
							Se você gostou de alguma das palestras que eu dei, ou se você tem um evento e gostaria de me chamar para palestrar, entre em contato comigo. Eu adoro compartilhar conhecimento e falar sobre tecnologia, acessibilidade, desenvolvimento web e outras coisas. Vamos conversar!
						</p>
					</div>
					<br />
					<Button as='a' href='mailto:vitor@vtnorton.com' icon={<ChevronRight20Regular />} size='large' appearance='primary' shape='square'>entrar_em_contato(mail);</Button>
				</Section>
				<ProfileSection />
			</div>


			<FooterComponent />
		</>
	)
}