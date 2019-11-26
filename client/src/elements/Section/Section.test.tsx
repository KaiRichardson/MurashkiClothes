import React from 'react';
import { render } from '@testing-library/react';

import Section from './Section';

describe('<Section /> tests', () => {
  it('renders a section with no title', () => {
    //* Act
    const { getByTestId } = render(
      <Section>
        <p>test section paragraph</p>
      </Section>
    );

    //* Assert
    const testSection = getByTestId('section');
    if (testSection.firstElementChild) {
      expect(testSection.firstElementChild.tagName).not.toBe('H2');
    }
  });

  it('renders a section with a string title', () => {
    //* Arrange
    const testTitle = 'test title';

    //* Act
    const { getByTestId } = render(
      <Section title={testTitle}>
        <p>test section paragraph</p>
      </Section>
    );

    //* Assert
    const testSection = getByTestId('section');
    if (testSection.firstElementChild) {
      expect(testSection.firstElementChild.tagName).toBe('H2');
    }
  });

  it('renders a section with a JSX Element title', () => {
    //* Arrange
    const testTitle = <>test title</>;

    //* Act
    const { getByTestId } = render(
      <Section title={testTitle}>
        <p>test section paragraph</p>
      </Section>
    );

    //* Assert
    const testSection = getByTestId('section');

    if (testSection.firstElementChild) {
      expect(testSection.firstElementChild.tagName).toBe('H2');
    }
  });
});
