import React from 'react';
import { render } from '@testing-library/react';

import Price from './Price';

describe('<Price /> tests', () => {
  it('renders the price of an item', () => {
    //* Arrange
    const testData = {
      id: 'abc123',
      price: 46.0
    };

    //* Act
    const { getByTestId } = render(<Price id={testData.id} price={testData.price} />);

    //* Assert
    const priceWrapper = getByTestId(`price-${testData.id}`);
    const price = getByTestId(`price--default-${testData.id}`);

    expect(priceWrapper.children.length).toBe(1);
    expect(price.tagName).toBe('SPAN');
    expect(price.textContent).toBe(testData.price.toString());
  });

  it('renders the original price crossed out and the discount if discounted', () => {
    //* Arrange
    const testData = {
      id: 'abc123',
      price: 46.0,
      discount: 28.0
    };

    //* Act
    const { getByTestId } = render(<Price id={testData.id} price={testData.price} discount={testData.discount} />);

    //* Assert
    const priceWrapper = getByTestId(`price-${testData.id}`);
    const price = getByTestId(`price--default-${testData.id}`);
    const discountedPrice = getByTestId(`price--discount-${testData.id}`);

    expect(priceWrapper.children.length).toBe(2);
    expect(price.tagName).toBe('DEL');
    expect(discountedPrice.textContent).toBe(testData.discount.toString());
  });
});
