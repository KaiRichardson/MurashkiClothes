import React, { useContext, useRef } from 'react';
import styled from 'styled-components';

import { MobileNavContext } from '../MobileNav.context';
import { useEventListener } from 'hooks';
import { absolute, fadeIn, fadeOut, white } from 'utils';
import NavItem from './NavItem';

const Nav = () => {
  const { navIsOpen, toggleNavIsOpen } = useContext(MobileNavContext);

  const navListRef = useRef();
  const handleNavItemClick = e => {
    if (e.target.dataset['testid'] !== 'navItemLink') return;

    toggleNavIsOpen();
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
      <NavList ref={navListRef} toggle={navIsOpen}>
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

const NavList = styled.ul`
  ${absolute({})}
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  visibility: ${props => (props.toggle ? 'visable' : 'hidden')};
  animation: 100ms linear ${props => (props.toggle ? fadeIn : fadeOut)};
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

  ${props => (props.toggle ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'initial'))};
`;
