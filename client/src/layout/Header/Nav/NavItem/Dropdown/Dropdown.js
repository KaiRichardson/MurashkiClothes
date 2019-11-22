import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { red, lightGrey, transition } from 'utils';

const Dropdown = ({ options }) => (
  <List data-testid='dropdown'>
    {options.map(item => (
      <Option key={item.link} data-testid='dropdownOption'>
        <Link to={item.link} data-testid='navItemLink'>
          {item.name}
        </Link>
      </Option>
    ))}
  </List>
);

export default Dropdown;

const List = styled.ul`
  color: ${lightGrey};
  font-size: 70%;
`;

const Option = styled.li``;

const Link = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  ${transition({ prop: 'color' })};

  &:hover {
    color: ${red};
  }

  &.active {
    color: ${red};
  }
`;
