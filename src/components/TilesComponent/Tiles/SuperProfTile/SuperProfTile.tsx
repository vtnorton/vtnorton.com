import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SuperProfTile = () => {
	return (
		<div className='link-item superprof section-full-width'>
			<div className='tile-title'>
				<img src='/img/icons/superprof.png' alt='Sinal de paz e amor feito com a mãeo' />
				<h2>superprof - aulas particulares</h2>
			</div>
			<div className='tile-content'>
				<p className='tag'>1ª aula grátis</p>
				<p>Quer aulinha particular? Mentoria? Chega mais, pois tenho experiência com ensino para pessoas, mudando de carreira para tech, dos mais diversos grupos de cortes sociais, como mulheres, LGBTQIA+, +50 anos, PCDs (Cegos, Surdos e Mudos). </p>
				<p>Sim, vai ter tarefa de casa. Sim, eu *vou* ficar no seu pé.</p>
				<a rel='noreferrer' href='https://www.superprof.com.br/desenvolvedor-anos-premiado-pela-microsoft-aula-programacao-pratica.html' className='btn btn-danger'>
					<FontAwesomeIcon icon={faChevronRight} />
					aula_particular();
				</a>
			</div>
		</div>
	)
}
