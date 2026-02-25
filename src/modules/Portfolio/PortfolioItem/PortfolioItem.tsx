import { Button } from '../../../components/Button'
import { NoiseImage } from '../../../components/NoiseImage'
import type { PortfolioProps } from './PortfolioProps'

export const PortfolioItem = ({ year, background, description, logo, url }: PortfolioProps) => {
	return (
		<div className='portfolio-item'>
			<div className='background'>
				<NoiseImage src={background} />
			</div>
			<div className='portfolio-content'>
				<div className='container'>
					<div className='start'>
						{url === '/portfolio/formula' ?
							(<Button as='a' href={url} size='medium' appearance='outline' shape='square' disabled>
								Em breve
							</Button>)
							:
							(<Button as='a' href={url} size='medium' appearance='primary' shape='square'>
								Ver mais
							</Button>)
						}
					</div>

					<div className='middle'>
						<p>{description}</p>
					</div>

					<div className='end'>
						<span>/{year}/</span>
						<img src={logo} aria-label='Project logo' alt={`Logo do projeto`} />
					</div>
				</div>
			</div>
		</div>
	)
}
