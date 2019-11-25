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
  title: PropTypes.any,
  titleTag: PropTypes.string,
  children: PropTypes.any
};
