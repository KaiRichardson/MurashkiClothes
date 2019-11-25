import React from 'react';
import styled from 'styled-components';

import { MobileNavContextProvider } from './MobileNav.context';
import { spacing } from 'utils';
import { Logo } from 'elements';
import { Container } from 'layout/Container';
import Nav from './Nav';
import Buttons from './Buttons';

interface Props {}

const Header: React.FC<Props> = () => (
  <Wrapper>
    <Logo />

    <MobileNavContextProvider>
      <Nav />

      <Buttons />
    </MobileNavContextProvider>
  </Wrapper>
);

export default Header;

const Wrapper = styled(Container).attrs({ as: 'header' })`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.lg} ${spacing.sm};
`;
