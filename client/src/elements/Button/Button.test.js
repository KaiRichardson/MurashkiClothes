import React from 'react';
import { render } from '@testing-library/react';

import { Button } from './Button';

describe('<Button /> tests', () => {
  it('renders a default button', () => {
    //* Act
    const { getByTestId } = render(<Button data-testid='testButton'>Test Button</Button>);

    //* Assert
    const testButton = getByTestId('testButton');

    expect(testButton.tagName).toBe('BUTTON');
  });

  it('renders a dark button', () => {
    //* Act
    const { getByTestId } = render(
      <Button dark data-testid='testButton'>
        Test Button
      </Button>
    );

    //* Assert
    const testButton = getByTestId('testButton');

    expect(testButton.tagName).toBe('BUTTON');
  });
});
