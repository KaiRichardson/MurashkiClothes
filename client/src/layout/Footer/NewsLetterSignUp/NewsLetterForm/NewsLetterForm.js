import React from 'react';
import styled from 'styled-components';

import { useForm } from 'hooks';
import { Form, Input, Button as B, FormGroup } from 'elements';

const NewsLetterForm = () => {
  const { values, handleChange, resetForm } = useForm({ email: '' });

  const handleSubmit = () => {
    // TODO: add email to newsletter

    resetForm();
  };

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();

        handleSubmit();
      }}
    >
      <FormGroup>
        <Input type='email' name='email' value={values.email} onChange={handleChange} placeholder='Enter your email' />
        <Button dark type='submit'>
          Sign Up
        </Button>
      </FormGroup>
    </Form>
  );
};

export default NewsLetterForm;

const Button = styled(B)`
  white-space: nowrap;
`;
