import React, { useContext } from 'react';
import styled from 'styled-components';

import { MobileNavContext } from '../../MobileNav.context';
import { lightGrey, transition, red } from 'utils';
import { Button as B } from 'elements';

const ToggleNavButton = () => {
  const { navIsOpen, toggleNavIsOpen } = useContext(MobileNavContext);

  return (
    <Button trans onClick={toggleNavIsOpen} data-testid='hamburgerButton'>
      <Hamburger toggle={navIsOpen} />
    </Button>
  );
};

export default ToggleNavButton;

const Button = styled(B)`
  z-index: 2;
`;

const Hamburger = styled.span`
  display: block;
  position: relative;
  height: 2px;
  width: 1.5rem;
  background: ${props => (props.toggle ? red : lightGrey)};
  ${transition({ prop: 'transform' })};
  transform: rotate(${props => (props.toggle ? '45deg' : '0deg')});

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
    height: 2px;
    width: 1.5rem;
    background: ${props => (props.toggle ? red : lightGrey)};
  }
  &::before {
    transform: translateY(-5px);
    opacity: ${props => (props.toggle ? 0 : 1)};
  }
  &::after {
    ${transition({ prop: 'transform' })};
    transform: translateY(5px);
    transform: rotate(${props => (props.toggle ? '-90deg' : '')});
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
