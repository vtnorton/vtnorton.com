import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Product } from '../../interfaces/Product'
import { ProductShelfItemComponent } from './ProductShelfItemComponent'
import { productsItems } from '../../database/ProductShelfItems'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { ProductShelfComponentProps } from './ProductShelfComponentProps'
import { useState } from 'react'

export const ProductShelfComponent = (props: ProductShelfComponentProps) => {
	const [showUnsupportedProjects, setShowUnsupportedProjects] = useState(false)

	return (
		<div className='container'>
			<section className='shalf'>
				<div className='shalf-explain'>
					<h2>📑 apps + extensões + projetinhos</h2>
					<p>Construir algo do nada é o que faz o meu mundo girar. Aqui está todos os projetos que eu já fiz, tô fazendo ou vou fazer ainda.</p>
					<a onClick={() => setShowUnsupportedProjects(!showUnsupportedProjects)} className='btn btn-link'>
						<FontAwesomeIcon icon={faChevronRight} />
						mostrar projetos finalizados
					</a>
				</div>
				<div className='blog-grid shalf-content'>
					{productsItems
						.filter((x) => (showUnsupportedProjects ? x.name !== null : x.supported))
						.map((item: Product, index: number) => {
							return <ProductShelfItemComponent key={index} name={item.name} link={item.link} imageUrl={item.imageUrl} />
						})}
				</div>
			</section>
		</div>
	)
}
