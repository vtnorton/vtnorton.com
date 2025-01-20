import Image from 'next/image'
import { Product } from '../../interfaces/Product'

export const ProductShelfItemComponent = ({ project }: { project: Product }) => {
  return (
    <div className="blog-item">
      <a href={project.link} aria-label={project.name}>
        <figure className="post-img">
          <Image
            width="350"
            height="350"
            src={project.imageUrl}
            alt={project.name}
            decoding="async"
            loading="lazy" />
          <div className="overlay-img"></div>
        </figure>
      </a>
      <a href={project.link} aria-label={project.name}>
        <h3>{project.name}</h3>
        {!project.supported && <p className="post-date">O projeto acabou 🥲</p>}
        <span className="blog-item-more">saiba_mais;</span>
      </a>
    </div>
  )
}
