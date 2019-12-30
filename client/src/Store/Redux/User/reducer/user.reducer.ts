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
  EMPTY_CART,
  CLEAR_USER_ERROR
} from '../user.types';

export interface UserState {
  _status: 'LOGGED_IN' | 'LOGGED_OUT' | 'LOADING';
  _error?: string;
  account: User;
}
const initialState: UserState = {
  _status: 'LOGGED_OUT',
  _error: undefined,
  account: {
    _id: '',
    username: '',
    email: '',
    address: undefined,
    cart: [],
    orders: [],
    stripeToken: undefined
  }
};

export default (state: UserState = initialState, action: UserActions): UserState => {
  switch (state._status) {
    case 'LOGGED_OUT':
      switch (action.type) {
        case REQUEST_READ_USER_INFO:
          /*
            Set _status => 'LOADING'
            Set account to empty values
          */
          return { ...state, _status: 'LOADING', _error: undefined, account: initialState.account };

        default:
          break;
      }

    case 'LOGGED_IN':
      switch (action.type) {
        case LOG_USER_OUT:
          /*
            Set account to empty values
          */
          return { ...state, _status: 'LOGGED_OUT', account: initialState.account };

        default:
          break;
      }

    case 'LOADING':
      switch (action.type) {
        case SUCCESS_READ_USER_INFO:
          /*
            Set _status => 'SUCCESS'
            Set account to user object in payload
          */
          return { ...state, _status: 'LOGGED_IN', account: { ...action.payload, cart: state.account.cart } };

        case FAIL_READ_USER_INFO:
          /*
            Set account to empty values
            Set _error to error message in payload
          */
          return { ...state, _error: action.payload };

        default:
          break;
      }

    case 'LOGGED_OUT':
    case 'LOGGED_IN':
      switch (action.type) {
        case CLEAR_USER_ERROR:
          /*
            Removes error message
          */
          return { ...state, _error: undefined };

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
                state.account.cart.findIndex(item => item.product.variant_id === action.payload.product.variant_id) !==
                -1
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

        default:
          break;
      }

    default:
      return state;
  }
};
