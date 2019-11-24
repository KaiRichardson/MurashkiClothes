import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { spacing, transition, white, black, grey, lightGrey } from 'utils';

/*
    @desc Button component.
        Add optional dark prop for dark button, default is light.
*/

export const Button = styled.button`
  --bg: ${white};
  --txtColor: ${black};

  cursor: pointer;
  padding: ${spacing.sm} ${spacing.md};
  border: none;
  ${transition({})};

  /* Default Button */
  background: var(--bg);
  color: var(--txtColor);

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

    /* Transparent Button */
    ${props =>
      props.trans &&
      css`
        --txtColor: ${lightGrey};
        --bg: transparent;

        &:hover {
          --txtColor: ${black};
          --bg: transparent;
        }
      `}
`;

export const ButtonLink = styled(({ dark, trans, ...rest }) => <Link {...rest} />)`
  /* Default Button */
  --bg: ${white};
  --txtColor: ${black};

  background: var(--bg);
  color: var(--txtColor);

  display: inline-block;
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

  /* Transparent Button */
  ${props =>
    props.trans &&
    css`
      --txtColor: ${lightGrey};
      --bg: transparent;

      &:hover {
        --txtColor: ${black};
        --bg: transparent;
      }
    `}
`;

Button.propTypes = {
  dark: PropTypes.bool,
  trans: PropTypes.bool
};

ButtonLink.propTypes = {
  dark: PropTypes.bool,
  trans: PropTypes.bool
};
