import { Button } from '../../../components/Button'
import { NoiseImage } from '../../../components/NoiseImage'
import { PortfolioProps } from './PortfolioProps'

export const PortfolioItem = ({
	year,
	background,
	description,
	logo,
	url,
}: PortfolioProps) => {
	return (
		<div className='portfolio-item'>
			<div className='background'>
				<NoiseImage src={background} />
			</div>
			<div className='portfolio-content'>
				<div className='container'>

					<div className='start'>
						<Button as='a' href={url} size='medium' appearance='primary' shape='square'>Ver mais</Button>
					</div>

					<div className='middle'>
						<p>{description}</p>
						{/* <h2>{title}</h2> */}
					</div>

					<div className='end'>
						<span>/{year}/</span>
						<img src={logo} />
					</div>

				</div>
			</div>
		</div>
	)
}