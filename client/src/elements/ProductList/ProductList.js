import styled from 'styled-components';

import { spacing } from 'utils';

export const ProductList = styled.section`
  --gap: ${spacing.lg};

  padding: var(--gap) 0;
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-gap: var(--gap);

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
