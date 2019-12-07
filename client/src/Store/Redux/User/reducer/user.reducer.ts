import { User } from 'Store';
import {
  UserActions,
  LOG_USER_OUT,
  REQUEST_READ_USER_INFO,
  SUCCESS_READ_USER_INFO,
  FAIL_READ_USER_INFO
} from '../user.types';

export interface UserState extends User {
  loading: {
    login: boolean;
  };
}
const initialState: UserState = {
  _id: '',
  username: '',
  email: '',
  address: undefined,
  cart: [],
  orders: [],
  stripeToken: undefined,
  loading: {
    login: false
  }
};

export default (state: UserState = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case REQUEST_READ_USER_INFO:
      /*
      Set id and username to empty values
      Set loading.login => true
      */
      return { ...state, _id: '', username: '', loading: { login: true } };
    case SUCCESS_READ_USER_INFO:
      /*
      Spread values from payload into state
      Set loading.login => false
      */
      return { ...state, ...action.payload, loading: { login: false } };
    case FAIL_READ_USER_INFO:
      /*
      Set id and username to empty values
      Set loading.login => false
      */
      return { ...state, _id: '', username: '', loading: { login: false } };
    case LOG_USER_OUT:
      /*
      Set id and username to empty values
      */
      return { ...state, _id: '', username: '' };
    default:
      return state;
  }
};
