import { User, Variant } from 'Store/types';
import reducer, { UserState } from './user.reducer';
import * as types from '../user.types';

describe('userReducer tests', () => {
  it(`should handle ${types.REQUEST_READ_USER_INFO}`, () => {
    //* Arrange
    const initialState: UserState = {
      account: {
        _id: '',
        username: '',
        email: '',
        orders: [],
        cart: []
      },
      loading: {
        login: false
      }
    };
    const expectedState: UserState = { ...initialState, loading: { login: true } };

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
      account: {
        _id: '',
        username: '',
        email: '',
        orders: [],
        cart: []
      },
      loading: {
        login: true
      }
    };
    const expectedState: UserState = { ...initialState, account: testData, loading: { login: false } };

    //* Act
    const result = reducer(initialState, { type: types.SUCCESS_READ_USER_INFO, payload: testData });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.FAIL_READ_USER_INFO}`, () => {
    //* Arrange
    const initialState: UserState = {
      account: {
        _id: '',
        username: '',
        email: '',
        orders: [],
        cart: []
      },
      loading: {
        login: true
      }
    };
    const expectedState: UserState = { ...initialState, loading: { login: false } };

    //* Act
    const result = reducer(initialState, { type: types.FAIL_READ_USER_INFO, payload: 'Oops, something went wrong' });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.LOG_USER_OUT}`, () => {
    //* Arrange
    const initialState: UserState = {
      account: {
        _id: 'testId',
        username: 'nichsecord',
        email: '',
        orders: [],
        cart: []
      },
      loading: {
        login: false
      }
    };
    const expectedState: UserState = {
      ...initialState,
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
        variant_id: 'test_variant_id',
        name: 'test product',
        color: 'blue',
        size: 'medium'
      }
    };
    const initialState: UserState = {
      account: {
        _id: 'testId',
        username: 'nichsecord',
        email: '',
        orders: [],
        cart: []
      },
      loading: {
        login: false
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

  it(`should handle ${types.REMOVE_CART_ITEM}`, () => {
    //* Arrange
    const testData = 'test_id';
    const initialState: UserState = {
      account: {
        _id: 'testId',
        username: 'nichsecord',
        email: '',
        orders: [],
        cart: [{ quantity: 33, product: { variant_id: testData, name: 'test product', color: 'blue', size: 'medium' } }]
      },
      loading: {
        login: false
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
    const testData = { newQuantity: 5510, variant_id: 'update_me' };
    const initialState: UserState = {
      account: {
        _id: 'testId',
        username: 'nichsecord',
        email: '',
        orders: [],
        cart: [
          { quantity: 33, product: { variant_id: 'update_me', name: 'test product', color: 'blue', size: 'medium' } },
          {
            quantity: 73,
            product: { variant_id: 'dont_update_me', name: 'a different product', color: 'yellow', size: 'large' }
          }
        ]
      },
      loading: {
        login: false
      }
    };
    const expectedState: UserState = {
      ...initialState,
      account: {
        ...initialState.account,
        cart: [
          {
            quantity: testData.newQuantity,
            product: { variant_id: 'update_me', name: 'test product', color: 'blue', size: 'medium' }
          },
          {
            quantity: 73,
            product: { variant_id: 'dont_update_me', name: 'a different product', color: 'yellow', size: 'large' }
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
      account: {
        _id: 'testId',
        username: 'nichsecord',
        email: '',
        orders: [],
        cart: [
          { quantity: 33, product: { variant_id: 'update_me', name: 'test product', color: 'blue', size: 'medium' } },
          {
            quantity: 73,
            product: { variant_id: 'dont_update_me', name: 'a different product', color: 'yellow', size: 'large' }
          }
        ]
      },
      loading: {
        login: false
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
});
