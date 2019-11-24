import styled from 'styled-components';

import { spacing, lightGrey } from 'utils';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: ${spacing.xs} ${spacing.sm};
  border: 1px solid ${lightGrey};
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
