import React from 'react';
import { render } from '@testing-library/react';

import Badge from './Badge';

describe('<Badge /> tests', () => {
  it('renders the number if it is less than or equal to ten', () => {
    //* Arrange
    const testNumber = 10;

    //* Act
    const { getByTestId } = render(<Badge number={testNumber} />);

    //* Assert
    const testBadge = getByTestId('badge');

    expect(testBadge.firstChild.textContent).toBe(testNumber.toString());
  });

  it('renders "10+" if the number is greater than ten', () => {
    //* Arrange
    const testNumber = 11;

    //* Act
    const { getByTestId } = render(<Badge number={testNumber} />);

    //* Assert
    const testBadge = getByTestId('badge');

    expect(testBadge.firstChild.textContent).toBe('10+');
  });
});
