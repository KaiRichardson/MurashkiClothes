import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Button } from './Button';

describe('<Button /> tests', () => {
  it('renders a default button', () => {
    //* Act
    const { getByTestId } = render(<Button data-testid='testButton'>Test Button</Button>);

    //* Assert
    const testButton = getByTestId('testButton');

    // Snapshot test
    expect(testButton).toMatchSnapshot();

    // Color rules tests
    expect(testButton).toHaveStyleRule('--txtColor', '#000');
    expect(testButton).toHaveStyleRule('color', 'var(--txtColor)');

    expect(testButton).toHaveStyleRule('--bg', '#fff');
    expect(testButton).toHaveStyleRule('background', 'var(--bg)');

    // Hover tests
    expect(testButton).toHaveStyleRule('--txtColor', '#fff', {
      modifier: ':hover'
    });
    expect(testButton).toHaveStyleRule('--bg', '#000', {
      modifier: ':hover'
    });
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

    // Snapshot test
    expect(testButton).toMatchSnapshot();

    // Color rules tests
    expect(testButton).toHaveStyleRule('--txtColor', '#fff');
    expect(testButton).toHaveStyleRule('color', 'var(--txtColor)');

    expect(testButton).toHaveStyleRule('--bg', '#000');
    expect(testButton).toHaveStyleRule('background', 'var(--bg)');

    // Hover test
    expect(testButton).toHaveStyleRule('--bg', '#333', {
      modifier: ':hover'
    });
  });
});
