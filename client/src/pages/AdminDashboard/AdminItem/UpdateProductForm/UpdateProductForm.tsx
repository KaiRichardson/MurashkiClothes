import React from 'react';
import { Formik, Field } from 'formik';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ProductCategories, AddProduct, UpdateProduct, Product, PrintfulProduct } from 'Store';
import { spacing } from 'utils';
import { Button, Form as F, Input, RadioGroup } from 'elements';

interface Props {
  product: Product | PrintfulProduct;
  saveFunction: (arg0: any) => AddProduct | UpdateProduct;
}

const UpdateProductForm: React.FC<Props> = ({ saveFunction, product }) => {
  const productCategories: ProductCategories[] = ['men', 'women', 'children'];

  return (
    <Formik
      //@ts-ignore
      initialValues={{ price: product.price || 0, category: product.category || undefined }}
      validate={values => {
        const errors: any = {};

        if (values.price <= 0) {
          errors.price = 'Price must be higher than $0';
        }

        if (!productCategories.includes(values.category)) {
          errors.category = 'Please select a category';
        }

        return errors;
      }}
      onSubmit={data => {
        saveFunction({ product, price: data.price, category: data.category });
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <Form onSubmit={handleSubmit}>
          <Field as={Input} name='price' type='number' errorText={errors.price} touched={touched.price} required />

          <RadioGroup
            name='category'
            errorText={errors.category}
            touched={touched.category}
            options={productCategories}
          />

          <Button dark type='submit'>
            Approve Changes
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default UpdateProductForm;

const Form = styled(F)`
  grid-area: form;

  display: grid;
  grid-gap: ${spacing.sm};
  align-content: center;
  align-items: flex-end;

  @media screen and (min-width: 992px) {
    grid-auto-flow: column;
  }
`;

UpdateProductForm.propTypes = {
  saveFunction: PropTypes.func.isRequired,
  product: PropTypes.any
};
