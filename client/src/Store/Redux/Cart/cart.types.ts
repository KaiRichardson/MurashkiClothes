import { Action, PrintfulProduct } from 'Store/types';

//* Cart Action Types
export const ADD_PRODUCT_TO_CART = 'Cart/ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'Cart/REMOVE_PRODUCT_FROM_CART';
export const EMPTY_CART = 'Cart/EMPTY_CART';

export const REQUEST_READ_CART_ITEMS_FROM_DB = 'Cart/REQUEST_READ_CART_ITEMS_FROM_DB';
export const SUCCESS_READ_CART_ITEMS_FROM_DB = 'Cart/SUCCESS_READ_CART_ITEMS_FROM_DB';
export const FAIL_READ_CART_ITEMS_FROM_DB = 'Cart/FAIL_READ_CART_ITEMS_FROM_DB';

//* Cart Actions
export interface AddProductToCart extends Action {
  type: typeof ADD_PRODUCT_TO_CART;
  payload: number;
}
export interface RemoveProductFromCart extends Action {
  type: typeof REMOVE_PRODUCT_FROM_CART;
  payload: number;
}
export interface EmptyCart extends Action {
  type: typeof EMPTY_CART;
}
export interface RequestGetCartItemsFromDB extends Action {
  type: typeof REQUEST_READ_CART_ITEMS_FROM_DB;
}
export interface SuccessGetCartItemsFromDB extends Action {
  type: typeof SUCCESS_READ_CART_ITEMS_FROM_DB;
  payload: PrintfulProduct[];
}
export interface FailGetCartItemsFromDB extends Action {
  type: typeof FAIL_READ_CART_ITEMS_FROM_DB;
  payload: string;
}
export type CartActions =
  | AddProductToCart
  | RemoveProductFromCart
  | EmptyCart
  | RequestGetCartItemsFromDB
  | SuccessGetCartItemsFromDB
  | FailGetCartItemsFromDB;
