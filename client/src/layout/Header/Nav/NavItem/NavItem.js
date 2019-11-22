import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = ({ name, link, dropdownOptions }) => (
  <Item>
    {link === '/' ? (
      <Link exact to={link} data-testid={`${name}-link`}>
        {name}
      </Link>
    ) : (
      <Link to={link} data-testid={`${name}-link`}>
        {name}
      </Link>
    )}
  </Item>
);

export default NavItem;

const Item = styled.li``;

const Link = styled(NavLink)``;
