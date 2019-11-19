import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { spacing, transition, white, black, grey } from 'utils';

/*
    @desc Button component.
        Add optional dark prop for dark button, default is light.
*/

export const Button = styled.button`
  --bg: ${white};
  --txtColor: ${black};

  cursor: pointer;
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

export const ButtonLink = styled(({ dark, ...rest }) => <Link {...rest} />)`
  /* Default Button */
  --bg: ${white};
  --txtColor: ${black};

  background: var(--bg);
  color: var(--txtColor);

  border: none;
  text-decoration: none;
  ${transition({})};
  cursor: pointer;
  padding: ${spacing.sm} ${spacing.md};

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

ButtonLink.propTypes = {
  dark: PropTypes.bool
};
