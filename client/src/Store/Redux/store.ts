import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { save, load, RLSOptions, LoadOptions } from 'redux-localstorage-simple';

import admin, { AdminState } from './Admin';
import user, { UserState } from './User';

const rLSConfig: RLSOptions = {
  states: ['user']
};

const loadOptions: LoadOptions = {
  ...rLSConfig,
  disableWarnings: true
};

const middleware = [logger, thunk, save(rLSConfig)];

const store = createStore(
  combineReducers({ admin, user }),
  load(loadOptions),
  composeWithDevTools(applyMiddleware(...middleware))
);
export interface StoreState {
  admin: AdminState;
  user: UserState;
}

export default store;
