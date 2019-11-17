import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { spacing, transition, white, black, grey } from './node_modules/utils';

/*
    @desc Button component.
        Add optional dark prop for dark button, default is light.
*/

export const Button = styled.button`
  --bg: ${white};
  --txtColor: ${black};

  padding: ${spacing.sm} ${spacing.md};

  /* Default Button */
  background: var(--bg);
  color: var(--txtColor);
  border: none;
  ${transition({})};

  &:hover {
    --bg: ${black};
    --txtColor: ${white};
  }

  /* Dark Button */
  ${props =>
    props.dark &&
    css`
      --bg: ${black};
      --txtColor: ${white};

      &:hover {
        --bg: ${grey};
      }
    `}
`;

Button.propTypes = {
  dark: PropTypes.bool
};
