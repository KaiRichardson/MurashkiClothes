import React from 'react';
import styled from 'styled-components';

import { spacing } from 'utils';
import { Logo } from 'elements';
import { Container } from 'layout/Container';
import Nav from './Nav';
import Buttons from './Buttons';

const Header = () => (
  <Wrapper>
    <Logo />

    <Nav />

    <Buttons />
  </Wrapper>
);

export default Header;

const Wrapper = styled(Container).attrs({ as: 'header' })`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.lg} 0;
`;
