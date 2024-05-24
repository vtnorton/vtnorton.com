import { Product } from "../../interfaces/Product";

export const ProductShelfItemComponent = (props: Product) => {
  return (
    <div className="blog-item">
      <a href={props.link} aria-label={props.name}>
        <figure className="post-img">
          <img
            width="350"
            height="350"
            src={props.imageUrl}
            alt={props.name}
            decoding="async"
            loading="lazy"
          />
          <div className="overlay-img"></div>
        </figure>
      </a>
      <a href={props.link} aria-label={props.name}>
        <h3>{props.name}</h3>
        {!props.supported && <p className="post-date">O projeto acabou 🥲</p>}
        <span className="blog-item-more">saiba_mais;</span>
      </a>
    </div>
  );
};
