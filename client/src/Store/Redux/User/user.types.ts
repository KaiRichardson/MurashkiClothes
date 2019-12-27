import { Action, User, Variant } from 'Store/types';

//* User Action Types
export const REQUEST_READ_USER_INFO = 'User/REQUEST_READ_USER_INFO';
export const SUCCESS_READ_USER_INFO = 'User/SUCCESS_READ_USER_INFO';
export const FAIL_READ_USER_INFO = 'User/FAIL_READ_USER_INFO';

export const ADD_CART_ITEM = 'User/ADD_CART_ITEM';
export const REMOVE_CART_ITEM = 'User/REMOVE_CART_ITEM';
export const UPDATE_CART_ITEM_QUANTITY = 'User/UPDATE_CART_ITEM_QUANTITY';
export const EMPTY_CART = 'User/EMPTY_CART';

export const LOG_USER_OUT = 'User/LOG_USER_OUT';

//* User Actions
export interface RequestReadUserInfo extends Action {
  type: typeof REQUEST_READ_USER_INFO;
}
export interface SuccessReadUserInfo extends Action {
  type: typeof SUCCESS_READ_USER_INFO;
  payload: User;
}
export interface FailReadUserInfo extends Action {
  type: typeof FAIL_READ_USER_INFO;
  payload: string;
}

export interface AddCartItem extends Action {
  type: typeof ADD_CART_ITEM;
  payload: {
    quantity: number;
    product: Variant;
  };
}
export interface RemoveCartItem extends Action {
  type: typeof REMOVE_CART_ITEM;
  payload: number;
}
export interface UpdateCartItemQuantity extends Action {
  type: typeof UPDATE_CART_ITEM_QUANTITY;
  payload: {
    newQuantity: number;
    variant_id: number;
  };
}
export interface EmptyCart extends Action {
  type: typeof EMPTY_CART;
}

export interface LogUserOut extends Action {
  type: typeof LOG_USER_OUT;
}

export type UserActions =
  | RequestReadUserInfo
  | SuccessReadUserInfo
  | FailReadUserInfo
  | AddCartItem
  | RemoveCartItem
  | UpdateCartItemQuantity
  | EmptyCart
  | LogUserOut;
