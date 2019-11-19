import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Normalize from 'react-normalize';

import { Container } from 'layout';
import { Button, Link, LinkDark, ButtonLink } from 'elements';

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
          <ButtonLink to='/cart'>I am a button link</ButtonLink>
          <ButtonLink dark to='/cart'>
            I am a dark button link
          </ButtonLink>
        </BrowserRouter>
      </Container>
    </>
  );
};

export default App;
