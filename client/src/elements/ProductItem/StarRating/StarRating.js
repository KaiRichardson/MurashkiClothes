import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { yellow } from 'utils';

const StarRating = ({ id, rating }) => (
  <div data-testid={`rating-${id}`}>
    {[...Array(rating)].map((e, i) => (
      <Star className='fas fa-star' key={`${id}-star-${i}`} data-testid='rating-star' />
    ))}
  </div>
);

export default StarRating;

const Star = styled.i`
  color: ${yellow};
`;

StarRating.propTypes = {
  id: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};
