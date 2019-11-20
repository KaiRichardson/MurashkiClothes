import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import StarRating from './StarRating';

describe('<StarRating /> tests', () => {
  it('renders a yellow star for each point in the rating and a grey star for each other point up to five', () => {
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
    const emptyStars = getAllByTestId('rating-star--empty');

    expect(wrapper.children.length).toBe(5);
    expect(stars[stars.length - 1]).toHaveStyleRule('color', '#ffc107');
    expect(stars.length).toBe(testData.rating);
    expect(emptyStars.length).toBe(5 - testData.rating);
  });
});
