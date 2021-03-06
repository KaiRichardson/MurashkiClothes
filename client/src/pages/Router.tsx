import React from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useReturnToTop } from 'hooks';
import { spacing } from 'utils';
import { Container as C } from 'layout';
import Home from './Home';
import AdminDashboard from './AdminDashboard';
import Login from './Login';
import RegisterAccount from './RegisterAccount';
import Contact from './Contact';
import Shop, { Children, Men, Women } from './Shop';
import Cart from './Cart';
import Favorites from './Favorites';
import Search from './Search';
import Product from './Product';

interface Props {}

const Router: React.FC<Props> = () => {
  const params = useParams();
  useReturnToTop(params);

  return (
    <Container>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/admin'>
          <AdminDashboard />
        </Route>

        <Route exact path='/login'>
          <Login />
        </Route>

        <Route exact path='/register'>
          <RegisterAccount />
        </Route>

        <Route exact path='/contact'>
          <Contact />
        </Route>

        <Route exact path='/shop'>
          <Shop />
        </Route>

        <Route exact path='/shop/children'>
          <Children />
        </Route>

        <Route exact path='/shop/men'>
          <Men />
        </Route>

        <Route exact path='/shop/women'>
          <Women />
        </Route>

        <Route exact path='/shop/:category/:productid'>
          <Product />
        </Route>

        <Route exact path='/cart'>
          <Cart />
        </Route>

        <Route exact path='/favorites'>
          <Favorites />
        </Route>

        <Route exact path='/search'>
          <Search />
        </Route>
      </Switch>
    </Container>
  );
};

export default Router;

const Container = styled(C).attrs({ as: 'main' })`
  /* Value based on height of mobile header */
  --headerOffset: 82px;

  min-height: calc(100vh - var(--headerOffset));
  padding-top: ${spacing.md};
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    /* Adjusted when header resizes */
    --headerOffset: 98px;
  }
`;
