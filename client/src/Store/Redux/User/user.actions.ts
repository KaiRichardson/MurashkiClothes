import { Dispatch } from 'redux';

import { User } from 'Store/types';
import {
  LogUserOut,
  RequestReadUserInfo,
  SuccessReadUserInfo,
  FailReadUserInfo,
  LOG_USER_OUT,
  REQUEST_READ_USER_INFO,
  SUCCESS_READ_USER_INFO,
  FAIL_READ_USER_INFO
} from './user.types';

export const logUserIn = ({ username, password }: { username: string; password: string }) => async (
  dispatch: Dispatch<RequestReadUserInfo | SuccessReadUserInfo | FailReadUserInfo>
): Promise<SuccessReadUserInfo | FailReadUserInfo> => {
  dispatch({ type: REQUEST_READ_USER_INFO });

  try {
    // TODO: Replace with actual login route
    const response: Response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // TODO: Add Auth Header
      },
      body: JSON.stringify({ username, password })
    });
    const data: User = await response.json();

    return dispatch({ type: SUCCESS_READ_USER_INFO, payload: data });
  } catch (err) {
    return dispatch({ type: FAIL_READ_USER_INFO, payload: err.message });
  }
};

export const logUserOut = (): LogUserOut => {
  // TODO: Remove LocalStorage login token

  return { type: LOG_USER_OUT };
};

export const readUserInfo = (id: string) => async (
  dispatch: Dispatch<RequestReadUserInfo | SuccessReadUserInfo | FailReadUserInfo>
): Promise<SuccessReadUserInfo | FailReadUserInfo> => {
  dispatch({ type: REQUEST_READ_USER_INFO });

  try {
    // TODO: Replace with actual route
    const response: Response = await fetch(`auth/user/${id}`, {
      method: 'GET'
    });
    const data: User = await response.json();

    return dispatch({ type: SUCCESS_READ_USER_INFO, payload: data });
  } catch (err) {
    return dispatch({ type: FAIL_READ_USER_INFO, payload: err.message });
  }
};
