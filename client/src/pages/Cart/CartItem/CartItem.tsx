import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Variant } from 'Store';
import { lightGrey, spacing } from 'utils';
import EditQuantityForm from './EditQuantityForm';

interface Props {
  quantity: number;
  product: Variant;
}

const CartItem: React.FC<Props> = ({ quantity, product }) => {
  return (
    <Wrapper>
      <h3>{product.name}</h3>
      <EditQuantityForm variant_id={product.variant_id} currentQuantity={quantity} />
    </Wrapper>
  );
};

export default CartItem;

const Wrapper = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-block-end: 2px solid ${lightGrey};
  margin-bottom: ${spacing.md};
`;

CartItem.propTypes = {
  quantity: PropTypes.number.isRequired,
  product: PropTypes.shape({
    variant_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    quantity: PropTypes.number
  }).isRequired
};
