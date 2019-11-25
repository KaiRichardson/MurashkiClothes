import styled from 'styled-components';

import { red, spacing } from 'utils';

export const Title2 = styled.h2`
  border-left: 4px solid ${red};
  padding-left: ${spacing.md};
  text-transform: uppercase;
`;

export const Title3 = styled(Title2).attrs({ as: 'h3' })`
  border-left-width: 3px;
`;

export const Title4 = styled(Title2).attrs({ as: 'h4' })`
  border-left-width: 2px;
`;

export const Title5 = styled(Title2).attrs({ as: 'h5' })`
  border-left-width: 2px;
`;

export const Title6 = styled(Title2).attrs({ as: 'h6' })`
  border-left-width: 2px;
`;
