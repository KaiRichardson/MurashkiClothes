import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { save, load, RLSOptions } from 'redux-localstorage-simple';

import cart from './Cart';
import user from './User';

const rLSConfig: RLSOptions = {
  states: ['cart.productIds', 'user.id']
};

const middleware = [logger, thunk, save(rLSConfig)];

export default createStore(
  combineReducers({ cart, user }),
  load(rLSConfig),
  composeWithDevTools(applyMiddleware(...middleware))
);
