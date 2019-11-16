import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

/*
    @desc Button component.
        Add .dark for dark button, default is light.
*/

const Button = ({ children, className }) => <button className={`btn ${className}`}>{children}</button>;

export default Button;

Button.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
};
