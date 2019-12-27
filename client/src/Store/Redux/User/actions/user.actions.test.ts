import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

import { User, Variant } from 'Store/types';
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

  it('should create an action to add an item to the users cart', () => {
    //* Arrange
    const testData: Variant = {
      variant_id: 335510,
      name: 'test product',
      color: 'blue',
      size: 'medium'
    };
    const expectedAction: types.AddCartItem = {
      type: types.ADD_CART_ITEM,
      payload: {
        quantity: 1,
        product: testData
      }
    };

    //* Assert
    expect(actions.addCartItem({ quantity: 1, product: testData })).toEqual(expectedAction);
  });

  it('should create an action to remove an item from the users cart', () => {
    //* Arrange
    const testData = 33;
    const expectedAction: types.RemoveCartItem = {
      type: types.REMOVE_CART_ITEM,
      payload: testData
    };

    //* Assert
    expect(actions.removeCartItem(testData)).toEqual(expectedAction);
  });

  it('should create an action to update the quantity of an item in the users cart', () => {
    //* Arrange
    const testData = {
      newQuantity: 33,
      variant_id: 5510
    };
    const expectedAction: types.UpdateCartItemQuantity = {
      type: types.UPDATE_CART_ITEM_QUANTITY,
      payload: testData
    };

    //* Assert
    expect(actions.updateCartItemQuantity(testData)).toEqual(expectedAction);
  });

  it('should create an action to empty the users cart', () => {
    //* Arrange
    const expectedAction: types.EmptyCart = {
      type: types.EMPTY_CART
    };

    //* Assert
    expect(actions.emptyCart()).toEqual(expectedAction);
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
