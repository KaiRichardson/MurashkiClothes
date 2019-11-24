import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { spacing } from 'utils';
import { Title2 } from '../Title';

const Section = ({ title, titleTag = 'h2', children }) => (
  <Wrapper data-testid='section'>
    {title && (
      <Title2 as={titleTag} data-testid='sectionTitle'>
        {title}
      </Title2>
    )}
    {children}
  </Wrapper>
);

export default Section;

const Wrapper = styled.section`
  margin-bottom: ${spacing.xxl};
`;

Section.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  titleTag: PropTypes.string,
  children: PropTypes.any
};
