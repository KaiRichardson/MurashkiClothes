import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { spacing } from 'utils';
import Price from './Price';

const ProductItem = ({ product }) => (
  <Item data-testid={`product-${product.id}`}>
    <Title data-testid={`title-${product.id}`}>{product.title}</Title>

    <Price id={product.id} price={product.price} discount={product.discount} />

    <Img src={product.img} alt={product.title} data-testid={`img-${product.id}`} />
  </Item>
);

export default ProductItem;

const Item = styled.article`
  display: grid;
  grid-template-rows: 1fr repeat(2, max-content);
  grid-template-areas:
    'img'
    'title'
    'price';
`;

const Title = styled.h3`
  grid-area: title;

  text-transform: capitalize;
  font-weight: normal;
  margin-bottom: ${spacing.sm};
`;

const Img = styled.img`
  grid-area: img;

  margin-bottom: ${spacing.lg};
  width: 100%;
`;

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number,
    img: PropTypes.string.isRequired
  }).isRequired
};
