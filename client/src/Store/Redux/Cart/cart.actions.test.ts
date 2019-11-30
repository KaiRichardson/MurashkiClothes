import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

import * as actions from './cart.actions';
import { Action } from 'Store/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Redux Cart Action Creator tests', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should create an action to add an id to the productIds', () => {
    //* Arrange
    const idToBeAdded = 33;
    const expectedAction: Action<typeof actions.ADD_PRODUCT_TO_CART> = {
      type: actions.ADD_PRODUCT_TO_CART,
      payload: idToBeAdded
    };

    //* Assert
    expect(actions.addProductToCart(idToBeAdded)).toEqual(expectedAction);
  });

  it('should create an action to remove an id from the productIds', () => {
    //* Arrange
    const idToBeRemoved = 33;
    const expectedAction: Action<typeof actions.REMOVE_PRODUCT_FROM_CART> = {
      type: actions.REMOVE_PRODUCT_FROM_CART,
      payload: idToBeRemoved
    };

    //* Assert
    expect(actions.removeProductFromCart(idToBeRemoved)).toEqual(expectedAction);
  });

  it('should create an action to empty the cart', () => {
    //* Arrange
    const expectedAction: Action<typeof actions.EMPTY_CART> = {
      type: actions.EMPTY_CART
    };

    //* Assert
    expect(actions.emptyCart()).toEqual(expectedAction);
  });

  it('should create an action to get the items referenced in the cart from the database', () => {
    //* Arrange
    const store = mockStore({ productIds: [33], products: [] });

    const expectedActions: Action<actions.CartActionTypes>[] = [
      {
        type: actions.GET_CART_ITEMS_FROM_DB,
        payload: [
          // eslint-disable-next-line
          { external_id: 'testdata', id: 33, name: 'test product', synced: 73, thumbnail_url: 'testurl', variants: 73 }
        ]
      }
    ];

    //* Act
    fetchMock.getOnce('/api/printful', {
      body: expectedActions[0].payload
    });

    //* Assert
    //@ts-ignore
    return store.dispatch(actions.getCartItemsFromDB()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
