import React from 'react';
import { Formik } from 'formik';

import { useUser } from 'hooks';
import { LoadingSpinner, Form, Input, Button } from 'elements';

interface Props {}

const LoginForm: React.FC<Props> = () => {
  const { logUserIn, loginIsLoading } = useUser();

  const fields: { name: 'username' | 'password'; icon: string; placeholder: string; type?: string }[] = [
    {
      name: 'username',
      icon: 'fas fa-user',
      placeholder: 'Please enter your username'
    },
    {
      name: 'password',
      icon: 'fas fa-lock-alt',
      placeholder: 'Please enter your password',
      type: 'password'
    }
  ];

  return (
    <>
      {loginIsLoading ? (
        <LoadingSpinner />
      ) : (
        <Formik
          initialValues={{ username: '', password: '' }}
          validate={values => {
            const errors: any = {};

            for (let i = 0; i < Object.keys(values).length; i++) {
              const current = Object.keys(values)[i];

              //@ts-ignore
              if (values[current] === '') {
                errors[current] = `${current} is required!`;
              }
            }

            return errors;
          }}
          // Following line is ignored because Formik expects Promise<any> but logUserIn returns a promise with specific types
          // @ts-ignore
          onSubmit={values => logUserIn(values)}
        >
          {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              {fields.map(field => (
                <Input
                  key={field.name}
                  name={field.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[field.name]}
                  errorText={errors[field.name]}
                  icon={field.icon}
                  touched={touched[field.name]}
                  type={field.type}
                  placeholder={field.placeholder}
                />
              ))}

              <Button dark type='submit'>
                Log In
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default LoginForm;
