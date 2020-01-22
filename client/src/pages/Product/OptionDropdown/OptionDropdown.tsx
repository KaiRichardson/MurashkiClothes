import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  name: string;
  options: string[];
  handleChange: (prop: string, updatedValue: string) => void;
}

const OptionDropdown: React.FC<Props> = ({ name, options, handleChange }) => (
  <div>
    <label htmlFor={`${name}-dropdown`}>{name}</label>
    <select
      defaultValue='default'
      onChange={e => handleChange(name, e.target.value)}
      name={`${name}-dropdown`}
      id={`${name}-dropdown`}
    >
      <option disabled value='default'>
        Please select a {name}
      </option>
      {options.map(item => (
        <option value={item} key={name + '-' + item}>
          {item}
        </option>
      ))}
    </select>
  </div>
);

export default OptionDropdown;

OptionDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleChange: PropTypes.func.isRequired
};
