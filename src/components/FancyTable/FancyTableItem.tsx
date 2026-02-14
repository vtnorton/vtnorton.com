import { Button } from '../Button'
import { NoiseImage } from '../NoiseImage'
import { FancyTableItems } from './FancyTableTypes'

export const FancyTableItem = ({ item }: { item: FancyTableItems }) => {
	return (
		<a href={item.link} className='ft-row' target='_blank' rel='noopener noreferrer'>
			<div className='ft-bg'>
				<NoiseImage src={item.image} alt={item.title} opacity={0.25} />
			</div>
			<div className='ft-row-content'>
				<h4>/{item.title}</h4>
				<p className='small'>{item.description}</p>
				<p><Button appearance='primary' shape='circular' size='large' onlyIcon></Button></p>
			</div>
		</a>
	)
}