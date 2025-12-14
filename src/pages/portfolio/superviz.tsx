import { PageHero } from '../../components/PageHero'
import { Footer } from '../../sections/Footer/Footer'

export default function SuperViz() {
	return (
		<>
			<PageHero
				title={'Meu blog'}
				description='Este é meu espaço pra escrever sobre cinema, política, meu trampo como dev — postagens técnicas ou não — enfim, um blog old-school. Meu espaço sem compromisso na web, que talvez não devesse estar aqui, mas meu ímpeto de escrever sobre tudo me faz manter.'
				backgroundUrl='/img/pages/blog.jpg'>
				<>
				</>
			</PageHero>

			<Footer />
		</>
	)
}
