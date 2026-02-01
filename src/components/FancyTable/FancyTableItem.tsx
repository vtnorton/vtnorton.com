import { Button } from '../Button'
import { NoiseImage } from '../NoiseImage'
import { FancyTableItems } from './FancyTableTypes'

export const FancyTableItem = ({ item }: { item: FancyTableItems }) => {
	return (
		<a href={item.link} className='ft-row' target='_blank' rel='noopener noreferrer'>
			<div className='ft-bg'>
				<NoiseImage src={'/img/portfolio/' + item.image} alt={item.title} />
			</div>
			<div className='ft-row-content'>
				<h4>/{item.title}</h4>
				<p>{item.description}</p>
				<p><Button appearance='primary' shape='circular' size='large' onlyIcon></Button></p>
			</div>
		</a>
	)
}