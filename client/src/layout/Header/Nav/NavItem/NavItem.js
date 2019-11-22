import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { red, grey } from 'utils';
import Dropdown from './Dropdown';

const NavItem = ({ name, link, dropdownOptions }) => (
  <Item>
    {link === '/' ? (
      <Link exact to={link} data-testid={`navItemLink`}>
        {name}
      </Link>
    ) : dropdownOptions ? (
      <>
        <Link to={link} data-testid={`navItemLink`}>
          {name}
        </Link>
        <Dropdown options={dropdownOptions} />
      </>
    ) : (
      <Link to={link} data-testid={`navItemLink`}>
        {name}
      </Link>
    )}
  </Item>
);

export default NavItem;

const Item = styled.li`
  color: ${grey};
  text-align: center;
  letter-spacing: 2px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  &.active {
    color: ${red};
  }
`;
