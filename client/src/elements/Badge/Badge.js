import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { white, red } from 'utils';

const Badge = ({ number }) => <Dot data-testid='badge'>{number <= 10 ? number : '10+'}</Dot>;

export default Badge;

const Dot = styled.span`
  position: absolute;
  top: 0;
  right: -10px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  border-radius: 50%;
  text-align: center;
  color: ${white};
  background: ${red};
`;

Badge.propTypes = {
  number: PropTypes.number.isRequired
};
