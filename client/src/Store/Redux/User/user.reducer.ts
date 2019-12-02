import { User } from 'Store/types';
import { UserActions, REQUEST_LOG_USER_IN, SUCCESS_LOG_USER_IN, FAIL_LOG_USER_IN, LOG_USER_OUT } from './user.types';

export interface UserState extends User {
  loading: {
    login: boolean;
  };
}
const initialState: UserState = {
  id: '',
  username: '',
  loading: {
    login: false
  }
};

export default (state: UserState = initialState, action: UserActions): UserState => {
  const { type, payload } = action;

  switch (type) {
    case REQUEST_LOG_USER_IN:
      /*
      Set id and username to empty values
      Set loading.login => true
      */
      return { ...state, id: '', username: '', loading: { login: true } };
    case SUCCESS_LOG_USER_IN:
      /*
      Spread values from payload into state
      Set loading.login => false
      */
      return { ...state, ...payload, loading: { login: false } };
    case FAIL_LOG_USER_IN:
      /*
      Set id and username to empty values
      Set loading.login => false
      */
      return { ...state, id: '', username: '', loading: { login: false } };
    case LOG_USER_OUT:
      /*
      Set id and username to empty values
      */
      return { ...state, id: '', username: '' };
    default:
      return state;
  }
};
