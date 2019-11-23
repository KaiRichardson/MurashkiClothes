import React, { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { spacing, grey, transition } from 'utils';
import { Button as B } from 'elements';

const ToggleButton = ({ toggle, menuIsOpen }, ref) => (
  <Button ref={ref} onClick={toggle} data-testid='toggleButton'>
    <Arrow toggle={menuIsOpen} />
  </Button>
);

export default forwardRef(ToggleButton);

const Button = styled(B).attrs({ trans: true })`
  padding: ${spacing.sm} ${spacing.xs};
`;

const Arrow = styled.i.attrs({ className: 'far fa-chevron-down' })`
  font-size: 60%;
  color: ${grey};
  ${props => (props.toggle ? 'transform: rotate(-180deg);' : 'transform: rotate(0deg);')}
  ${transition({ prop: 'transform' })};
`;

ToggleButton.propTypes = {
  toggle: PropTypes.func.isRequired,
  menuIsOpen: PropTypes.bool.isRequired
};
