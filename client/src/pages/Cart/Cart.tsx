import React from 'react';

import { useUserState } from 'hooks';
import { Section, ButtonLink, Link } from 'elements';
import CartItem from './CartItem';

interface Props {}

const Cart: React.FC<Props> = () => {
  const { cart, numberOfItemsInCart } = useUserState();

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
    </Section>
  );
};

export default Cart;
