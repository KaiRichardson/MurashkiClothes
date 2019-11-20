import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { yellow, lightGrey } from 'utils';

const StarRating = ({ id, rating }) => (
  <div data-testid={`rating-${id}`}>
    {[...Array(5)].map((e, i) => (
      <Star filled={i < rating} key={`${id}-star-${i}`} />
    ))}
  </div>
);

export default StarRating;

const Star = styled.i.attrs(props => ({
  className: 'fas fa-star',
  'data-testid': `rating-star${props.filled ? '' : '--empty'}`
}))`
  color: ${props => (props.filled ? yellow : lightGrey)};
`;

StarRating.propTypes = {
  id: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};
