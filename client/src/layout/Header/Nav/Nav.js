import React, { useContext } from 'react';
import styled from 'styled-components';

import { MobileNavContext } from '../MobileNav.context';
import { absolute, red, fadeIn, fadeOut, lightGrey, white } from 'utils';
import NavItem from './NavItem';

const Nav = () => {
  const { navIsOpen } = useContext(MobileNavContext);

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
      <NavList toggle={navIsOpen}>
        {items.map(item => (
          <NavItem name={item.name} link={item.link} key={item.name} />
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
  background: ${white};
  visibility: ${props => (props.toggle ? 'visable' : 'hidden')};
  animation: 100ms linear ${props => (props.toggle ? fadeIn : fadeOut)};
  list-style: none;
  z-index: 2;

  ${props => (props.toggle ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'initial'))}

  @media screen and (min-width: 768px) {
    visibility: initial;
    height: initial;
    flex-direction: row;
    justify-content: center;
    position: initial;
    background: initial;
  }
`;
