import { Button } from '@fluentui/react-components'
import { ChevronRight20Regular } from '@fluentui/react-icons'

export const ForBusinessComponent = () => {
	return (
		<section className='forbusiness section'>
			<div className='row'>
				<div className='col-lg-8 col-md-9'>
					<h2>💼 para empresas</h2>
					<p>Impulsione o andamento dos processos e os métodos da sua empresa. Oferecemos a solução que a sua empresa precisa: sistema ou consultora, na medida certa.</p>
					<Button as='a' href='/para-empresas' icon={<ChevronRight20Regular />} size='large' appearance='primary' shape='square'>confira();</Button>
				</div>
			</div>
		</section>
	)
}
