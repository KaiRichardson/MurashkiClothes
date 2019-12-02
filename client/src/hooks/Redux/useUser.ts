import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StoreState, readUserInfo as rUI, logUserIn as lUI, logUserOut as lUO } from 'Store';

export const useUser = () => {
  const dispatch = useDispatch();

  /*
    Returns store.user object
  */
  const userInfo = useSelector((store: StoreState) => store.user);

  /*
    Creates a reference to the loading state of the user login action
  */
  const loginIsLoading = useSelector((store: StoreState) => store.user.loading.login);

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

  return { userInfo, loginIsLoading, readUserInfo, logUserIn, logUserOut };
};

/*
  Uses readUserInfo effect when components mounts to the DOM
*/
export const useReadUserInfoOnMount = () => {
  const { userInfo, readUserInfo } = useUser();
  useEffect(() => {
    readUserInfo(userInfo.id);
  }, [readUserInfo, userInfo.id]);
};
