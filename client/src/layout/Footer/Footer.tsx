import React from 'react';
import styled from 'styled-components';

import { spacing } from 'utils';
import { Container } from '../Container';
import ContactInfo from './ContactInfo';
import CurrentPromo from './CurrentPromo';
import NewsLetterSignUp from './NewsLetterSignUp';
import QuickLinks from './QuickLinks';

interface Props {}

const Footer: React.FC<Props> = () => (
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
  grid-gap: ${spacing.lg};
  padding-top: ${spacing.lg};
  padding-bottom: ${spacing.lg};

  @media screen and (min-width: 768px) {
    grid-template-rows: max-content 1fr;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'CurrentPromo ContactInfo'
      'QuickLinks NewsLetterSignUp';
  }

  @media screen and (min-width: 992px) {
    grid-template-rows: max-content 1fr;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      'CurrentPromo QuickLinks ContactInfo'
      'CurrentPromo QuickLinks NewsLetterSignUp';
  }
`;
