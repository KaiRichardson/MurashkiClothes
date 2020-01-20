import React from 'react';

import { useUserState, useUserActions } from 'hooks';
import { spacing } from 'utils';
import { Section, ButtonLink, Link, Button } from 'elements';
import CartItem from './CartItem';

interface Props {}

const Cart: React.FC<Props> = () => {
  const { cart, numberOfItemsInCart } = useUserState();
  const { emptyCart } = useUserActions();

  return (
    <Section title='Cart'>
      <ButtonLink brand to='/checkout' style={{ alignSelf: 'flex-end' }}>
        Proceed to Checkout
      </ButtonLink>

      {numberOfItemsInCart === 0 && (
        <p>
          Your cart is empty.{' '}
          <Link light to='/shop'>
            Why not treat yourself?
          </Link>
        </p>
      )}

      <section>
        {cart.map(item => (
          <CartItem {...item} key={item.product.variant_id} />
        ))}
      </section>

      <ButtonLink brand to='/checkout' style={{ alignSelf: 'flex-end' }}>
        Proceed to Checkout
      </ButtonLink>

      <Button trans style={{ margin: `${spacing.lg} auto`, display: 'block' }} onClick={emptyCart}>
        Empty Cart
      </Button>
    </Section>
  );
};

export default Cart;
