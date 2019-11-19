import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Normalize from 'react-normalize';

import { Container } from 'layout';
import { Button, Link, LinkDark } from 'elements';

const App = () => {
  return (
    <>
      <Normalize />
      <Container>
        <Button>I am a Button</Button>
        <Button dark>I am a dark button</Button>
        <BrowserRouter>
          <Link to='/cart'>I am a link</Link>
          <LinkDark to='/cart'>I am a dark link</LinkDark>
        </BrowserRouter>
      </Container>
    </>
  );
};

export default App;
