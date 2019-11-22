import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ToggleButton from './ToggleButton';

describe('<ToggleButton /> tests', () => {
  it('toggles the menu when clicked', () => {
    //* Arrange
    const toggle = jest.fn();
    const testData = true;

    //* Act
    const { getByTestId } = render(<ToggleButton toggle={toggle} menuIsOpen={testData} />);

    //* Assert
    const toggleButton = getByTestId('toggleButton');

    fireEvent.click(toggleButton);
    expect(toggle).toHaveBeenCalled();
  });
});
