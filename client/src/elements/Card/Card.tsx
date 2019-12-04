import styled from 'styled-components';

import { spacing, elevation, white } from 'utils';

export const Card = styled.section`
  ${elevation[2]};
  padding: ${spacing.lg};
  margin: auto;
  min-width: 100%;
  background: ${white};
`;
