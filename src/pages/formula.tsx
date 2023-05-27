import { useRouter } from 'next/router'
import { FooterComponent, NextProjectComponent, PageHeroComponent } from '../components'

export default function Heartthrob() {
	const router = useRouter()

	return (
		<>
			<PageHeroComponent title='heartthrob' description='Já pensou em entregar um MVP em poucos dias, com qualidade impecável e as melhores práticas da atualidade, e lucrar bastante com isso?' backgroundUrl='/img/pages/desenvolvimento.jpg' backgroundPosition='-250px'>
				<section>
					<div className='row showcase'>
						<div className='col-md-7'>
							<h2>O que iremos resolver</h2>
							<p>
								Uma das maiores vantagens que a área de programação nos dá é a possibilidade de usar nosso conhecimento em projetos que não demandam uma contratação. Os freelances estão em toda a parte, e cada um de nós já se viu cogitando pegar para complementar nossa renda de
								alguma forma.
							</p>
							<p>
								E agora ficou mais fácil! Heartthrob é um framework open-source que quer facilitar a criação de suas aplicações. Com bibliotecas para front e back-end, ele visa acelerar o desenvolvimento dos sites, tirando do caminho as tarefas mais demoradas como controle de
								acesso, login de usuário, design de componentes, etc., para permitir que você possa focar apenas no negócio do seu cliente!
							</p>
						</div>
					</div>
					<NextProjectComponent path={router.pathname} />
				</section>
			</PageHeroComponent>

			<FooterComponent />
		</>
	)
}
