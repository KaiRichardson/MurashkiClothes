import { Action, User } from 'Store/types';

//* User Action Types
export const REQUEST_LOG_USER_IN = 'User/REQUEST_LOG_USER_IN';
export const SUCCESS_LOG_USER_IN = 'User/SUCCESS_LOG_USER_IN';
export const FAIL_LOG_USER_IN = 'User/FAIL_LOG_USER_IN';

export const LOG_USER_OUT = 'User/LOG_USER_OUT';

//* User Actions
export interface RequestLogUserIn extends Action {
  type: typeof REQUEST_LOG_USER_IN;
}
export interface SuccessLogUserIn extends Action {
  type: typeof SUCCESS_LOG_USER_IN;
  payload: User;
}
export interface FailLogUserIn extends Action {
  type: typeof FAIL_LOG_USER_IN;
  payload: string;
}
export interface LogUserOut extends Action {
  type: typeof LOG_USER_OUT;
}

export type UserActions = RequestLogUserIn | SuccessLogUserIn | FailLogUserIn | LogUserOut;
