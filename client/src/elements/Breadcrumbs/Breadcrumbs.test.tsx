import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';

import Breadcrumbs from './Breadcrumbs';

describe('<Breadcrumbs /> tests', () => {
  it('renders the current route as a list of breadcrumbs', () => {
    //* Arrange
    const testData = '/shop/men/142621663';

    //* Act
    const { getAllByTestId } = render(
      <Router initialEntries={[testData]}>
        <Route path='/shop/:category/:productid'>
          <Breadcrumbs />
        </Route>
      </Router>
    );

    //* Assert
    const breadcrumbLinks = getAllByTestId('breadcrumbLink');

    // Expect a breadcrumb for each step in the url
    expect(breadcrumbLinks.length).toBe(testData.split('/').slice(1).length);

    // Expect the full path to be the final link in the breadcrumbs
    expect(breadcrumbLinks[breadcrumbLinks.length - 1].getAttribute('href')).toBe(testData);
  });
});
