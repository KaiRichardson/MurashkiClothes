import styled from 'styled-components';
import { Link as L } from 'react-router-dom';

import { black, red, transition, lightGrey } from 'utils';

export const Link = styled(L)`
  --txtColor: ${black};

  ${transition({ prop: 'color' })};
  text-decoration: none;

  color: var(--txtColor);

  &:hover {
    --txtColor: ${red};
  }
`;

export const LinkDark = styled(L)`
  --txtColor: ${lightGrey};

  ${transition({ prop: 'color' })};
  text-decoration: none;

  color: var(--txtColor);

  &:hover {
    --txtColor: ${black};
  }
`;
