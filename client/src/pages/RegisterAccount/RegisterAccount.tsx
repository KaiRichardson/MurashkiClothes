import React from 'react';
import styled from 'styled-components';

import { useBodyScrollLock } from 'hooks';
import { Card, Section, Link } from 'elements';

interface Props {}

const RegisterAccount: React.FC<Props> = () => {
  useBodyScrollLock();

  return (
    <Card style={{ zIndex: 1 }}>
      <Section title='Create your Account'>
        RegisterAccount
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
