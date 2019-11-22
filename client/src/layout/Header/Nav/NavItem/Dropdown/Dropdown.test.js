import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import Dropdown from './Dropdown';

describe('<Dropdown /> tests', () => {
  it('renders each option', () => {
    //* Arrange
    const testData = [
      { name: 'item one', link: '/item/one' },
      { name: 'item two', link: '/item/two' }
    ];

    //* Act
    const { getAllByTestId } = render(
      <Router>
        <Dropdown options={testData} />
      </Router>
    );

    //* Assert
    const dropdownOptions = getAllByTestId('dropdownOption');
    const dropdownLinks = getAllByTestId('navItemLink');

    expect(dropdownOptions.length).toBe(testData.length);
    expect(dropdownLinks[0].textContent).toBe(testData[0].name);
    expect(dropdownLinks[0].getAttribute('href')).toBe(testData[0].link);
  });
});
