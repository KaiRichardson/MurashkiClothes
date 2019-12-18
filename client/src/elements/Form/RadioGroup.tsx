import React from 'react';
import { Field } from 'formik';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { red, spacing, grey } from 'utils';

interface Props {
  name: string;
  errorText?: any;
  touched?: any;
  options: any[];
}

export const RadioGroup: React.FC<Props> = ({ errorText, touched, options, name }) => (
  <Wrapper>
    <RadioGroupLabel htmlFor={name}>{name}</RadioGroupLabel>
    <Buttons>
      {options.map(o => (
        <RadioItem key={o}>
          <RadioButton name={name} id={o} value={o} label={o} />
          <RadioLabel htmlFor={o}>{o}</RadioLabel>
        </RadioItem>
      ))}
    </Buttons>
    {errorText && touched && <HelperText>{errorText}</HelperText>}
  </Wrapper>
);

export const RadioButton = styled(Field).attrs({ type: 'radio' })`
  appearance: none;
  background: #fff;
  border-radius: 100%;
  border: 1px solid transparent;
  box-shadow: 0 0 0 2px ${red}, inset 0 0 0 0px ${red};
  display: inline-block;
  height: 1.25em;
  margin-right: 0.25em;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  vertical-align: text-bottom;
  width: 1.25em;
  cursor: pointer;

  &:focus {
    border-color: transparent;
    box-shadow: 0 0 0 2px ${red}, inset 0 0 0 0px ${red};
    outline: none;
  }

  &:checked {
    border-color: #fff;
    box-shadow: 0 0 0 2px ${red}, inset 0 0 0 6px ${red};

    &:focus {
      box-shadow: 0 0 0 3px ${red}, inset 0 0 0 3px ${red};
    }
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-gap: ${spacing.sm};
`;

const Buttons = styled.div`
  display: flex;
  /* height value comes from height of <Input /> component */
  height: 28px;
`;

const HelperText = styled.p`
  color: ${red};
  font-weight: bolder;
`;

const RadioItem = styled.article`
  margin-inline-end: ${spacing.md};
  text-transform: capitalize;
  cursor: pointer;
  position: relative;
  display: block;
`;

const RadioLabel = styled.label`
  padding-inline-start: ${spacing.sm};
  cursor: pointer;
  color: ${grey};
`;

const RadioGroupLabel = styled.label`
  text-transform: capitalize;
  font-size: 1.2rem;
`;

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  errorText: PropTypes.string,
  touched: PropTypes.any,
  options: PropTypes.arrayOf(PropTypes.any).isRequired
};
