import React from 'react';
import styled from 'styled-components';

import { spacing } from 'utils';
import { ButtonLink, Badge } from 'elements';
import ToggleNavButton from './ToggleNavButton';
import { useUserState } from 'hooks';

interface Props {}

const Buttons: React.FC<Props> = () => {
  const { userStatus, numberOfItemsInCart } = useUserState();

  const items = [
    {
      name: 'search',
      link: '/search',
      icon: 'fas fa-search'
    },
    // If the user is not logged in display login button instead of favorites
    userStatus !== 'LOGGED_IN'
      ? {
          name: 'sign in',
          link: '/login',
          icon: 'fas fa-sign-in'
        }
      : {
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

      {window.innerWidth < 768 && <ToggleNavButton />}
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
  padding: ${spacing.sm};

  @media screen and (min-width: 992px) {
    padding: ${spacing.sm} ${spacing.md};
  }
`;
