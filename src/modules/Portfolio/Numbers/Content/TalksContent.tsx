import { Button } from '../../../../components/Button'
import { FancyTable, FancyTableItems } from '../../../../components/FancyTable'

export const TalksContent = ({ items }: { items: FancyTableItems[] }) => {

	return (
		<div className='expanded-content'>
			<FancyTable items={items.slice(0, 3)} columns={{
				descriptionTitle: 'Descrição',
				mainTitle: 'Palestra',
			}} />
			<div className='video-cta'>
				<Button href='/portfolio/palestras' target='_blank' rel='noopener noreferrer' shape='square' size='large' appearance='primary'>Veja mais palestras</Button>
				<div className='community-stats'>
					<p>Palestrei para mais de 50 eventos</p>
					<p>começaram com exibição de código e viraram conexões reais.</p>
				</div>
			</div>
		</div>
	)
}