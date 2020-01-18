import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Product } from 'Store';
import { spacing } from 'utils';
import Price from './Price';

interface Props extends Product {}

const ProductItem: React.FC<Props> = ({ _id, _extID, name, price, imgUrls: { base } }) => (
  <Item data-testid={`product-${_id}`}>
    <Title data-testid={`title-${_id}`}>{name}</Title>

    <Price id={_id || _extID.toString()} price={price} />

    <Img src={base[0]} alt={name} data-testid={`img-${_id}`} />
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
  _id: PropTypes.string,
  _extID: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imgUrls: PropTypes.shape({
    base: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    side: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  }).isRequired
};
