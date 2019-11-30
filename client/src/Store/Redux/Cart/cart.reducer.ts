import { Action } from 'Store';
import { PrintfulProduct } from 'Store/types';
import {
  CartActionTypes,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  EMPTY_CART,
  GET_CART_ITEMS_FROM_DB
} from './cart.actions';

interface CartState {
  productIds: number[];
  products: PrintfulProduct[];
}
const initialState: CartState = {
  productIds: [],
  products: []
};

export default (state: CartState = initialState, action: Action<CartActionTypes>): CartState => {
  const { type, payload } = action;

  switch (type) {
    case ADD_PRODUCT_TO_CART:
      return { ...state, productIds: [payload, ...state.productIds] };
    case REMOVE_PRODUCT_FROM_CART:
      return { ...state, productIds: state.productIds.filter(id => id !== payload) };
    case EMPTY_CART:
      return { ...state, productIds: [], products: [] };
    case GET_CART_ITEMS_FROM_DB:
      return { ...state, products: [...payload] };
    default:
      return state;
  }
};
