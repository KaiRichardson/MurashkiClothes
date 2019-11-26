import React from 'react';
import styled from 'styled-components';

import { Title3 } from 'elements';
import { spacing } from 'utils';

interface Props {}

const CurrentPromo: React.FC<Props> = () => (
  <Wrapper>
    <Title>Featured Style</Title>
    <Img src='https://via.placeholder.com/300' alt='promo image' />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quibusdam illo vero cum facere facilis minima
      dolores architecto eveniet illum.
    </p>
  </Wrapper>
);

export default CurrentPromo;

const Wrapper = styled.section`
  grid-area: CurrentPromo;
`;

const Title = styled(Title3)`
  margin-bottom: ${spacing.sm};
`;

const Img = styled.img`
  width: 100%;
  margin: ${spacing.sm} 0;
`;
