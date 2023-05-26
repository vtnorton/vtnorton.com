import { InstagramItem } from '../../../../interfaces'
import { InstagramTileProps } from './InstagramTileProps'

export const InstagramTile = (props: InstagramTileProps) => {
	return (
		<div className='link-item instagram'>
			<div className='tile-title'>
				<img src='/img/icons/instagram.png' alt='Ícone do Instagram' />
				<h2>{props.username}</h2>
			</div>
			<div className='tile-content'>
				<div className='row'>
					{props.photos.map((item: InstagramItem, index: number) => {
						return (
							<div key={index} className='col-md-4 col-xs-4'>
								<img src={item.imageUrl} alt={item.altImg} />
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
