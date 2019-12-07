import React from 'react';
import styled from 'styled-components';
import { red, lightGrey, spacing } from 'utils';

interface Props {}

const LoadingSpinner: React.FC<Props> = () => {
  const iconStyle = {
    '--fa-primary-color': red,
    '--fa-secondary-color': lightGrey,
    '--fa-secondary-opacity': 1
  } as React.CSSProperties;
  return (
    <Wrapper>
      <Spinner style={iconStyle} />
    </Wrapper>
  );
};

export default LoadingSpinner;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${spacing.xxl};
`;

const Spinner = styled.i.attrs({ className: 'fad fa-spinner fa-spin' })`
  font-size: 5rem;
`;
