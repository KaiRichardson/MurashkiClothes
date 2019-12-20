import React from 'react';
import { Formik } from 'formik';

import { useUser } from 'hooks';
import { Input, Form, Button, LoadingSpinner } from 'elements';

interface Props {}

const RegisterUserForm: React.FC<Props> = () => {
  const { loginIsLoading } = useUser();

  const fields: {
    name: 'username' | 'email' | 'password' | 'passwordConfirm';
    icon: string;
    placeholder: string;
    label?: string;
    type?: string;
  }[] = [
    {
      name: 'username',
      icon: 'fas fa-user',
      placeholder: 'Enter your desired username'
    },
    {
      name: 'email',
      icon: 'fas fa-envelope',
      placeholder: 'Enter your email',
      type: 'email'
    },
    {
      name: 'password',
      icon: 'fas fa-lock-alt',
      placeholder: 'Enter your password',
      type: 'password'
    },
    {
      name: 'passwordConfirm',
      icon: 'fas fa-lock-alt',
      placeholder: 'Please reenter your password',
      label: 'Confirm Password',
      type: 'password'
    }
  ];

  const handleFormSubmission = ({
    username,
    email,
    password
  }: {
    username: string;
    email: string;
    password: string;
  }) => {
    console.log({ username, email, password });
  };

  return (
    <>
      {loginIsLoading ? (
        <LoadingSpinner />
      ) : (
        <Formik
          initialValues={{ username: '', email: '', password: '', passwordConfirm: '' }}
          validate={values => {
            const errors: any = {};

            for (let i = 0; i < Object.keys(values).length; i++) {
              const current = Object.keys(values)[i];

              //@ts-ignore
              if (values[current] === '') {
                errors[current] = `${current} is required!`;
              }
            }

            if (values.password !== values.passwordConfirm) {
              errors.passwordConfirm = 'Passwords must match!';
            }

            return errors;
          }}
          onSubmit={values => handleFormSubmission(values)}
        >
          {({ handleSubmit, values, touched, errors, handleChange, handleBlur }) => (
            <Form onSubmit={handleSubmit}>
              {fields.map(field => (
                <Input
                  key={field.name}
                  name={field.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[field.name]}
                  touched={touched[field.name]}
                  errorText={errors[field.name]}
                  placeholder={field.placeholder}
                  label={field.label}
                  icon={field.icon}
                  type={field.type}
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
