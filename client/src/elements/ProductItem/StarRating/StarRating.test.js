import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import StarRating from './StarRating';

describe('<StarRating /> tests', () => {
  it('renders a star for each point in the rating', () => {
    //* Arrange
    const testData = {
      id: 'abc123',
      rating: 4
    };

    //* Act
    const { getByTestId, getAllByTestId } = render(<StarRating id={testData.id} rating={testData.rating} />);

    //* Assert
    const wrapper = getByTestId(`rating-${testData.id}`);
    const stars = getAllByTestId('rating-star');

    expect(wrapper.children.length).toBe(testData.rating);
    expect(stars[stars.length - 1]).toHaveStyleRule('color', '#ffc107');
  });
});
