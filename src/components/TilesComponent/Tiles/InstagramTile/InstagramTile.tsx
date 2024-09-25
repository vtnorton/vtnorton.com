import { FluentProvider, Spinner, webLightTheme } from '@fluentui/react-components'
import axios from 'axios'
import { useEffect, useState } from 'react'

import { InstagramItem } from '../../../../interfaces'
import { InstagramTileProps } from './InstagramTileProps'

export const InstagramTile = (props: InstagramTileProps) => {
	const [items, setItems] = useState<InstagramItem[]>([])

	useEffect(() => {
		if (items.length === 0) {
			axios
				.get('/api/instagram')
				.then((response) => {
					setItems(response.data)
				})
				.catch((error) => {
					console.error('Erro ao obter os dados da API:', error)
				})
		}
	}, [])

	const renderPhotos = () => {
		if (items.length !== 0)
			return items.map((item: InstagramItem, index: number) => {
				return (
					<div key={index} className='col-md-4 col-xs-4'>
						<img src={item.imageUrl} alt={item.altImg} />
					</div>
				)
			})

		return (
			<FluentProvider theme={webLightTheme}>
				<div className='space-medium'></div>
				<Spinner size='medium' label='Carregando...' />
				<div className='space-medium'></div>
				<div className='space-long'></div>
			</FluentProvider>
		)
	}

	return (
		<div className='link-item instagram sc-full-width'>
			<div className='tile-title'>
				<img src='/img/icons/instagram.png' alt='Ícone do Instagram' />
				<h2>{props.username}</h2>
			</div>
			<div className='tile-content'>
				<div className='row'>{renderPhotos()}</div>
			</div>
		</div>
	)
}
