import reducer, { CartState } from './cart.reducer';
import * as types from './cart.types';

describe('cartReducer tests', () => {
  it(`should handle ${types.ADD_PRODUCT_TO_CART}`, () => {
    //* Arrange
    const initialState: CartState = {
      productIds: [33, 5510],
      products: [],
      loading: {
        products: false
      }
    };
    const expectedState: CartState = {
      productIds: [73, 33, 5510],
      products: [],
      loading: {
        products: false
      }
    };

    //* Act
    const result = reducer(initialState, { type: types.ADD_PRODUCT_TO_CART, payload: 73 });

    // * Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.REMOVE_PRODUCT_FROM_CART}`, () => {
    //* Arrange
    const initialState: CartState = {
      productIds: [73, 33, 5510],
      products: [],
      loading: {
        products: false
      }
    };
    const expectedState: CartState = {
      productIds: [33, 5510],
      products: [],
      loading: {
        products: false
      }
    };

    //* Act
    const result = reducer(initialState, { type: types.REMOVE_PRODUCT_FROM_CART, payload: 73 });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.EMPTY_CART}`, () => {
    //* Arrange
    const initialState: CartState = {
      productIds: [73, 33, 5510],
      products: [
        // eslint-disable-next-line
        { external_id: 'testdata', id: 33, name: 'test product', synced: 73, thumbnail_url: 'testurl', variants: 73 }
      ],
      loading: {
        products: false
      }
    };
    const expectedState: CartState = {
      productIds: [],
      products: [],
      loading: {
        products: false
      }
    };

    //* Act
    const result = reducer(initialState, {
      type: types.EMPTY_CART
    });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.REQUEST_READ_CART_ITEMS_FROM_DB}`, () => {
    //* Arrange
    const initialState: CartState = {
      productIds: [73],
      products: [],
      loading: {
        products: false
      }
    };
    const expectedState: CartState = {
      productIds: [73],
      products: [],
      loading: {
        products: true
      }
    };

    //* Act
    const result = reducer(initialState, { type: types.REQUEST_READ_CART_ITEMS_FROM_DB });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.SUCCESS_READ_CART_ITEMS_FROM_DB}`, () => {
    //* Arrange
    const apiPayload = [
      // eslint-disable-next-line
      { external_id: 'testdata', id: 33, name: 'test product', synced: 73, thumbnail_url: 'testurl', variants: 73 }
    ];
    const initialState: CartState = {
      productIds: [73],
      products: [],
      loading: {
        products: true
      }
    };
    const expectedState: CartState = {
      productIds: [73],
      products: apiPayload,
      loading: {
        products: false
      }
    };

    //* Act
    const result = reducer(initialState, { type: types.SUCCESS_READ_CART_ITEMS_FROM_DB, payload: apiPayload });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.SUCCESS_READ_CART_ITEMS_FROM_DB}`, () => {
    //* Arrange
    const initialState: CartState = {
      productIds: [73],
      products: [],
      loading: {
        products: true
      }
    };
    const expectedState: CartState = {
      productIds: [73],
      products: [],
      loading: {
        products: false
      }
    };

    //* Act
    const result = reducer(initialState, {
      type: types.FAIL_READ_CART_ITEMS_FROM_DB,
      payload: 'Oops, something went wrong'
    });

    //* Assert
    expect(result).toEqual(expectedState);
  });
});
