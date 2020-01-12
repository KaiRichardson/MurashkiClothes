import { User, Variant } from 'Store/types';
import reducer, { UserState } from './user.reducer';
import * as types from '../user.types';

describe('userReducer tests', () => {
  it(`should handle ${types.REQUEST_READ_USER_INFO}`, () => {
    //* Arrange
    const initialState: UserState = {
      _status: 'LOGGED_OUT',
      account: {
        _id: '',
        username: '',
        email: '',
        orders: [],
        cart: []
      }
    };
    const expectedState: UserState = { ...initialState, _status: 'LOADING' };

    //* Act
    const result = reducer(initialState, { type: types.REQUEST_READ_USER_INFO });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.SUCCESS_READ_USER_INFO}`, () => {
    //* Arrange
    const testData: User = {
      _id: 'testId',
      username: 'nichsecord',
      email: '',
      orders: [],
      cart: []
    };
    const initialState: UserState = {
      _status: 'LOADING',
      account: {
        _id: '',
        username: '',
        email: '',
        orders: [],
        cart: [
          { quantity: 33, product: { variant_id: 3333, name: 'test product', color: 'blue', size: 'medium' } },
          {
            quantity: 73,
            product: { variant_id: 6666, name: 'a different product', color: 'yellow', size: 'large' }
          }
        ]
      }
    };
    const expectedState: UserState = {
      ...initialState,
      _status: 'LOGGED_IN',
      account: { ...testData, cart: initialState.account.cart }
    };

    //* Act
    const result = reducer(initialState, { type: types.SUCCESS_READ_USER_INFO, payload: testData });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.FAIL_READ_USER_INFO}`, () => {
    //* Arrange
    const initialState: UserState = {
      _status: 'LOADING',
      account: {
        _id: '',
        username: '',
        email: '',
        orders: [],
        cart: []
      }
    };
    const expectedState: UserState = { ...initialState, _error: 'Oops, something went wrong' };

    //* Act
    const result = reducer(initialState, { type: types.FAIL_READ_USER_INFO, payload: 'Oops, something went wrong' });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.LOG_USER_OUT}`, () => {
    //* Arrange
    const initialState: UserState = {
      _status: 'LOGGED_IN',
      account: {
        _id: 'testId',
        username: 'nichsecord',
        email: '',
        orders: [],
        cart: []
      }
    };
    const expectedState: UserState = {
      ...initialState,
      _status: 'LOGGED_OUT',
      account: { _id: '', username: '', email: '', orders: [], cart: [] }
    };

    //* Act
    const result = reducer(initialState, { type: types.LOG_USER_OUT });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.ADD_CART_ITEM}`, () => {
    //* Arrange
    const testData: { quantity: number; product: Variant } = {
      quantity: 1,
      product: {
        variant_id: 5510,
        name: 'test product',
        color: 'blue',
        size: 'medium'
      }
    };
    const initialState: UserState = {
      _status: 'LOGGED_IN',
      account: {
        _id: 'testId',
        username: 'nichsecord',
        email: '',
        orders: [],
        cart: []
      }
    };
    const expectedState: UserState = {
      ...initialState,
      account: { ...initialState.account, cart: [testData, ...initialState.account.cart] }
    };

    //* Act
    const result = reducer(initialState, { type: types.ADD_CART_ITEM, payload: testData });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.ADD_CART_ITEM} for an existing item`, () => {
    //* Arrange
    const testData: Variant = {
      variant_id: 5510,
      name: 'test product',
      color: 'blue',
      size: 'medium'
    };
    const initialState: UserState = {
      _status: 'LOGGED_IN',
      account: {
        _id: 'testId',
        username: 'nichsecord',
        email: '',
        orders: [],
        cart: [
          {
            quantity: 1,
            product: {
              variant_id: 5510,
              name: 'test product',
              color: 'blue',
              size: 'medium'
            }
          }
        ]
      }
    };
    const expectedState: UserState = {
      ...initialState,
      account: { ...initialState.account, cart: [{ ...initialState.account.cart[0], quantity: 2 }] }
    };

    //* Act
    const result = reducer(initialState, { type: types.ADD_CART_ITEM, payload: { quantity: 1, product: testData } });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.REMOVE_CART_ITEM}`, () => {
    //* Arrange
    const testData = 73;
    const initialState: UserState = {
      _status: 'LOGGED_OUT',
      account: {
        _id: 'testId',
        username: 'nichsecord',
        email: '',
        orders: [],
        cart: [{ quantity: 33, product: { variant_id: testData, name: 'test product', color: 'blue', size: 'medium' } }]
      }
    };
    const expectedState: UserState = {
      ...initialState,
      account: { ...initialState.account, cart: [] }
    };

    //* Act
    const result = reducer(initialState, { type: types.REMOVE_CART_ITEM, payload: testData });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.UPDATE_CART_ITEM_QUANTITY}`, () => {
    //* Arrange
    const testData = { newQuantity: 5510, variant_id: 33 };
    const initialState: UserState = {
      _status: 'LOGGED_IN',
      account: {
        _id: 'testId',
        username: 'nichsecord',
        email: '',
        orders: [],
        cart: [
          { quantity: 33, product: { variant_id: 33, name: 'test product', color: 'blue', size: 'medium' } },
          {
            quantity: 73,
            product: { variant_id: 7373, name: 'a different product', color: 'yellow', size: 'large' }
          }
        ]
      }
    };
    const expectedState: UserState = {
      ...initialState,
      account: {
        ...initialState.account,
        cart: [
          {
            quantity: testData.newQuantity,
            product: { variant_id: 33, name: 'test product', color: 'blue', size: 'medium' }
          },
          {
            quantity: 73,
            product: { variant_id: 7373, name: 'a different product', color: 'yellow', size: 'large' }
          }
        ]
      }
    };

    //* Act
    const result = reducer(initialState, { type: types.UPDATE_CART_ITEM_QUANTITY, payload: testData });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.EMPTY_CART}`, () => {
    //* Arrange
    const initialState: UserState = {
      _status: 'LOGGED_IN',
      account: {
        _id: 'testId',
        username: 'nichsecord',
        email: '',
        orders: [],
        cart: [
          { quantity: 33, product: { variant_id: 3333, name: 'test product', color: 'blue', size: 'medium' } },
          {
            quantity: 73,
            product: { variant_id: 6666, name: 'a different product', color: 'yellow', size: 'large' }
          }
        ]
      }
    };
    const expectedState: UserState = {
      ...initialState,
      account: {
        ...initialState.account,
        cart: []
      }
    };

    //* Act
    const result = reducer(initialState, { type: types.EMPTY_CART });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.CLEAR_USER_ERROR}`, () => {
    //* Arrange
    const initialState: UserState = {
      _status: 'LOGGED_OUT',
      _error: 'Oops, something went wrong',
      account: {
        _id: 'testId',
        username: 'nichsecord',
        email: '',
        orders: [],
        cart: []
      }
    };
    const expectedState: UserState = {
      ...initialState,
      _error: undefined
    };

    //* Act
    const result = reducer(initialState, { type: types.CLEAR_USER_ERROR });

    //* Assert
    expect(result).toEqual(expectedState);
  });
});
