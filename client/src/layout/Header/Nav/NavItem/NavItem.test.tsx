import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import NavItem from './NavItem';

describe('<NavItem /> tests', () => {
  it('renders a nav item for the home page', () => {
    //* Arrange
    const testData = { name: 'home', link: '/' };
    document.removeEventListener = jest.fn();

    //* Act
    const { getByTestId } = render(
      <Router>
        <NavItem name={testData.name} link={testData.link} />
      </Router>
    );

    //* Assert
    const testLink = getByTestId('navItemLink');

    expect(testLink.getAttribute('href')).toBe(testData.link);
    expect(testLink.textContent).toBe(testData.name);
  });

  it('renders a nav item with a dropdown menu', () => {
    //* Arrange
    const testData = {
      name: 'test',
      link: '/test',
      dropdownOptions: [{ name: 'dropdown item', link: '/test/dropdown' }]
    };

    //* Act
    const { getByTestId } = render(
      <Router>
        <NavItem name={testData.name} link={testData.link} dropdownOptions={testData.dropdownOptions} />
      </Router>
    );

    //* Assert
    const dropdown = getByTestId(`dropdown`);

    expect(dropdown);
  });
});
