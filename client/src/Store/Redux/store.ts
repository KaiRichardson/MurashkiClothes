import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { save, load, RLSOptions } from 'redux-localstorage-simple';

import cart, { CartState } from './Cart';
import user, { UserState } from './User';

const rLSConfig: RLSOptions = {
  states: ['cart.productIds', 'user.id']
};

const middleware = [logger, thunk, save(rLSConfig)];

const store = createStore(
  combineReducers({ cart, user }),
  load(rLSConfig),
  composeWithDevTools(applyMiddleware(...middleware))
);
export interface StoreState {
  cart: CartState;
  user: UserState;
}

export default store;
