import { Dispatch } from 'redux';

// TODO: Add default `store` export when api/products route is complete
import { PrintfulProduct } from 'Store';
import {
  AddProductToCart,
  RemoveProductFromCart,
  EmptyCart,
  RequestGetCartItemsFromDB,
  SuccessGetCartItemsFromDB,
  FailGetCartItemsFromDB,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  EMPTY_CART,
  REQUEST_READ_CART_ITEMS_FROM_DB,
  SUCCESS_READ_CART_ITEMS_FROM_DB,
  FAIL_READ_CART_ITEMS_FROM_DB
} from './cart.types';

//* Cart Action Creators
export const addProductToCart = (id: number): AddProductToCart => ({
  type: ADD_PRODUCT_TO_CART,
  payload: id
});

export const removeProductFromCart = (id: number): RemoveProductFromCart => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: id
});

export const emptyCart = (): EmptyCart => ({ type: EMPTY_CART });

export const readCartItemsFromDB = () => async (
  dispatch: Dispatch<RequestGetCartItemsFromDB | SuccessGetCartItemsFromDB | FailGetCartItemsFromDB>
): Promise<SuccessGetCartItemsFromDB | FailGetCartItemsFromDB> => {
  // Get product ids from store
  // const ids: number[] = store.getState().cart.productIds;
  dispatch({ type: REQUEST_READ_CART_ITEMS_FROM_DB });

  try {
    // TODO: Create POST route at /api/products
    // TODO: which will recieve an array of ids and return an array of associated products
    // const response: Response = await fetch('/api/products', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ids})
    // });
    const response: Response = await fetch('/api/printful', { method: 'GET' });
    const data: PrintfulProduct[] = await response.json();

    return dispatch({ type: SUCCESS_READ_CART_ITEMS_FROM_DB, payload: data });
  } catch (err) {
    return dispatch({ type: FAIL_READ_CART_ITEMS_FROM_DB, payload: err.message });
  }
};
