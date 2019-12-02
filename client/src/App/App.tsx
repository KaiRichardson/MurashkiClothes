import React from 'react';
import Normalize from 'react-normalize';

import { GlobalStyle } from './GlobalStyle';
import { Container, Header, Footer } from 'layout';
import { Button, Link, ButtonLink, ProductList, ProductItem, Section, Badge } from 'elements';
import { useDispatch } from 'react-redux';
import { logUserOut, logUserIn } from 'Store';

const App: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    // dispatch(logUserIn({ id: 'testId', username: 'nichsecord' }));
  }, []);
  return (
    <>
      <Normalize />
      <GlobalStyle />

      <Header />

      <Container>
        <Button>I am a Button</Button>
        <Button dark>dark button</Button>
        <Button trans>Click to get products from API</Button>
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
              {...{
                id: 'abc123',
                title: 'denim jacket',
                price: 46.0,
                img: 'https://via.placeholder.com/330x400'
              }}
            />
            <ProductItem
              {...{
                id: 'abc123',
                title: 'denim jacket',
                price: 46.0,
                discount: 28.5,
                img: 'https://via.placeholder.com/330x400'
              }}
            />
            <ProductItem
              {...{
                id: 'abc123',
                title: 'denim jacket',
                price: 46.0,
                img: 'https://via.placeholder.com/330x400'
              }}
            />
            <ProductItem
              {...{
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

      <Footer />
    </>
  );
};

export default App;
