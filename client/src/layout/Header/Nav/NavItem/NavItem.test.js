import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import NavItem from './NavItem';

describe('<NavItem /> tests', () => {
  it('renders a nav item for the home page', () => {
    //* Arrange
    const testData = { name: 'home', link: '/' };

    //* Act
    const { getByTestId } = render(
      <Router>
        <NavItem name={testData.name} link={testData.link} />
      </Router>
    );

    //* Assert
    const testLink = getByTestId(`${testData.name}-link`);

    expect(testLink.getAttribute('href')).toBe(testData.link);
    expect(testLink.textContent).toBe(testData.name);
  });
});
