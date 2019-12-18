import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { spacing, black, lightGrey, red } from 'utils';

type Props = {
  name: string;
  value: any;
  onChange: any;
  onBlur: any;
  type?: string;
  errorText?: string;
  touched?: boolean;
  placeholder?: string;
  label?: string;
  icon?: string;
  required?: boolean;
};
export const Input: React.FC<Props> = ({
  type = 'text',
  errorText,
  touched,
  name,
  value,
  onChange,
  onBlur,
  label,
  placeholder,
  icon,
  required
}) => {
  return (
    <FormGroup hasIcon={icon !== undefined}>
      <FormLabel htmlFor={name}>{label || name}</FormLabel>

      {type === 'textarea' ? (
        <TextArea
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          required={required}
          data-testid={`${name}Input`}
        />
      ) : (
        <FormInput
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          placeholder={placeholder}
          required={required}
          data-testid={`${name}Input`}
        />
      )}
      {errorText && touched && <HelperText>{errorText}</HelperText>}

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

const HelperText = styled.p`
  color: ${red};
  font-weight: bolder;
`;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.any.isRequired,
  onBlur: PropTypes.any.isRequired,
  type: PropTypes.string,
  errorText: PropTypes.string,
  touched: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  required: PropTypes.bool
};
