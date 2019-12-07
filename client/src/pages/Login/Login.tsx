import React from 'react';

import { useBodyScrollLock } from 'hooks';
import { Card, Section, Link } from 'elements';
import LoginForm from './LoginForm';

interface Props {}

const Login: React.FC<Props> = () => {
  useBodyScrollLock();

  return (
    <Card style={{ zIndex: 1 }}>
      <Section title='Login to Murashki'>
        <LoginForm />
        <p>
          <small>
            Don't have an account?{' '}
            <Link light to='/register'>
              Sign up here.
            </Link>{' '}
            Can't remember your password?{' '}
            <Link light to='reset'>
              Click here to reset it.
            </Link>
          </small>
        </p>
      </Section>
    </Card>
  );
};

export default Login;
