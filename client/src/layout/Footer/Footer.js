import React from 'react';
import styled from 'styled-components';

import { Container } from '../Container';

const Footer = () => <Wrapper>footer</Wrapper>;

export default Footer;

const Wrapper = styled(Container).attrs({ as: 'footer' })`
  margin-top: auto;
`;
