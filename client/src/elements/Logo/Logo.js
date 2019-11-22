import React from 'react';
import { Link as L } from 'react-router-dom';
import styled from 'styled-components';

import { spacing, black } from 'utils';

const Logo = () => (
  <Wrapper>
    <Link to='/'>murashki</Link>
  </Wrapper>
);

export default Logo;

const Wrapper = styled.h1`
  font-weight: normal;
  margin: 0;
`;

const Link = styled(L)`
  text-transform: uppercase;
  letter-spacing: ${spacing.sm};
  font-size: 20px;
  padding: 0 ${spacing.sm};
  color: ${black};
  border: 2px solid ${black};
  text-decoration: none;
`;
