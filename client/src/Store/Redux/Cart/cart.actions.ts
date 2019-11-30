import { Dispatch } from 'redux';

import { Action } from 'Store';
import { PrintfulProduct } from 'Store/types';

//* Cart Action Types
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const EMPTY_CART = 'EMPTY_CART';
export const GET_CART_ITEMS_FROM_DB = 'GET_CART_ITEMS_FROM_DB';

export type CartActionTypes =
  | typeof ADD_PRODUCT_TO_CART
  | typeof REMOVE_PRODUCT_FROM_CART
  | typeof EMPTY_CART
  | typeof GET_CART_ITEMS_FROM_DB;

//* Cart Action Creators
export const addProductToCart = (id: number): Action<typeof ADD_PRODUCT_TO_CART> => ({
  type: ADD_PRODUCT_TO_CART,
  payload: id
});

export const removeProductFromCart = (id: number): Action<typeof REMOVE_PRODUCT_FROM_CART> => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: id
});

export const emptyCart = (): Action<typeof EMPTY_CART> => ({ type: EMPTY_CART });

export const getCartItemsFromDB = () => async (
  dispatch: Dispatch<Action<typeof GET_CART_ITEMS_FROM_DB>>
): Promise<Action<typeof GET_CART_ITEMS_FROM_DB> | undefined> => {
  try {
    const response: Response = await fetch('/api/printful', { method: 'GET' });
    const data: PrintfulProduct[] = await response.json();

    return dispatch({ type: GET_CART_ITEMS_FROM_DB, payload: data });
  } catch (err) {
    console.log(err);
  }
};
