import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useExternalClick } from 'hooks';
import { red, lightGrey, transition, spacing, absolute, white } from 'utils';
import ToggleButton from './ToggleButton';

interface Props {
  options: { name: string; link: string }[];
}

const Dropdown: React.FC<Props> = ({ options }) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const currentPage = useRef<any>();
  useEffect(() => {
    if (currentPage.current !== location) {
      setMenuIsOpen(false);
      currentPage.current = location;
    }
  }, [location]);

  const { internalref, externalRef } = useExternalClick(() => setMenuIsOpen(false));

  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

  return (
    <>
      <ToggleButton ref={externalRef} toggle={toggleMenu} menuIsOpen={menuIsOpen} />
      <List ref={internalref} toggle={menuIsOpen} data-testid='dropdown'>
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

const List = styled.ul<{ toggle: boolean }>`
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

//@ts-ignore
Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ).isRequired
};
