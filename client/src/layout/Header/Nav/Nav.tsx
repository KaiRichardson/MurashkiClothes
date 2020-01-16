import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import { MobileNavContext } from '../MobileNav.context';
import { useEventListener } from 'hooks';
import { absolute, white } from 'utils';
import NavItem from './NavItem';

interface Props {}

const Nav: React.FC<Props> = () => {
  const { navIsOpen, toggleNavIsOpen } = useContext(MobileNavContext);
  const navAnimation = useSpring({
    opacity: window.innerWidth > 768 ? 1 : navIsOpen ? 1 : 0,
    transform: `translateY(${window.innerWidth > 768 ? 'initial' : navIsOpen ? 0 : '-100%'})`
  });

  const navListRef = useRef<any>();
  const handleNavItemClick = (e: any) => {
    if (e.target.dataset['testid'] !== 'navItemLink') return;

    if (navIsOpen) toggleNavIsOpen();
  };
  useEventListener('click', handleNavItemClick, navListRef.current);

  const items = [
    {
      name: 'home',
      link: '/'
    },
    {
      name: 'shop',
      link: '/shop',
      dropdownOptions: [
        {
          name: 'men',
          link: '/shop/men'
        },
        {
          name: 'women',
          link: '/shop/women'
        },
        {
          name: 'children',
          link: '/shop/children'
        }
      ]
    },
    {
      name: 'contact',
      link: '/contact'
    }
  ];

  return (
    <Wrapper>
      <NavList ref={navListRef} style={navAnimation}>
        {items.map(item => (
          <NavItem name={item.name} link={item.link} key={item.name} dropdownOptions={item.dropdownOptions} />
        ))}
      </NavList>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.nav`
  text-transform: uppercase;
`;

const NavList = styled(animated.ul)`
  ${absolute({})}
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  background: ${white};
  z-index: 2;
  list-style: none;

  @media screen and (min-width: 768px) {
    visibility: initial;
    height: initial;
    flex-direction: row;
    justify-content: center;
    position: initial;
    background: initial;
  }
`;
