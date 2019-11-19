import React from 'react';
import PropTypes from 'prop-types';

import Price from './Price';
import StarRating from './StarRating';

const ProductItem = ({ product }) => (
  <article data-testid={`product-${product.id}`}>
    <h3 data-testid={`title-${product.id}`}>{product.title}</h3>

    <Price id={product.id} price={product.price} discount={product.discount} />

    <StarRating id={product.id} rating={product.rating} />

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
