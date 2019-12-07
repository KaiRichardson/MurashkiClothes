import React from 'react';
import { Formik } from 'formik';

import { useUser } from 'hooks';
import { Input, Form, Button, LoadingSpinner } from 'elements';

interface Props {}

const RegisterUserForm: React.FC<Props> = () => {
  const { loginIsLoading } = useUser();
  const handleFormSubmission = () => {};

  const fields: {
    name: 'username' | 'email' | 'password' | 'passwordConfirm';
    icon: string;
    placeholder: string;
    label?: string;
  }[] = [
    {
      name: 'username',
      icon: 'fas fa-user',
      placeholder: 'Enter your desired username'
    },
    {
      name: 'email',
      icon: 'fas fa-envelope',
      placeholder: 'Enter your email'
    },
    {
      name: 'password',
      icon: 'fas fa-lock-alt',
      placeholder: 'Enter your password'
    },
    {
      name: 'passwordConfirm',
      icon: 'fas fa-lock-alt',
      placeholder: 'Please reenter your password',
      label: 'Confirm Password'
    }
  ];

  return (
    <>
      {loginIsLoading ? (
        <LoadingSpinner />
      ) : (
        <Formik
          initialValues={{ username: '', email: '', password: '', passwordConfirm: '' }}
          onSubmit={handleFormSubmission}
        >
          {({ values, handleChange, handleSubmit }) => (
            <Form
              onSubmit={e => {
                e.preventDefault();
              }}
            >
              {fields.map(field => (
                <Input
                  name={field.name}
                  value={values[field.name]}
                  placeholder={field.placeholder}
                  label={field.label}
                  icon={field.icon}
                  onChange={handleChange}
                  key={field.name}
                />
              ))}

              <Button dark type='submit' data-testid='submitButton'>
                Register Account
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default RegisterUserForm;
