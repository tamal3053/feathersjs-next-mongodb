import React from 'react';
import AppContext from './AppContext';
import StoreReducer from './StoreReducer';
import {LAYOUT, TOKEN} from './Actions';

const contextProps = {
  [TOKEN]: null,
  [LAYOUT]: {
    theme: 'dark'
  }
};

const StoreProvider = ({children}) => {

  const [state, dispatch] = React.useReducer(StoreReducer, contextProps);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );

};

export default StoreProvider;
