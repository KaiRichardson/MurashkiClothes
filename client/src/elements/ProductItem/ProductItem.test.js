import React from 'react';
import { render } from '@testing-library/react';

import ProductItem from './ProductItem';

describe('<ProductItem /> tests', () => {
  it('renders details of a single product', () => {
    //* Arrange
    const testData = {
      id: 'abc123',
      title: 'denim jacket',
      price: 46.0,
      rating: 5,
      img: 'https://via.placeholder.com/500'
    };

    //* Act
    const { getByTestId } = render(<ProductItem product={testData} />);

    //* Assert
    const wrapper = getByTestId(`product-${testData.id}`);
    const title = getByTestId(`title-${testData.id}`);
    const priceWrapper = getByTestId(`price-${testData.id}`);
    const price = getByTestId(`price--default-${testData.id}`);
    const img = getByTestId(`img-${testData.id}`);

    expect(wrapper.children.length).toBe(3);
    expect(title.textContent.toLowerCase()).toBe(testData.title);
    expect(priceWrapper.children.length).toBe(1);
    expect(price.tagName).toBe('SPAN');
    expect(price.textContent).toBe(testData.price.toString());
    expect(img.getAttribute('src')).toBe(testData.img);
    expect(img.getAttribute('alt')).toBe(testData.title);
  });

  it('renders both prices if an item is discounted', () => {
    //* Arrange
    const testData = {
      id: 'abc123',
      title: 'denim jacket',
      price: 46.0,
      discount: 28.0,
      rating: 5,
      img: 'https://via.placeholder.com/500'
    };

    //* Act
    const { getByTestId } = render(<ProductItem product={testData} />);

    //* Assert
    const priceWrapper = getByTestId(`price-${testData.id}`);
    const price = getByTestId(`price--default-${testData.id}`);
    const discountedPrice = getByTestId(`price--discount-${testData.id}`);

    expect(priceWrapper.children.length).toBe(2);
    expect(price.tagName).toBe('DEL');
    expect(discountedPrice.textContent).toBe(testData.discount.toString());
  });
});
