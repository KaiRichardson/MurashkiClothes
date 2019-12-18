import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StoreState, readUserInfo as rUI, logUserIn as lUI, logUserOut as lUO } from 'Store';

/*
  Combines useUserActions and useUserState for components that need to subscribe to data
  as well as be able to dispatch actions to update it
*/
export const useUser = () => {
  const userState = useUserState();
  const userActions = useUserActions();

  return {
    ...userState,
    ...userActions
  };
};

/*
  Contains selections of pieces of user state for components that need to read state but not update it
*/
export const useUserState = () => {
  /*
    Returns store.user object
  */
  const userInfo = useSelector((store: StoreState) => store.user);

  /*
    Creates a reference to the loading state of the user login action
  */
  const loginIsLoading = useSelector((store: StoreState) => store.user.loading.login);

  return { userInfo, loginIsLoading };
};

/*
  Contains dispatches for actions for updating user state.
  For use in components that need to update state but not be subscribed to changes
  (prevents unnecessary rerenders)
*/
export const useUserActions = () => {
  const dispatch = useDispatch();

  /*
    Dispatches an action to read User Info from provided id
    Stores info in redux store
  */
  const readUserInfo = (id: string) => dispatch(rUI(id));

  /*
    Dispatches an action to log a user into the site,
    then stores their profile info in the store
  */
  const logUserIn = ({ username, password }: { username: string; password: string }) =>
    dispatch(lUI({ username, password }));

  /*
    Dispatches an action to log a user out,
    removes all information from the store
  */
  const logUserOut = () => dispatch(lUO());

  return { readUserInfo, logUserIn, logUserOut };
};

/*
  Uses readUserInfo effect when components mounts to the DOM
*/
export const useReadUserInfoOnMount = () => {
  const { userInfo, readUserInfo } = useUser();
  useEffect(() => {
    readUserInfo(userInfo._id);
  }, [readUserInfo, userInfo._id]);
};
