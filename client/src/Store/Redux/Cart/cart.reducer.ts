import { PrintfulProduct } from 'Store/types';
import {
  CartActions,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  EMPTY_CART,
  SUCCESS_READ_CART_ITEMS_FROM_DB,
  FAIL_READ_CART_ITEMS_FROM_DB,
  REQUEST_READ_CART_ITEMS_FROM_DB
} from './cart.types';
import { LogUserOut, LOG_USER_OUT } from '../User/user.types';

export interface CartState {
  productIds: number[];
  products: PrintfulProduct[];
  loading: {
    products: boolean;
  };
}
const initialState: CartState = {
  productIds: [],
  products: [],
  loading: {
    products: false
  }
};

export default (state: CartState = initialState, action: CartActions | LogUserOut): CartState => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      /*
        Add passed in ID to front of reference list
      */
      return { ...state, productIds: [action.payload, ...state.productIds] };
    case REMOVE_PRODUCT_FROM_CART:
      /*
        Remove passed in ID from reference list
      */
      return { ...state, productIds: state.productIds.filter(id => id !== action.payload) };
    case EMPTY_CART:
      /*
        Remove all products and IDs from lists
      */
      return { ...state, productIds: [], products: [] };
    case REQUEST_READ_CART_ITEMS_FROM_DB:
      /*
        Reset products[] to remove potentially stale or duplicate data
        Set loading.products => true
      */
      return { ...state, products: [], loading: { ...state.loading, products: true } };
    case SUCCESS_READ_CART_ITEMS_FROM_DB:
      /*
        Spread returned items into products[]
        Set loading.products => false
      */
      return { ...state, products: [...action.payload], loading: { ...state.loading, products: false } };
    case FAIL_READ_CART_ITEMS_FROM_DB:
      /*
        TODO: Payload is error message, should be used to inform user
        Set loading.products => false
      */
      return { ...state, loading: { ...state.loading, products: false } };
    case LOG_USER_OUT:
      /*
        When the user logs out remove all products and references from state
      */
      return { ...state, productIds: [], products: [] };
    default:
      return state;
  }
};
