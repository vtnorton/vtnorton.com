import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import { productsItems } from "../../database/ProductShelfItems";
import { Product } from "../../interfaces/Product";
import { ProductShelfComponentProps } from "./ProductShelfComponentProps";
import { ProductShelfItemComponent } from "./ProductShelfItemComponent";

export const ProductShelfComponent = (props: ProductShelfComponentProps) => {
  const [showUnsupportedProjects, setShowUnsupportedProjects] = useState(true);
  const [projectsToDisplay, setProjectsToDisplay] = useState<Product[]>(
    productsItems.filter((x) => x.supported),
  );

  const updateList = () => {
    const products = productsItems.filter((x) =>
      showUnsupportedProjects ? x.name !== null : x.supported,
    );
    setProjectsToDisplay(products);
    setShowUnsupportedProjects(!showUnsupportedProjects);
  };

  return (
    <div className="container">
      <section className="shalf">
        <div className="shalf-explain">
          <h2>📑 apps + extensões + projetinhos</h2>
          <p>
            Construir algo do nada é o que faz o meu mundo girar. Aqui está
            todos os projetos que eu já fiz, tô fazendo ou vou fazer ainda.
          </p>
          <a
            onClick={() => updateList()}
            className="btn btn-link"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faChevronRight} />
            {showUnsupportedProjects
              ? "mostrar projetos finalizados"
              : "mostrar apenas projetos suportados"}
          </a>
        </div>
        <div
          className={`blog-grid shalf-content ${projectsToDisplay.length < 4 ? "blog-grid-big" : ""}`}
        >
          {projectsToDisplay.map((item: Product, index: number) => {
            return (
              <ProductShelfItemComponent
                key={index}
                name={item.name}
                link={item.link}
                imageUrl={item.imageUrl}
                supported={item.supported}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};
