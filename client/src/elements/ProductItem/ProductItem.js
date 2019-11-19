import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({ product }) => (
  <article data-testid={`product-${product.id}`}>
    <h3 data-testid={`title-${product.id}`}>{product.title}</h3>
    <p data-testid={`price-${product.id}`}>
      {product.discount ? (
        <del data-testid={`price--default-${product.id}`}>{product.price}</del>
      ) : (
        <span data-testid={`price--default-${product.id}`}>{product.price}</span>
      )}
      {product.discount && <span data-testid={`price--discount-${product.id}`}>{product.discount}</span>}
    </p>
    <img src={product.img} alt={product.title} data-testid={`img-${product.id}`} />
  </article>
);

export default ProductItem;

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number,
    rating: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired
  }).isRequired
};
