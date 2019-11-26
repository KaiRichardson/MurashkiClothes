import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { white, red } from 'utils';

interface Props {
  number: number;
}

const Badge: React.FC<Props> = ({ number }) => <Dot data-testid='badge'>{number <= 10 ? number : '10+'}</Dot>;

export default Badge;

const Dot = styled.span`
  position: absolute;
  top: -10px;
  right: -5px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  border-radius: 50%;
  text-align: center;
  color: ${white};
  background: ${red};

  @media screen and (min-width: 992px) {
    top: -5px;
  }
`;

Badge.propTypes = {
  number: PropTypes.number.isRequired
};
