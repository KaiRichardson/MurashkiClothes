import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { red, spacing } from 'utils';

const Section = ({ title, children }) => (
  <Wrapper data-testid='section'>
    {title && <Title data-testid='sectionTitle'>{title}</Title>}
    {children}
  </Wrapper>
);

export default Section;

const Wrapper = styled.section`
  margin-bottom: ${spacing.xxl};
`;

const Title = styled.h2`
  border-left: 4px solid ${red};
  padding-left: ${spacing.lg};
  text-transform: uppercase;
`;

Section.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.element
};
