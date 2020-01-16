import React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useUserActions } from 'hooks';
import { spacing, lightGrey, black } from 'utils';
import { Button } from 'elements';

interface Props {
  currentQuantity: number;
  variant_id: number;
}

const EditQuantityForm: React.FC<Props> = ({ currentQuantity, variant_id }) => {
  const { updateCartItemQuantity, removeCartItem } = useUserActions();

  return (
    <Formik
      initialValues={{ quantity: currentQuantity }}
      validate={values => {
        const errors: any = {};

        if (values.quantity <= 0) {
          removeCartItem(variant_id);
        }

        return errors;
      }}
      onSubmit={({ quantity: newQuantity }) => {
        newQuantity < 1 ? removeCartItem(variant_id) : updateCartItemQuantity({ newQuantity, variant_id });
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, values, setFieldValue }) => (
        <Wrapper>
          <Button
            dark
            type='button'
            onClick={e => {
              setFieldValue('quantity', values.quantity - 1);
              handleSubmit();
            }}
          >
            {values.quantity > 1 ? '-' : <i className='far fa-trash-alt' />}
          </Button>
          <Input
            name='quantity'
            onChange={e => {
              handleChange(e);
              handleSubmit();
            }}
            onBlur={handleBlur}
            type='number'
            value={values.quantity}
          />
          <Button
            dark
            type='button'
            onClick={e => {
              setFieldValue('quantity', values.quantity + 1);
              handleSubmit();
            }}
          >
            +
          </Button>
        </Wrapper>
      )}
    </Formik>
  );
};

export default EditQuantityForm;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  margin: ${spacing.md} 0;
`;

const Input = styled.input`
  padding: ${spacing.xs} ${spacing.sm};
  border: 1px solid ${lightGrey};
  color: ${black};
  max-width: 5rem;
  text-align: center;
  padding-left: ${spacing.md};
`;

EditQuantityForm.propTypes = {
  currentQuantity: PropTypes.number.isRequired,
  variant_id: PropTypes.number.isRequired
};
