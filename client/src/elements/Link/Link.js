import React from 'react';
import styled, { css } from 'styled-components';
import { Link as L } from 'react-router-dom';
import PropTypes from 'prop-types';

import { black, red, transition, lightGrey } from 'utils';

export const Link = styled(({ dark, light, ...rest }) => <L {...rest} />)`
  --txtColor: ${black};

  ${transition({ prop: 'color' })};
  text-decoration: none;

  /* Default Link */
  color: var(--txtColor);

  &:hover {
    --txtColor: ${red};
  }

  /* Dark Link */
  ${props =>
    props.dark &&
    css`
      --txtColor: ${lightGrey};

      &:hover {
        --txtColor: ${black};
      }
    `}

  /* Light Link */
  ${props =>
    props.light &&
    css`
      --txtColor: ${lightGrey};

      &:hover {
        --txtColor: ${red};
      }
    `}
`;

Link.propTypes = {
  dark: PropTypes.bool
};
