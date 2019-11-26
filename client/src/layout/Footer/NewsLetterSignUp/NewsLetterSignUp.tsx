import React from 'react';
import styled from 'styled-components';

import { spacing } from 'utils';
import { Title3 } from 'elements';
import NewsLetterForm from './NewsLetterForm';

interface Props {}

const NewsLetterSignUp: React.FC<Props> = () => (
  <Wrapper>
    <Title>Sign up for our news letter</Title>
    <NewsLetterForm />
  </Wrapper>
);

export default NewsLetterSignUp;

const Wrapper = styled.section`
  grid-area: NewsLetterSignUp;
`;

const Title = styled(Title3)`
  margin-bottom: ${spacing.md};
`;
