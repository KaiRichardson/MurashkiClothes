import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { red, grey, transition, spacing } from 'utils';
import Dropdown from './Dropdown';

interface Props {
  name: string;
  link: string;
  dropdownOptions?: { name: string; link: string }[];
}

const NavItem: React.FC<Props> = ({ name, link, dropdownOptions }) => (
  <Item>
    <Link exact={link === '/'} to={link} data-testid={'navItemLink'}>
      {name}
    </Link>

    {dropdownOptions && <Dropdown options={dropdownOptions} />}
  </Item>
);

export default NavItem;

const Item = styled.li`
  color: ${grey};
  text-align: center;
  letter-spacing: 2px;
  position: relative;
  align-self: center;
  padding: ${spacing.sm} ${spacing.lg};
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
NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  dropdownOptions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  )
};
