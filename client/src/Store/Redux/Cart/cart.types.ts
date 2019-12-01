import { Action, PrintfulProduct } from '../../types';

//* Cart Action Types
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const EMPTY_CART = 'EMPTY_CART';
export const REQUEST_READ_CART_ITEMS_FROM_DB = 'REQUEST_READ_CART_ITEMS_FROM_DB';
export const SUCCESS_READ_CART_ITEMS_FROM_DB = 'SUCCESS_READ_CART_ITEMS_FROM_DB';
export const FAIL_READ_CART_ITEMS_FROM_DB = 'FAIL_READ_CART_ITEMS_FROM_DB';

export type CartActionTypes =
  | typeof ADD_PRODUCT_TO_CART
  | typeof REMOVE_PRODUCT_FROM_CART
  | typeof EMPTY_CART
  | typeof REQUEST_READ_CART_ITEMS_FROM_DB
  | typeof SUCCESS_READ_CART_ITEMS_FROM_DB
  | typeof FAIL_READ_CART_ITEMS_FROM_DB;

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
