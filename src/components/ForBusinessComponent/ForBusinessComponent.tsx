import { Button } from '@fluentui/react-components'
import { ChevronRight20Regular } from '@fluentui/react-icons'
import { Section } from '../SectionComponent'

export const ForBusinessComponent = () => {
	return (
		<Section className='forbusiness' full removePaddingButton removePaddingTop>
			<div className='text-60-percent-wrap escapte-padding'>
				<h2>💼 para empresas</h2>
				<p>Impulsione o andamento dos processos e os métodos da sua empresa. Oferecemos a solução que a sua empresa precisa: sistema ou consultora, na medida certa.</p>
				<Button as='a' href='/para-empresas' icon={<ChevronRight20Regular />} size='large' appearance='primary' shape='square'>confira();</Button>
			</div>
		</Section>
	)
}
