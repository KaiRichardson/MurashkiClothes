import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

import { User } from 'Store/types';
import * as actions from './user.actions';
import * as types from '../user.types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Redux User Action Creator tests', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should create a request action to log a user in and a success action', () => {
    //* Arrange
    const store = mockStore({ user: null, loading: { login: false } });
    const testData: User = {
      _id: 'testId',
      username: 'nichsecord',
      email: '',
      orders: [],
      cart: []
    };
    const expectedActions: types.UserActions[] = [
      {
        type: types.REQUEST_READ_USER_INFO
      },
      {
        type: types.SUCCESS_READ_USER_INFO,
        payload: testData
      }
    ];

    //* Act
    fetchMock.once('/auth/login', {
      body: testData
    });

    //* Assert
    //@ts-ignore
    return store.dispatch(actions.logUserIn(testData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should create a request action to log a user in and a fail action', () => {
    //* Arrange
    const store = mockStore({ user: null, loading: { login: false } });
    const testData = 'Oops, something went wrong';
    const expectedActions: types.UserActions[] = [
      {
        type: types.REQUEST_READ_USER_INFO
      },
      {
        type: types.FAIL_READ_USER_INFO,
        payload: testData
      }
    ];

    //* Act
    fetchMock.once('/auth/login', {
      throws: Error(testData)
    });

    //* Assert
    //@ts-ignore
    return store.dispatch(actions.logUserIn(testData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should create an action to log a user out', () => {
    //* Arrange
    const expectedAction: types.LogUserOut = {
      type: types.LOG_USER_OUT
    };

    //* Assert
    expect(actions.logUserOut()).toEqual(expectedAction);
  });
});
