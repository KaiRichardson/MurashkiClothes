import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Normalize from 'react-normalize';

import { Container } from 'layout';
import { Button, Link, ButtonLink, ProductList, ProductItem, Section } from 'elements';

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
        <Section
          title={
            <>
              <span style={{ display: 'block' }}>this</span> is a section
            </>
          }
        >
          <p>this section's title is a jsx element</p>
        </Section>
        <Section>
          <p>this section has no title</p>
        </Section>
        <Section title='this is also a section'>
          <p>this section's title is a string</p>
        </Section>
        <ProductList>
          <ProductItem
            product={{
              id: 'abc123',
              title: 'denim jacket',
              price: 46.0,
              rating: 2,
              img: 'https://via.placeholder.com/500'
            }}
          />
        </ProductList>
      </Container>
    </>
  );
};

export default App;
