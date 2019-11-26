import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ProductProps } from 'Store';
import { spacing } from 'utils';
import Price from './Price';

interface Props extends ProductProps {}

const ProductItem: React.FC<Props> = ({ id, title, price, discount, img }) => (
  <Item data-testid={`product-${id}`}>
    <Title data-testid={`title-${id}`}>{title}</Title>

    <Price id={id} price={price} discount={discount} />

    <Img src={img} alt={title} data-testid={`img-${id}`} />
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
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number,
  img: PropTypes.string.isRequired
};
