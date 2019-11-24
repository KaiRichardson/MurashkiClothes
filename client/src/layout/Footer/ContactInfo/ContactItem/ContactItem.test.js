import React from 'react';
import { render } from '@testing-library/react';

import ContactItem from './ContactItem';

describe('<ContactItem /> tests', () => {
  it('renders a single contact item', () => {
    //* Arrange
    const testData = {
      value: 'test',
      icon: 'testIcon',
      link: 'https://secord.io'
    };

    //* Act
    const { getByTestId } = render(<ContactItem {...testData} />);

    //* Assert
    const icon = getByTestId('contactItemIcon');
    const link = getByTestId('contactItemLink');
    const value = getByTestId('contactItemValue');

    expect(icon.classList[icon.classList.length - 1]).toBe(testData.icon);
    expect(link.getAttribute('href')).toBe(testData.link);
    expect(value.textContent).toBe(testData.value);
    expect(link.getAttribute('target')).toBe('_blank');
  });
});
