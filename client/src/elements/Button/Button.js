import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

/*
    @desc Button component.
        Add optional dark prop for dark button, default is light.
*/

const Button = ({ children, dark, ...rest }) => (
  <button className={`btn${dark ? '--dark' : ''}`} {...rest}>
    {children}
  </button>
);

export default Button;

Button.propTypes = {
  children: PropTypes.any.isRequired,
  dark: PropTypes.bool,
  rest: PropTypes.any
};
