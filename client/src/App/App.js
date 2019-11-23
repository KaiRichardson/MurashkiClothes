import React from 'react';
import Normalize from 'react-normalize';

import { GlobalStyle } from './GlobalStyle';
import { Container, Header } from 'layout';
import { Button, Link, ButtonLink, ProductList, ProductItem, Section, Badge } from 'elements';
//, Logo

const App = () => {
  return (
    <>
      <Normalize />
      <GlobalStyle />

      <Header />

      <Container>
        <Button>I am a Button</Button>
        <Button dark>I am a dark button</Button>
        <Button trans>I am a transparent button</Button>
        <Link to='/cart'>I am a link</Link>
        <Link dark to='/cart'>
          I am a dark link
        </Link>
        <ButtonLink to='/cart'>I am a button link</ButtonLink>
        <ButtonLink dark to='/cart'>
          I am a dark button link
        </ButtonLink>
        <ButtonLink trans to='/cart'>
          I am a transparent button link
        </ButtonLink>
        <div style={{ position: 'relative', width: '70px' }}>
          This is a badge
          <Badge number={11} />
        </div>
        <Section
          title={
            <>
              <span style={{ display: 'block' }}>this</span> is a section
            </>
          }
        >
          <p>this sections title is a jsx element</p>
        </Section>
        <Section>
          <p>this section has no title</p>
        </Section>
        <Section title='this is also a section'>
          <p>this sections title is a string</p>
          <ProductList>
            <ProductItem
              product={{
                id: 'abc123',
                title: 'denim jacket',
                price: 46.0,
                img: 'https://via.placeholder.com/330x400'
              }}
            />
            <ProductItem
              product={{
                id: 'abc123',
                title: 'denim jacket',
                price: 46.0,
                discount: 28.5,
                img: 'https://via.placeholder.com/330x400'
              }}
            />
            <ProductItem
              product={{
                id: 'abc123',
                title: 'denim jacket',
                price: 46.0,
                img: 'https://via.placeholder.com/330x400'
              }}
            />
            <ProductItem
              product={{
                id: 'abc123',
                title: 'denim jacket',
                price: 46.0,
                discount: 28.5,
                img: 'https://via.placeholder.com/330x400'
              }}
            />
          </ProductList>
        </Section>
      </Container>
    </>
  );
};

export default App;
