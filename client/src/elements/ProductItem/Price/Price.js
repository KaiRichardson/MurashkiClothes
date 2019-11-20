import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { spacing, lightGrey } from 'utils';

const Price = ({ id, price, discount }) => (
  <Wrapper data-testid={`price-${id}`}>
    {discount ? (
      <>
        <OldPrice data-testid={`price--default-${id}`}>{price}</OldPrice>
        <NewPrice data-testid={`price--discount-${id}`}>{discount}</NewPrice>
      </>
    ) : (
      <DefaultPrice data-testid={`price--default-${id}`}>{price}</DefaultPrice>
    )}
  </Wrapper>
);

export default Price;

const Wrapper = styled.p`
  grid-area: price;

  font-weight: bolder;

  > span,
  > del {
    &::before {
      content: '$';
      margin-right: ${spacing.xxs};
    }
  }
`;

const DefaultPrice = styled.span``;

const OldPrice = styled.del`
  color: ${lightGrey};
  margin-right: ${spacing.sm};
`;

const NewPrice = styled.span``;

Price.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number
};
