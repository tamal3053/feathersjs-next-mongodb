import React from 'react';
import {ERROR, LAYOUT, LOADING} from './Actions';

const StoreReducer = (state, action) => {

  switch (action.type) {
    case [ERROR]:  // User notification
      return {...state, [ERROR]: action.payload};

    case [LOADING]:
      return {...state, [LOADING]: action.payload};

    case [LAYOUT]: // State Layout values
      return {...state, [LAYOUT]: action.payload};

    default: {
      console.error('error reducer', action);
      throw new Error('Action type must be defined.');
    }
  }

};

export default StoreReducer;
