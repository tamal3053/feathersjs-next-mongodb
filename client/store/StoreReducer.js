import React from 'react';
import {ERROR, LAYOUT, LOADING, TOKEN, USER} from './Actions';

const StoreReducer = (state, action) => {

  switch (action.type) {
    case ERROR:  // User notification
      return {...state, [ERROR]: action.payload};

    case LOADING:
      return {...state, [LOADING]: action.payload};

    case LAYOUT: // State Layout values
      return {...state, [LAYOUT]: action.payload};

    // Users and Tokens
    case TOKEN:
      return {...state, [TOKEN]: action.payload};
    case USER :
      return {...state, [USER]: action.payload};

    default:
      throw new Error('Action type must be defined.');
  }

};

export default StoreReducer;
