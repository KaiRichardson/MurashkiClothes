import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ id, price, discount }) => (
  <p data-testid={`price-${id}`}>
    {discount ? (
      <del data-testid={`price--default-${id}`}>{price}</del>
    ) : (
      <span data-testid={`price--default-${id}`}>{price}</span>
    )}

    {discount && <span data-testid={`price--discount-${id}`}>{discount}</span>}
  </p>
);

export default Price;

Price.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number
};
