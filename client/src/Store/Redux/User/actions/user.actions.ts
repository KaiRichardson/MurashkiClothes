import { Dispatch } from 'redux';

import { User, Variant } from 'Store/types';
import {
  LogUserOut,
  RequestReadUserInfo,
  SuccessReadUserInfo,
  FailReadUserInfo,
  AddCartItem,
  RemoveCartItem,
  UpdateCartItemQuantity,
  EmptyCart,
  ClearUserError,
  LOG_USER_OUT,
  REQUEST_READ_USER_INFO,
  SUCCESS_READ_USER_INFO,
  FAIL_READ_USER_INFO,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  UPDATE_CART_ITEM_QUANTITY,
  EMPTY_CART,
  CLEAR_USER_ERROR
} from '../user.types';

export const logUserIn = ({ username, password }: { username: string; password: string }) => async (
  dispatch: Dispatch<RequestReadUserInfo | SuccessReadUserInfo | FailReadUserInfo>
): Promise<SuccessReadUserInfo | FailReadUserInfo> => {
  dispatch({ type: REQUEST_READ_USER_INFO });

  try {
    // TODO: Replace with actual login route
    const response: Response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // TODO: Add Auth Header
      },
      body: JSON.stringify({ username, password })
    });
    const data: User = await response.json();

    return dispatch({ type: SUCCESS_READ_USER_INFO, payload: data });
  } catch (err) {
    return dispatch({ type: FAIL_READ_USER_INFO, payload: err.message });
  }
};

export const readUserInfo = (id: string) => async (
  dispatch: Dispatch<RequestReadUserInfo | SuccessReadUserInfo | FailReadUserInfo>
): Promise<SuccessReadUserInfo | FailReadUserInfo> => {
  dispatch({ type: REQUEST_READ_USER_INFO });

  try {
    // TODO: Replace with actual route
    const response: Response = await fetch(`auth/user/${id}`, {
      method: 'GET'
    });
    const data: User = await response.json();

    return dispatch({ type: SUCCESS_READ_USER_INFO, payload: data });
  } catch (err) {
    return dispatch({ type: FAIL_READ_USER_INFO, payload: err.message });
  }
};

export const addCartItem = ({ quantity, product }: { quantity: number; product: Variant }): AddCartItem => ({
  type: ADD_CART_ITEM,
  payload: {
    quantity,
    product
  }
});

export const removeCartItem = (variant_id: number): RemoveCartItem => ({
  type: REMOVE_CART_ITEM,
  payload: variant_id
});

export const updateCartItemQuantity = ({
  newQuantity,
  variant_id
}: {
  newQuantity: number;
  variant_id: number;
}): UpdateCartItemQuantity => ({
  type: UPDATE_CART_ITEM_QUANTITY,
  payload: {
    newQuantity,
    variant_id
  }
});

export const emptyCart = (): EmptyCart => ({
  type: EMPTY_CART
});

export const logUserOut = (): LogUserOut => {
  // TODO: Remove LocalStorage login token

  return { type: LOG_USER_OUT };
};

export const clearUserError = (): ClearUserError => ({
  type: CLEAR_USER_ERROR
});
