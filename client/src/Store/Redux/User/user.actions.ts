import { Dispatch } from 'redux';

import { User } from 'Store/types';
import {
  RequestLogUserIn,
  SuccessLogUserIn,
  FailLogUserIn,
  LogUserOut,
  REQUEST_LOG_USER_IN,
  SUCCESS_LOG_USER_IN,
  FAIL_LOG_USER_IN,
  LOG_USER_OUT
} from './user.types';

export const logUserIn = (userInfo: User) => async (
  dispatch: Dispatch<RequestLogUserIn | SuccessLogUserIn | FailLogUserIn>
): Promise<SuccessLogUserIn | FailLogUserIn> => {
  dispatch({ type: REQUEST_LOG_USER_IN });

  try {
    // TODO: Replace with actual login route
    await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // TODO: Add Auth Header
      },
      body: JSON.stringify({ ...userInfo })
    });

    return dispatch({ type: SUCCESS_LOG_USER_IN, payload: userInfo });
  } catch (err) {
    return dispatch({ type: FAIL_LOG_USER_IN, payload: err.message });
  }
};

export const logUserOut = (): LogUserOut => {
  // TODO: Remove LocalStorage login token

  return { type: LOG_USER_OUT };
};
