import styled from 'styled-components';
import { red, absolute, transition } from 'utils';

export const Background = styled.div<{ colorOnLeft: boolean }>`
  clip-path: ${props =>
    props.colorOnLeft
      ? 'polygon(0 0, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 98%, 0 97%)'
      : 'polygon(0 100%, 100% 0, 100% 76%, 100% 100%, 90% 100%, 0 100%, 0 100%, 0 100%)'};
  background: ${red};
  min-height: 100vh;
  width: 100%;
  ${absolute({})};
  ${transition({ prop: 'clip-path' })};
`;
