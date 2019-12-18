import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'jest-styled-components';

import { Button, ButtonLink } from './Button';
import { red } from 'utils';

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
    expect(testButton).toHaveStyleRule('--bg', '#000');
    // Hover test
    expect(testButton).toHaveStyleRule('--bg', '#333', {
      modifier: ':hover'
    });
  });

  it('renders a brand color button', () => {
    //* Act
    const { getByTestId } = render(
      <Button brand data-testid='testButton'>
        Test Button
      </Button>
    );

    //* Assert
    const testButton = getByTestId('testButton');

    // Snapshot test
    expect(testButton).toMatchSnapshot();

    // Color rules tests
    expect(testButton).toHaveStyleRule('--txtColor', '#fff');
    expect(testButton).toHaveStyleRule('--bg', '#000');
    // Hover test
    expect(testButton).toHaveStyleRule('--bg', red, {
      modifier: ':hover'
    });
  });

  it('renders a transparent button', () => {
    //* Act
    const { getByTestId } = render(
      <Button trans data-testid='testButton'>
        Test Button
      </Button>
    );

    //* Assert
    const testButton = getByTestId('testButton');

    // Snapshot test
    expect(testButton).toMatchSnapshot();

    // Transparency test
    expect(testButton).toHaveStyleRule('--txtColor', '#b3b3b3');
    expect(testButton).toHaveStyleRule('--bg', 'transparent');

    // Hover test
    expect(testButton).toHaveStyleRule('--txtColor', '#000', {
      modifier: ':hover'
    });
    expect(testButton).toHaveStyleRule('--bg', 'transparent', {
      modifier: ':hover'
    });
  });
});

describe('<ButtonLink /> tests', () => {
  it('renders a default button link', () => {
    //* Act
    const { getByTestId } = render(
      <Router>
        <ButtonLink to='/test' data-testid='testButton'>
          test link
        </ButtonLink>
      </Router>
    );

    //* Assert
    const testButton = getByTestId('testButton');

    // Snapshot test
    expect(testButton).toMatchSnapshot();

    // Href test
    expect(testButton.getAttribute('href')).toBe('/test');

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

  it('renders a dark button link', () => {
    //* Act
    const { getByTestId } = render(
      <Router>
        <ButtonLink dark to='/test' data-testid='testButton'>
          test link
        </ButtonLink>
      </Router>
    );

    //* Assert
    const testButton = getByTestId('testButton');

    // Snapshot test
    expect(testButton).toMatchSnapshot();

    // Color rules tests
    expect(testButton).toHaveStyleRule('--txtColor', '#fff');
    expect(testButton).toHaveStyleRule('--bg', '#000');

    // Hover test
    expect(testButton).toHaveStyleRule('--bg', '#333', {
      modifier: ':hover'
    });
  });

  it('renders a brand color button link', () => {
    //* Act
    const { getByTestId } = render(
      <Router>
        <ButtonLink brand to='/test' data-testid='testButton'>
          Test Button
        </ButtonLink>
      </Router>
    );

    //* Assert
    const testButton = getByTestId('testButton');

    // Snapshot test
    expect(testButton).toMatchSnapshot();

    // Color rules tests
    expect(testButton).toHaveStyleRule('--txtColor', '#fff');
    expect(testButton).toHaveStyleRule('--bg', '#000');
    // Hover test
    expect(testButton).toHaveStyleRule('--bg', red, {
      modifier: ':hover'
    });
  });

  it('renders a transparent button link', () => {
    //* Act
    const { getByTestId } = render(
      <Router>
        <ButtonLink trans to='/test' data-testid='testButton'>
          Test Button
        </ButtonLink>
      </Router>
    );

    //* Assert
    const testButton = getByTestId('testButton');

    // Snapshot test
    expect(testButton).toMatchSnapshot();

    // Transparency test
    expect(testButton).toHaveStyleRule('--txtColor', '#b3b3b3');
    expect(testButton).toHaveStyleRule('--bg', 'transparent');

    // Hover test
    expect(testButton).toHaveStyleRule('--txtColor', '#000', {
      modifier: ':hover'
    });
    expect(testButton).toHaveStyleRule('--bg', 'transparent', {
      modifier: ':hover'
    });
  });
});
