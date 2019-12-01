import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

import * as actions from './cart.actions';
import * as types from './cart.types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Redux Cart Action Creator tests', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should create an action to add an id to the productIds', () => {
    //* Arrange
    const idToBeAdded = 33;
    const expectedAction: types.AddProductToCart = {
      type: types.ADD_PRODUCT_TO_CART,
      payload: idToBeAdded
    };

    //* Assert
    expect(actions.addProductToCart(idToBeAdded)).toEqual(expectedAction);
  });

  it('should create an action to remove an id from the productIds', () => {
    //* Arrange
    const idToBeRemoved = 33;
    const expectedAction: types.RemoveProductFromCart = {
      type: types.REMOVE_PRODUCT_FROM_CART,
      payload: idToBeRemoved
    };

    //* Assert
    expect(actions.removeProductFromCart(idToBeRemoved)).toEqual(expectedAction);
  });

  it('should create an action to empty the cart', () => {
    //* Arrange
    const expectedAction: types.EmptyCart = {
      type: types.EMPTY_CART
    };

    //* Assert
    expect(actions.emptyCart()).toEqual(expectedAction);
  });

  it('should create an action to request to read the items referenced in the cart from the database and a success action', () => {
    //* Arrange
    const store = mockStore({ productIds: [33], products: [] });
    const expectedActions: types.CartActions[] = [
      {
        type: types.REQUEST_READ_CART_ITEMS_FROM_DB
      },
      {
        type: types.SUCCESS_READ_CART_ITEMS_FROM_DB,
        payload: [
          // eslint-disable-next-line
          { external_id: 'testdata', id: 33, name: 'test product', synced: 73, thumbnail_url: 'testurl', variants: 73 }
        ]
      }
    ];

    //* Act
    fetchMock.getOnce('/api/printful', {
      body: expectedActions[1].payload
    });

    //* Assert
    //@ts-ignore
    return store.dispatch(actions.readCartItemsFromDB()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should create an action to request to read the items refenced in the cart from the database and a fail action', () => {
    //* Arrange
    const store = mockStore({ productIds: [33], products: [] });
    const expectedActions: types.CartActions[] = [
      {
        type: types.REQUEST_READ_CART_ITEMS_FROM_DB
      },
      {
        type: types.FAIL_READ_CART_ITEMS_FROM_DB,
        payload: 'Oops, something went wrong'
      }
    ];

    //* Act
    fetchMock.once('/api/printful', {
      throws: Error('Oops, something went wrong')
    });

    //* Assert
    //@ts-ignore
    return store.dispatch(actions.readCartItemsFromDB()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
