import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  StoreState,
  addProductToCart as aPTC,
  removeProductFromCart as rPFC,
  emptyCart as eC,
  readCartItemsFromDB as rCIFDB
} from 'Store';

export const useCart = () => {
  const dispatch = useDispatch();

  /*
    Creates a reference to the products (not the ids) being kept in the store
  */
  const cartItems = useSelector((state: StoreState) => state.cart.products);

  /*
    Creates a reference to the loading state of the cart products
  */
  const cartItemsLoading = useSelector((state: StoreState) => state.cart.loading.products);

  /*
    Dispatches an action to add a product's id to the reference list
  */
  const addProductToCart = (id: number) => dispatch(aPTC(id));

  /*
    Dispatches an action to remove a product's id from the reference list
  */
  const removeProductFromCart = (id: number) => dispatch(rPFC(id));

  /*
    Dispatches an action to remove all ids from the the reference list
    and all products that were stored in state
  */
  const emptyCart = () => dispatch(eC());

  /*
    Dispatches an action to read ids from the reference list
    and stores the returned products in the store at store.cart.products
  */
  const readCartItemsFromDB = () => dispatch(rCIFDB());

  return {
    cartItems,
    cartItemsLoading,
    addProductToCart,
    removeProductFromCart,
    emptyCart,
    readCartItemsFromDB
  };
};

/*
  Uses readCartItemsFromDB effect when components mounts to the DOM
*/
export const useReadCartItemsOnMount = () => {
  const { readCartItemsFromDB } = useCart();
  useEffect(() => {
    readCartItemsFromDB();
  }, [readCartItemsFromDB]);
};
