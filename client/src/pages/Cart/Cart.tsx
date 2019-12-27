import React from 'react';

import { useUserState } from 'hooks';
import { Section, ButtonLink } from 'elements';
import CartItem from './CartItem';

interface Props {}

const Cart: React.FC<Props> = () => {
  const { cart } = useUserState();

  return (
    <Section title='Cart'>
      <ButtonLink brand to='/checkout' style={{ alignSelf: 'flex-end' }}>
        Checkout
      </ButtonLink>

      <section>
        {cart.map(item => (
          <CartItem {...item} key={item.product.variant_id} />
        ))}
      </section>

      <ButtonLink brand to='/checkout' style={{ alignSelf: 'flex-end' }}>
        Checkout
      </ButtonLink>
    </Section>
  );
};

export default Cart;
