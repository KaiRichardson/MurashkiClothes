import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { spacing } from 'utils';
import { Link as L } from 'elements';

interface Props {
  value: string;
  icon: string;
  link: string;
}

const ContactItem: React.FC<Props> = ({ value, icon, link }) => (
  <Item>
    <Link href={link} target='_blank' data-testid='contactItemLink'>
      <Icon className={icon} data-testid='contactItemIcon' />
      <Value data-testid='contactItemValue'>{value}</Value>
    </Link>
  </Item>
);

export default ContactItem;

const Item = styled.li`
  margin: ${spacing.md} 0;
`;

const Link = styled(L).attrs({ ext: true })`
  display: grid;
  grid-template-columns: 16px 1fr;
  grid-gap: ${spacing.sm};
  align-items: center;
  justify-content: center;
`;

const Icon = styled.i`
  text-align: center;
`;

const Value = styled.span``;

ContactItem.propTypes = {
  value: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
