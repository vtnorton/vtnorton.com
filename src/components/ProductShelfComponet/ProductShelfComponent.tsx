import { useState } from 'react'

import { productsItems } from '../../database/ProductShelfItems'
import { Product } from '../../interfaces/Product'
import { ProductShelfItemComponent } from './ProductShelfItemComponent'
import { Switch } from '@fluentui/react-components'
import { Section } from '../SectionComponent'

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
      <Section className="shelf" removePaddingButton removePaddingTop full>
        <div className="escapte-padding">
          <div className='sticky'>
            <h2>📑 apps + extensões + projetinhos</h2>
            <p>
              Construir algo do nada é o que faz o meu mundo girar. Aqui está
              todos os projetos que eu já fiz, tô fazendo ou vou fazer ainda.
            </p>
            <Switch label={showUnsupportedProjects
              ? 'show(\'all\');'
              : 'show(\'supported\');'} onClick={() => updateList()} />
          </div>
        </div>
        <div
          className={`blog-grid shelf-content ${projectsToDisplay.length > 4 ? 'blog-grid-big' : ''}`}>
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
      </Section >
    </div >
  )
}
