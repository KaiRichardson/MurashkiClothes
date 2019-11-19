import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Normalize from 'react-normalize';

import { Container } from 'layout';
import { Button, Link, ButtonLink, ProductList, ProductItem } from 'elements';

const App = () => {
  return (
    <>
      <Normalize />
      <Container>
        <Button>I am a Button</Button>
        <Button dark>I am a dark button</Button>
        <BrowserRouter>
          <Link to='/cart'>I am a link</Link>
          <Link dark to='/cart'>
            I am a dark link
          </Link>
          <ButtonLink to='/cart'>I am a button link</ButtonLink>
          <ButtonLink dark to='/cart'>
            I am a dark button link
          </ButtonLink>
        </BrowserRouter>
        <ProductList>
          <ProductItem
            product={{
              id: 'abc123',
              title: 'denim jacket',
              price: 46.0,
              rating: 5,
              img: 'https://via.placeholder.com/500'
            }}
          />
        </ProductList>
      </Container>
    </>
  );
};

export default App;
