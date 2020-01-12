import { User } from 'Store';
import {
  UserActions,
  LOG_USER_OUT,
  REQUEST_READ_USER_INFO,
  SUCCESS_READ_USER_INFO,
  FAIL_READ_USER_INFO,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  UPDATE_CART_ITEM_QUANTITY,
  EMPTY_CART
} from '../user.types';

export interface UserState {
  account: User;
  loading: {
    login: boolean;
  };
}
const initialState: UserState = {
  account: {
    _id: '',
    username: '',
    email: '',
    address: undefined,
    cart: [],
    orders: [],
    stripeToken: undefined
  },
  loading: {
    login: false
  }
};

export default (state: UserState = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case REQUEST_READ_USER_INFO:
      /*
      Set account to empty values
      Set loading.login => true
      */
      return { ...state, account: initialState.account, loading: { login: true } };
    case SUCCESS_READ_USER_INFO:
      /*
      Set account to user object in payload
      Set loading.login => false
      */
      return { ...state, account: action.payload, loading: { login: false } };
    case FAIL_READ_USER_INFO:
      /*
      Set account to empty values
      Set loading.login => false
      */
      return { ...state, account: initialState.account, loading: { login: false } };

    case ADD_CART_ITEM:
      /*
        Add item to front of cart list,
        if the item is already present in the cart its quantity is incremented instead
      */
      return {
        ...state,
        account: {
          ...state.account,
          cart:
            // If the returned index is -1 then the payload does not exist in the cart and should be added
            state.account.cart.findIndex(item => item.product.variant_id === action.payload.product.variant_id) !== -1
              ? state.account.cart.map(item =>
                  // If the current item matches the payload variant_id then its quantity should be incremented
                  item.product.variant_id === action.payload.product.variant_id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                )
              : [action.payload, ...state.account.cart]
        }
      };
    case REMOVE_CART_ITEM:
      /*
        Removes an item from the cart based on the passed in variant_id
      */
      return {
        ...state,
        account: {
          ...state.account,
          cart: state.account.cart.filter(item => item.product.variant_id !== action.payload)
        }
      };
    case UPDATE_CART_ITEM_QUANTITY:
      /*
        Finds an item based on the passed in variant_id and sets its quantity to the passed in newQuantitty
      */
      return {
        ...state,
        account: {
          ...state.account,
          cart: state.account.cart.map(item =>
            item.product.variant_id === action.payload.variant_id
              ? { ...item, quantity: action.payload.newQuantity }
              : item
          )
        }
      };
    case EMPTY_CART:
      /*
        Sets the cart to an empty array
      */
      return { ...state, account: { ...state.account, cart: [] } };

    case LOG_USER_OUT:
      /*
      Set account to empty values
      */
      return { ...state, account: initialState.account };
    default:
      return state;
  }
};
