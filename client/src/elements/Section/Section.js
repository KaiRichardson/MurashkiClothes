import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { red, spacing } from 'utils';

const Section = ({ title, titleTag = 'h2', children }) => (
  <Wrapper data-testid='section'>
    {title && (
      <Title as={titleTag} data-testid='sectionTitle'>
        {title}
      </Title>
    )}
    {children}
  </Wrapper>
);

export default Section;

const Wrapper = styled.section`
  margin-bottom: ${spacing.xxl};
`;

const Title = styled.h2`
  border-left: 4px solid ${red};
  padding-left: ${spacing.md};
  text-transform: uppercase;
`;

Section.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  titleTag: PropTypes.string,
  children: PropTypes.any
};
