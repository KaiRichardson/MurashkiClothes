import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { red, lightGrey, transition, spacing, absolute, white } from 'utils';
import ToggleButton from './ToggleButton';

const Dropdown = ({ options }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const location = useLocation();

  const currentPage = useRef();
  useEffect(() => {
    if (currentPage.current !== location) {
      setMenuIsOpen(false);
      currentPage.current = location;
    }
  }, [location]);
  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

  return (
    <>
      <ToggleButton toggle={toggleMenu} menuIsOpen={menuIsOpen} />
      <List toggle={menuIsOpen} data-testid='dropdown'>
        {options.map(item => (
          <Option key={item.link} data-testid='dropdownOption'>
            <Link to={item.link} data-testid='navItemLink' onClick={toggleMenu}>
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
  transform-origin: top;
  ${transition({ prop: 'transform' })};

  @media screen and (min-width: 768px) {
    ${absolute({})};
    top: 3rem;
    background: ${white};
    padding: ${spacing.md};
    border-top: 2px solid ${red};
  }
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

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ).isRequired
};
