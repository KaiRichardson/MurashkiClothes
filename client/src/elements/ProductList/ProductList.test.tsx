import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { ProductList } from './ProductList';

describe('<ProductList /> tests', () => {
  it('matches the snapshot', () => {
    //* Act
    const { getByTestId } = render(<ProductList data-testid='testProductList' />);

    //* Assert
    const testProductList = getByTestId('testProductList');

    // Snapshot test
    expect(testProductList).toMatchSnapshot();
  });
});
