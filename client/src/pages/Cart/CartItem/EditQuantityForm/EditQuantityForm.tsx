import React from 'react';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';

import { useUserActions } from 'hooks';
import { Form, Input, Button } from 'elements';

interface Props {
  currentQuantity: number;
  variant_id: number;
}

const EditQuantityForm: React.FC<Props> = ({ currentQuantity, variant_id }) => {
  const { updateCartItemQuantity } = useUserActions();

  return (
    <Formik
      initialValues={{ quantity: currentQuantity }}
      validate={values => {
        const errors: any = {};

        if (values.quantity <= 0) {
          errors.quantity = 'Please select a number greater than 0';
        }

        return errors;
      }}
      onSubmit={({ quantity: newQuantity }) => {
        updateCartItemQuantity({ newQuantity, variant_id });
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <Form onSubmit={handleSubmit}>
          <Field as={Input} name='quantity' type='number' errorText={errors.quantity} touched={touched.quantity} />

          <Button dark type='submit'>
            Update Quantity
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default EditQuantityForm;

EditQuantityForm.propTypes = {
  currentQuantity: PropTypes.number.isRequired,
  variant_id: PropTypes.number.isRequired
};
