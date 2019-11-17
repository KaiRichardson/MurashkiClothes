import styled from 'styled-components';
import { Link as L } from 'react-router-dom';

import { black, red } from 'utils';

export const Link = styled(L)`
  --txtColor: ${black};

  color: var(--txtColor);

  &:hover {
    --txtColor: ${red};
  }
`;
