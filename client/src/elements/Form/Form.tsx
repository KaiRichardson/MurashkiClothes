import styled from 'styled-components';

import { spacing } from 'utils';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  > * {
    margin: ${spacing.sm} 0;
  }
`;

export const FormGroup = styled.div`
  display: flex;

  > input {
    flex: 2;
  }

  > button {
    flex: 1;
  }
`;
