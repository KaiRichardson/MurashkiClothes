import React from 'react';
import styled from 'styled-components';

import { Container } from '../Container';
import ContactInfo from './ContactInfo';
import CurrentPromo from './CurrentPromo';
import NewsLetterSignUp from './NewsLetterSignUp';
import QuickLinks from './QuickLinks';

const Footer = () => (
  <Wrapper>
    <CurrentPromo />
    <QuickLinks />
    <ContactInfo />
    <NewsLetterSignUp />
  </Wrapper>
);

export default Footer;

const Wrapper = styled(Container).attrs({ as: 'footer' })`
  margin-top: auto;
  display: grid;
  grid-template-rows: repeat(4, max-content);
  grid-template-areas:
    'CurrentPromo'
    'QuickLinks'
    'ContactInfo'
    'NewsLetterSignUp';

  @media screen and (min-width: 992px) {
    grid-template-rows: max-content 1fr;
    grid-template-columns: repeat(3 1fr);
    grid-template-areas:
      'CurrentPromo QuickLinks ContactInfo'
      'CurrentPromo QuickLinks NewsLetterSignUp';
  }
`;
