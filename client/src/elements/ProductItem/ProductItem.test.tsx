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
      img: 'https://via.placeholder.com/500'
    };

    //* Act
    const { getByTestId } = render(<ProductItem {...testData} />);

    //* Assert
    const wrapper = getByTestId(`product-${testData.id}`);
    const title = getByTestId(`title-${testData.id}`);
    const img = getByTestId(`img-${testData.id}`);

    expect(wrapper.children.length).toBe(3);
    if (title.textContent) {
      expect(title.textContent.toLowerCase()).toBe(testData.title);
    }
    expect(img.getAttribute('src')).toBe(testData.img);
    expect(img.getAttribute('alt')).toBe(testData.title);
  });
});
