import { User } from 'Store';
import {
  UserActions,
  LOG_USER_OUT,
  REQUEST_READ_USER_INFO,
  SUCCESS_READ_USER_INFO,
  FAIL_READ_USER_INFO
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
    case LOG_USER_OUT:
      /*
      Set account to empty values
      */
      return { ...state, account: initialState.account };
    default:
      return state;
  }
};
