import { FooterComponent, PageHeroComponent } from '../components'
import { ThreeColumnItemsComponent } from '../components/others/ThreeColumnItemsComponent/ThreeColumnItemsComponent'
import { ThreeColumnItem } from '../components/others/ThreeColumnItemsComponent/ThreeColumnItemsComponentProps'

const benefits: ThreeColumnItem[] = [
	{
		title: '🧩 Desacoplado!',
		content: <p>Você pode usar o Hearthrob apenas no backend ou apenas no frontend, garantindo que ele vai complementar as suas necessidades!</p>,
	},
	{
		title: '🔬 Testes + Testes + Testes',
		content: (
			<p>
				Atualmente, não dá para esperar sentado que o cliente envie um feedback via carta ou que liguem para o SAC. Não! Em cinco segundos eles podem fazer um tweet que destruirá o seu negócio. É vital que companhias, negócios e organizações como a nossa, estejam antenadas aos
				sinais que estão lá fora, na comunidade.
			</p>
		),
	},
	{
		title: '📚 Swagger + Documentação',
		content: <p>Tenha preparadas as configurações de swagger e de outras ferramentas para as suas API em um piscar de olhos! Sem falar de APIs já prontas com autenticação de usuário por JWT.</p>,
	},
]

export default function Heartthrob() {
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
					<div className='showcase'>
						<ThreeColumnItemsComponent items={benefits} />
					</div>
					<div className='row showcase'>
						<div className='col-md-6'>
							<h2>Frontend</h2>
							<p>Temos componentes prontos que podem ser apenas inseridos nas suas aplicações, poupando tempo e esforço ao longo do desenvolvimento, além de componentes visuais já configurados e adaptáveis às suas necessidades!</p>
							<p>Entregamos também páginas já prontas, caso queira utilizar, como páginas de login, registro de usuário, edição de perfil, entre outros... </p>
						</div>
						<div className='col-md-5 col-md-offset-1'>
							<img src='/img/projects/heartthrob/heartthrob-front.jpeg' />
						</div>
					</div>
				</section>
			</PageHeroComponent>

			<FooterComponent />
		</>
	)
}
