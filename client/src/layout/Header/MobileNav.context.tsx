import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const initialState = { navIsOpen: false, toggleNavIsOpen: () => {} };

export const MobileNavContext = createContext(initialState);

interface Props {
  children: any;
}

export const MobileNavContextProvider: React.FC<Props> = ({ children }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const toggleNavIsOpen = () => setNavIsOpen(!navIsOpen);

  return <MobileNavContext.Provider value={{ navIsOpen, toggleNavIsOpen }}>{children}</MobileNavContext.Provider>;
};

MobileNavContextProvider.propTypes = {
  children: PropTypes.any.isRequired
};
