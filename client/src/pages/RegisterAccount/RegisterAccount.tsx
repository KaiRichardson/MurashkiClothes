import React from 'react';

import { useBodyScrollLock } from 'hooks';
import { Card, Section, Link } from 'elements';
import RegisterUserForm from './RegisterUserForm';

interface Props {}

const RegisterAccount: React.FC<Props> = () => {
  useBodyScrollLock();

  return (
    <Card style={{ zIndex: 1 }}>
      <Section title='Create your Account'>
        <RegisterUserForm />

        <p>
          <small>
            Already have an account?{' '}
            <Link light to='/login'>
              Click here to log in.
            </Link>
          </small>
        </p>
      </Section>
    </Card>
  );
};
export default RegisterAccount;
