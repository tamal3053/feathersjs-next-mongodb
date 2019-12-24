import React from 'react';
import AppContext from './AppContext';
import StoreReducer from './StoreReducer';
import {LAYOUT} from './Actions';

const contextProps = {
  [LAYOUT] : {
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
