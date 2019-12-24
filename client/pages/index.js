import React from 'react';
import AppContext from '../store/AppContext';
import {LAYOUT} from '../store/Actions';
import Menu from '../compontents/Menu';

export default () => {
  const {state, dispatch} = React.useContext(AppContext);
  const layout = state[LAYOUT];

  return <div>
    <Menu/>
    <p>Welcome to the next.js! Your theme is {layout.theme}</p>
  </div>;
}
