import React from 'react';

import { Button, Link, ButtonLink, ProductList, Section, Badge } from 'elements';
import { useUserActions } from 'hooks';

interface Props {}

const Home: React.FC<Props> = () => {
  const { addCartItem, emptyCart } = useUserActions();
  return (
    <>
      <Button
        onClick={() =>
          addCartItem({
            quantity: 2,
            product: {
              variant_id: 4048,
              name: 'JavaScript is !Cool - Brown / L',
              color: ' Brown ',
              size: ' L'
            }
          })
        }
      >
        TEST add brown shirt
      </Button>
      <Button
        dark
        onClick={() =>
          addCartItem({
            quantity: 33,
            product: {
              variant_id: 4013,
              name: 'JavaScript is !Cool - White / L',
              color: ' White ',
              size: ' L'
            }
          })
        }
      >
        TEST add white shirt
      </Button>
      <Button trans onClick={() => emptyCart()}>
        TEST empty cart
      </Button>
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
          {/* <ProductItem
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
          /> */}
        </ProductList>
      </Section>
    </>
  );
};

export default Home;
