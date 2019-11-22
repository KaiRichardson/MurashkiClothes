import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';

const Nav = () => {
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
      <NavList>
        {items.map(item => (
          <NavItem name={item.name} link={item.link} key={item.name} />
        ))}
      </NavList>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.nav``;

const NavList = styled.ul``;
