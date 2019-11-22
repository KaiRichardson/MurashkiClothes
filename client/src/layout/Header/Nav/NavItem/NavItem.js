import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { MobileNavContext } from '../../MobileNav.context';
import { red, grey } from 'utils';

const NavItem = ({ name, link, dropdownOptions }) => {
  const { toggleNavIsOpen } = useContext(MobileNavContext);
  return (
    <Item>
      {link === '/' ? (
        <Link exact to={link} onClick={toggleNavIsOpen} data-testid={`${name}-link`}>
          {name}
        </Link>
      ) : (
        <Link to={link} onClick={toggleNavIsOpen} data-testid={`${name}-link`}>
          {name}
        </Link>
      )}
    </Item>
  );
};

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
