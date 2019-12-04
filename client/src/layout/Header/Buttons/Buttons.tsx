import React from 'react';
import styled from 'styled-components';

import { spacing } from 'utils';
import { ButtonLink, Badge } from 'elements';
import ToggleNavButton from './ToggleNavButton';
import { useCartState } from 'hooks';

interface Props {}

const Buttons: React.FC<Props> = () => {
  const { numberOfItemsInCart } = useCartState();

  const items = [
    {
      name: 'search',
      link: '/search',
      icon: 'fas fa-search'
    },
    {
      name: 'favorites',
      link: '/favorites',
      icon: 'far fa-heart'
    },
    {
      name: 'cart',
      link: '/cart',
      icon: 'fas fa-shopping-bag'
    }
  ];

  return (
    <Wrapper>
      {items.map(item => (
        <Item trans to={item.link} key={item.name}>
          <i className={item.icon} />
          {item.name === 'cart' && <Badge number={numberOfItemsInCart} />}
        </Item>
      ))}

      <ToggleNavButton />
    </Wrapper>
  );
};

export default Buttons;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, max-content);
  }
`;

const Item = styled(ButtonLink)`
  position: relative;
  padding: ${spacing.xs};

  @media screen and (min-width: 992px) {
    padding: ${spacing.sm} ${spacing.md};
  }
`;
