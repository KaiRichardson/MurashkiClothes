import React from 'react';
import Normalize from 'react-normalize';

import { Container } from 'layout';
import { Button } from 'elements';

const App = () => {
  return (
    <>
      <Normalize />
      <Container>
        <Button>I am a Button</Button>
      </Container>
    </>
  );
};

export default App;
