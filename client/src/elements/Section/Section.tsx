import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { spacing } from 'utils';
import { Title2 } from '../Title';

interface Props {
  title?: any;
  titleTag?: any;
  children: any;
}

const Section: React.FC<Props> = ({ title, titleTag = 'h2', children }) => (
  <Wrapper data-testid='section'>
    {title && (
      <Title2 as={titleTag} data-testid='sectionTitle' style={{ marginBottom: spacing.md }}>
        {title}
      </Title2>
    )}
    <InnerWrapper>{children}</InnerWrapper>
  </Wrapper>
);

export default Section;

const Wrapper = styled.section`
  margin-bottom: ${spacing.xxl};
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

Section.propTypes = {
  title: PropTypes.any,
  titleTag: PropTypes.string,
  children: PropTypes.any
};
