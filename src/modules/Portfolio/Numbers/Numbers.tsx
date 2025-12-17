import { NumberSquare } from './NumberSquare'

export const Numbers = () => {
	return (
		<div className='numbers'>
			<div className='first-row'>
				<div className='container'>
					<NumberSquare title={'prêmios'} number={'12x'} description={'Momentos em que o trabalho duro foi reconhecido externamente por experimentos internos.'} />
					<NumberSquare title={'clientes'} number={'15+'} description={'Empresas que confiaram em ideias ainda sem forma e me deixaram testar e errar.'} />
				</div>
			</div>
			<div className='second-row'>
				<div className='container'>
					<NumberSquare title={'palestras'} number={'16'} description={'Conversas que começaram com "será que posso tentar explicar isso?".'} />
					<NumberSquare title={'videos'} number={'15'} description={'Experimentos em vídeo: alguns planejados, outros nem tanto.'} />
					<NumberSquare title={'podcasts'} number={'12'} description={'Conversas gravadas sobre código, carreira, cotidiano e tentativas.'} />
				</div>
			</div>
		</div>
	)
}