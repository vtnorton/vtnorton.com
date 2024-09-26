import { useState } from 'react'

import { productsItems } from '../../database/ProductShelfItems'
import { Product } from '../../interfaces/Product'
import { ProductShelfItemComponent } from './ProductShelfItemComponent'
import { Button } from '@fluentui/react-components'
import { ToggleLeft48Regular, ToggleRight48Regular } from '@fluentui/react-icons'

export const ProductShelfComponent = () => {
  const [showUnsupportedProjects, setShowUnsupportedProjects] = useState(true)
  const [projectsToDisplay, setProjectsToDisplay] = useState<Product[]>(
    productsItems.filter((x) => x.supported),
  )

  const updateList = () => {
    const products = productsItems.filter((x) =>
      showUnsupportedProjects ? x.name !== null : x.supported,
    )
    setProjectsToDisplay(products)
    setShowUnsupportedProjects(!showUnsupportedProjects)
  }

  return (
    <div className="container">
      <section className="shalf section">
        <div className="shalf-explain">
          <h2>📑 apps + extensões + projetinhos</h2>
          <p>
            Construir algo do nada é o que faz o meu mundo girar. Aqui está
            todos os projetos que eu já fiz, tô fazendo ou vou fazer ainda.
          </p>
          <Button onClick={() => updateList()} appearance='transparent' icon={showUnsupportedProjects
            ? <ToggleLeft48Regular />
            : <ToggleRight48Regular />} shape='square' size='large'>{showUnsupportedProjects
              ? 'show(\'all\');'
              : 'show(\'supported\');'}</Button>
        </div>
        <div
          className={`blog-grid shalf-content ${projectsToDisplay.length < 4 ? 'blog-grid-big' : ''}`}>
          {projectsToDisplay.map((item: Product, index: number) => {
            return (
              <ProductShelfItemComponent
                key={index}
                name={item.name}
                link={item.link}
                imageUrl={item.imageUrl}
                supported={item.supported} />
            )
          })}
        </div>
      </section >
    </div >
  )
}
