import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  StoreState,
  Variant,
  readUserInfo as rUI,
  logUserIn as lUI,
  logUserOut as lUO,
  addCartItem as aCI,
  removeCartItem as rCI,
  updateCartItemQuantity as uCIQ,
  emptyCart as eC
} from 'Store';

/*
  Combines useUserActions and useUserState for components that need to subscribe to data
  as well as be able to dispatch actions to update it
*/
export const useUser = () => {
  const userState = useUserState();
  const userActions = useUserActions();

  return {
    ...userState,
    ...userActions
  };
};

/*
  Contains selections of pieces of user state for components that need to read state but not update it
*/
export const useUserState = () => {
  /*
    Returns store.user.account object
  */
  const accountInfo = useSelector((store: StoreState) => store.user.account);

  /*
    Returns store.user.account.cart
  */
  const cart = useSelector((store: StoreState) => store.user.account.cart);
  const numberOfItemsInCart = cart.length;

  /*
    Creates a reference to the _status attribute of the user
    returns 'LOGGED_OUT', 'LOGGED_IN', or 'LOADING'
  */
  const userStatus = useSelector((store: StoreState) => store.user._status);

  return { accountInfo, cart, numberOfItemsInCart, userStatus };
};

/*
  Contains dispatches for actions for updating user state.
  For use in components that need to update state but not be subscribed to changes
  (prevents unnecessary rerenders)
*/
export const useUserActions = () => {
  const dispatch = useDispatch();

  /*
    Dispatches an action to read User Info from provided id
    Stores info in redux store
  */
  const readUserInfo = (id: string) => dispatch(rUI(id));

  /*
    Dispatches an action to log a user into the site,
    then stores their profile info in the store
  */
  const logUserIn = ({ username, password }: { username: string; password: string }) =>
    dispatch(lUI({ username, password }));

  /*
    Dispatches an action to log a user out,
    removes all information from the store
  */
  const logUserOut = () => dispatch(lUO());

  /*
    Dispatches an action to add a product to the users cart
  */
  const addCartItem = ({ quantity = 1, product }: { quantity: number; product: Variant }) =>
    dispatch(aCI({ quantity, product }));

  /*
    Dispatches an action to remove an item from the users cart
    based on a passed in variant_id
  */
  const removeCartItem = (variant_id: number) => dispatch(rCI(variant_id));

  /*
    Dispatches an action to set a cart items quantity to a new quantity
    based on a passed in variant_id
  */
  const updateCartItemQuantity = ({ newQuantity, variant_id }: { newQuantity: number; variant_id: number }) =>
    dispatch(uCIQ({ newQuantity, variant_id }));

  /*
    Dispatches an action to remove all items from the users cart
  */
  const emptyCart = () => dispatch(eC());

  return { readUserInfo, logUserIn, logUserOut, addCartItem, removeCartItem, updateCartItemQuantity, emptyCart };
};

/*
  Uses readUserInfo effect when components mounts to the DOM
*/
export const useReadUserInfoOnMount = () => {
  const { accountInfo, readUserInfo } = useUser();
  useEffect(() => {
    readUserInfo(accountInfo._id);
  }, [readUserInfo, accountInfo._id]);
};
