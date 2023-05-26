import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ForBusinessComponent = () => {
	return (
		<section className='forbusiness'>
			<div className='row'>
				<div className='col-lg-8 col-md-9'>
					<h2>💼 para empresas</h2>
					<p>Impulsione o andamento dos processos e os métodos da sua empresa. Oferecemos a solução que a sua empresa precisa: sistema ou consultora, na medida certa.</p>
					<a href='/para-empresas ' className='btn btn-primary'>
						<FontAwesomeIcon icon={faChevronRight} />
						confira;
					</a>
				</div>
			</div>
		</section>
	)
}
