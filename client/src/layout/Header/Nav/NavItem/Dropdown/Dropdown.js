import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { red, lightGrey, transition, spacing } from 'utils';
import ToggleButton from './ToggleButton';

const Dropdown = ({ options }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

  return (
    <>
      <ToggleButton toggle={toggleMenu} menuIsOpen={menuIsOpen} />
      <List toggle={menuIsOpen} data-testid='dropdown'>
        {options.map(item => (
          <Option key={item.link} data-testid='dropdownOption'>
            <Link to={item.link} data-testid='navItemLink'>
              {item.name}
            </Link>
          </Option>
        ))}
      </List>
    </>
  );
};

export default Dropdown;

const List = styled.ul`
  color: ${lightGrey};
  font-size: 70%;
  list-style: none;
  transform: scaleY(${props => (props.toggle ? 1 : 0)});
`;

const Option = styled.li`
  padding: ${spacing.sm};
`;

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
