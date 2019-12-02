import { Action, User } from 'Store/types';

//* User Action Types
export const REQUEST_READ_USER_INFO = 'User/REQUEST_READ_USER_INFO';
export const SUCCESS_READ_USER_INFO = 'User/SUCCESS_READ_USER_INFO';
export const FAIL_READ_USER_INFO = 'User/FAIL_READ_USER_INFO';

export const LOG_USER_OUT = 'User/LOG_USER_OUT';

//* User Actions
export interface RequestReadUserInfo extends Action {
  type: typeof REQUEST_READ_USER_INFO;
}
export interface SuccessReadUserInfo extends Action {
  type: typeof SUCCESS_READ_USER_INFO;
  payload: User;
}
export interface FailReadUserInfo extends Action {
  type: typeof FAIL_READ_USER_INFO;
  payload: string;
}
export interface LogUserOut extends Action {
  type: typeof LOG_USER_OUT;
}

export type UserActions = RequestReadUserInfo | SuccessReadUserInfo | FailReadUserInfo | LogUserOut;
