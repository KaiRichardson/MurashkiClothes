import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { spacing, black, lightGrey, red } from 'utils';

interface Props {
  name: string;
  value: string;
  onChange: any;
  type?: string;
  label?: string;
  placeholder?: string;
  icon?: string;
  required?: boolean;
}
export const Input: React.FC<Props> = ({
  name,
  type = 'text',
  label = name,
  placeholder = name,
  icon,
  value,
  onChange,
  required
}) => {
  return (
    <FormGroup hasIcon={icon !== undefined}>
      <FormLabel htmlFor={name}>{label}</FormLabel>

      {type === 'textarea' ? (
        <TextArea name={name} placeholder={placeholder} value={value} onChange={onChange} required={required} />
      ) : (
        <FormInput
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          data-testid={`${name}Input`}
        />
      )}

      {icon && <FormIcon className={icon} />}
    </FormGroup>
  );
};

const FormGroup = styled.div<{ hasIcon: boolean }>`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: ${props => (props.hasIcon ? 'max-content 1fr' : '1fr')};
  grid-template-areas: ${props => (props.hasIcon ? "'icon label' 'icon input'" : "'label' 'input'")};
  justify-content: center;
  align-items: center;
  grid-gap: ${spacing.sm};
  grid-column-gap: ${spacing.lg};
`;

const FormLabel = styled.label`
  grid-area: label;
  text-transform: capitalize;
  font-size: 1.2rem;
`;

const FormInput = styled.input`
  grid-area: input;
  padding: ${spacing.xs} ${spacing.sm};
  border: 1px solid ${lightGrey};
  color: ${black};

  &:focus {
    outline-color: ${red};
  }
`;

const TextArea = styled.textarea`
  grid-area: input;
  padding: ${spacing.sm} ${spacing.md};
  border: none;
  color: ${black};
  resize: none;
`;

const FormIcon = styled.i`
  grid-area: icon;
  font-size: 2rem;
  color: ${red};
`;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.any.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  required: PropTypes.bool
};
