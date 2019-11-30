import reducer from './cart.reducer';
import * as actions from './cart.actions';
import { PrintfulProduct } from 'Store/types';

interface CartState {
  productIds: number[];
  products: PrintfulProduct[];
}

describe('cartReducer tests', () => {
  it(`should handle ${actions.ADD_PRODUCT_TO_CART}`, () => {
    //* Arrange
    const initialState: CartState = {
      productIds: [33, 5510],
      products: []
    };
    const expectedState: CartState = {
      productIds: [73, 33, 5510],
      products: []
    };

    //* Act
    const result = reducer(initialState, { type: actions.ADD_PRODUCT_TO_CART, payload: 73 });

    // * Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${actions.REMOVE_PRODUCT_FROM_CART}`, () => {
    //* Arrange
    const initialState: CartState = {
      productIds: [73, 33, 5510],
      products: []
    };
    const expectedState: CartState = {
      productIds: [33, 5510],
      products: []
    };

    //* Act
    const result = reducer(initialState, { type: actions.REMOVE_PRODUCT_FROM_CART, payload: 73 });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${actions.EMPTY_CART}`, () => {
    //* Arrange
    const initialState: CartState = {
      productIds: [73, 33, 5510],
      products: [
        // eslint-disable-next-line
        { external_id: 'testdata', id: 33, name: 'test product', synced: 73, thumbnail_url: 'testurl', variants: 73 }
      ]
    };
    const expectedState: CartState = {
      productIds: [],
      products: []
    };

    //* Act
    const result = reducer(initialState, {
      type: actions.EMPTY_CART
    });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${actions.GET_CART_ITEMS_FROM_DB}`, () => {
    //* Arrange
    const apiPayload = [
      // eslint-disable-next-line
      { external_id: 'testdata', id: 33, name: 'test product', synced: 73, thumbnail_url: 'testurl', variants: 73 }
    ];
    const initialState: CartState = {
      productIds: [73],
      products: []
    };
    const expectedState: CartState = {
      productIds: [73],
      products: apiPayload
    };

    //* Act
    const result = reducer(initialState, { type: actions.GET_CART_ITEMS_FROM_DB, payload: apiPayload });

    //* Assert
    expect(result).toEqual(expectedState);
  });
});
