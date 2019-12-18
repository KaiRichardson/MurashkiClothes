import React from 'react';
import styled from 'styled-components';

import { useForm } from 'hooks';
import { Form, Button as B, FormGroup } from 'elements';

interface Props {}

const NewsLetterForm: React.FC<Props> = () => {
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
        <input type='email' name='email' value={values.email} onChange={handleChange} placeholder='Enter your email' />
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
