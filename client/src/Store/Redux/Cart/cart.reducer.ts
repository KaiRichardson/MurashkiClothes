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

export default (state: CartState = initialState, action: CartActions): CartState => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return { ...state, productIds: [action.payload, ...state.productIds] };
    case REMOVE_PRODUCT_FROM_CART:
      return { ...state, productIds: state.productIds.filter(id => id !== action.payload) };
    case EMPTY_CART:
      return { ...state, productIds: [], products: [] };
    case REQUEST_READ_CART_ITEMS_FROM_DB:
      return { ...state, products: [], loading: { ...state.loading, products: true } };
    case SUCCESS_READ_CART_ITEMS_FROM_DB:
      return { ...state, products: [...action.payload], loading: { ...state.loading, products: false } };
    case FAIL_READ_CART_ITEMS_FROM_DB:
      return { ...state, products: [], loading: { ...state.loading, products: false } };
    default:
      return state;
  }
};
