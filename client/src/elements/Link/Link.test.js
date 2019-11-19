import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { Link } from './Link';

describe('<Link /> tests', () => {
  it('renders a link', () => {
    //* Act
    const { getByTestId } = render(
      <Router>
        <Link data-testid='test-link' to='/test'>
          test link
        </Link>
      </Router>
    );

    //* Assert
    const testLink = getByTestId('test-link');

    expect(testLink.getAttribute('href')).toBe('/test');

    // Snapshot test
    expect(testLink).toMatchSnapshot();

    // Color test
    expect(testLink).toHaveStyleRule('--txtColor', '#000');
    expect(testLink).toHaveStyleRule('color', 'var(--txtColor)');

    // Hover test
    expect(testLink).toHaveStyleRule('--txtColor', '#ee4266', {
      modifier: ':hover'
    });
  });
});
